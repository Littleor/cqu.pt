require('../style.css');
var $ = require('./jquery.min');
require('./tagcloud.min');
// templates
var sideBoxTemplates = require('../templates/templates.html');
document.body.insertAdjacentHTML("beforeend", sideBoxTemplates);
require('../templates/templates');

$(function() {
    var main_input = $('.main_input'), enter = $("#enter"), more = $("#more"), $tagcloud = $(".tagcloud"), $status = $("#status");
    var more_text = more.find("p");
    //升起动画控制
    var iUp = (function() {
        var t = 0,
            d = 200,
            clean = function(){
                t = 0;
            },
            up = function(e) {
                setTimeout(function() {
                    $(e).addClass("up")
                }, t);
                t += d;
            },
            down = function(e){
                $(e).removeClass("up");
            },
            toggle = function(e){
                setTimeout(function() {
                    $(e).toggleClass("up")
                }, t);
                t += d;
            };
        return {
            clean: clean,
            up: up,
            down: down,
            toggle: toggle
        }
    })();
    $(".iUp").each(function(i, e) {
        iUp.up(e);
    });
    var status = {
        reset: function(){
            $status.find("i").attr("class", "reset");
            $status.find("span").text("正在查询中");
        },
        on: function(data, text){
            $status.find("i").attr("class", "on");
            if(!text){
                $status.find("span").text("服务器在线 " + data + "ms");
            }else{
                $status.find("span").text(text);
            }
        },
        off: function(){
            $status.find("i").attr("class", "off");
            $status.find("span").text("服务器超时");
        },
        unknown: function(){
          $status.find("span").text("未知");
        }
    };
    //服务器状态
    var statusQuery = function(){
        status.reset();
        var query = $.ajax({
            url: "//cqu.pt/status.php?" + new Date().getTime(),
            timeout : 10000,
            success: function(data){
                data = JSON.parse(data);
                var ip = data[0],
                    ping = parseInt(data[1]),
                    code = data[2];
                if(ping <= 0){
                    status.off();
                }else if(code >= 400){
                    status.off();
                }else{
                    if(ip){
                        status.on(ping);
                    }else{
                        status.unknown();
                    }
                }
            },
            complete: function(XMLHttpRequest){
                if(XMLHttpRequest.status !== 200){
                    query.abort();
                    status.unknown();
                }
            }
        });
    };
    statusQuery();
    $status.on("click", statusQuery);
    main_input.on({
        focus: function () {
            if (this.value == this.defaultValue) {
                this.value = "";
            }
            more.hide();
            enter.addClass("active");
        },
        blur: function () {
            if (this.value == "") {
                this.value = this.defaultValue;
            }
            more.hide();
            enter.removeClass("active");
        },
        keypress: function (event) {
            if (event.keyCode == "13") {
                enter.click();
            }
        }
    });
    //转换地址
    var turl = function (in_url) {
        var host, host_array, out_url, url_array, host_reg = /^((25[0-5])|(2[0-4]\d)|(1\d\d)|([1-9]\d)|\d)(\.((25[0-5])|(2[0-4]\d)|(1\d\d)|([1-9]\d)|\d)){3}$|^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$/, host_reg_result = false, port_reg_result = true;
        var whiteList = /cqupt.edu.cn$|^202.202.\d{1,3}.\d{1,3}$|^172.\d{1,3}.\d{1,3}.\d{1,3}$|^222.177.140.\d{1,3}$|^211.83.208.\d{1,3}$|^219.153.62.64$/;
        var reg = function (reg, str) {
            return !!reg.test(str);
        };
        var thost = function (in_host) {
            var out_host, suffix;
            //判断host是否已为转换后的地址
            if (in_host.indexOf("cqu.pt") === -1) {
                suffix = ".cqu.pt";
            } else {
                suffix = "";
            }
            //判断host是否为教务在线
            if (in_host === "jwzx.cqupt.edu.cn") {
                host_reg_result = true;
                out_host = "http://jwzx.cqu.pt";
            }else{
                //判断host是否有端口号
                if (in_host.indexOf(":") === -1) {
                    host_reg_result = reg(host_reg, in_host);
                    out_host = "http://" + in_host + suffix;
                } else {
                    port_reg_result = false;
                    host_array = in_host.split(":");
                    host_reg_result = reg(host_reg, host_array[0]);
                    out_host = "http://" +  host_array[0] + suffix;
                }
            }
            return out_host;
        };
        //分割原地址
        url_array = in_url.split("/");
        host = url_array[0];
        //如果host不是白名单内域名
        if (!reg(whiteList, host)) {
            more_text.html('输入的地址未列入内网外入白名单，无法通过外网访问。');
            return false;
        }
        out_url = thost(host);
        //拼接地址
        for (var j = 1; j < url_array.length; j++) {
            if(url_array[j]){
                out_url += "/" + url_array[j];
            }
        }
        if (url_array[url_array.length-1].indexOf(".") === -1) {
            out_url += "/";
        }
        if (!host_reg_result) {
            more_text.html('输入的内网地址，格式有误！<br>请检查后重新输入。');
            out_url = 0;
        } else {
            if (!port_reg_result) {
                more_text.html('外网地址为：<a target="_blank" href="' + out_url + '">' + out_url + '</a><br><small>温馨提醒: 内网外入只支持访问默认80端口网站!</small>');
            } else {
                more_text.html('外网地址为：<a target="_blank" href="' + out_url + '">' + out_url + '</a><br><small>(若无法访问请检查地址或<a href="http://congm.in">联系作者Cong Min</a>)</small>');
            }
        }
        return out_url;
    };
    //输入框确认点击
    enter.on("click", function () {
        more.show();
        var main_input_val = $.trim(main_input.val());
        if (main_input_val.indexOf("http://") != -1) {
            main_input_val = main_input_val.split("http://")[1];
            main_input.val(main_input_val);
        }
        if (main_input_val.indexOf("https://") != -1 ) {
            main_input_val = main_input_val.split("https://")[1];
            main_input.val(main_input_val);
        }
        var url = turl(main_input_val);
        if (url) {
            window.open(url);
        }
    });
    //读取josn数据，顶部悬浮提醒框warn文本及tagList快捷链接
    (function(data) {
        var tags = data.tagsList;
        $.each(tags, function (i, e) {
            $tagcloud.append("<a target='_blank' href='" + e.href + "'>" + e.title + "</a>");
        });
        tagcloud({
            radius: 100,
            fontsize: 17
        });
    })(require('../../json/data'));
    //底部信息切换
    setTimeout(show_about, 10000);
    function show_about() {
        $(".about#tome").fadeToggle();
        $(".about#toblues").fadeToggle();
        setTimeout(show_about, 10000);
    }

//顶部悬浮提醒框
  var warn = $("#warn"), warn_text = $("#warn-text");
  var s = warn.get(0), si = warn_text.get(0);
  var s_scrollLeft, s_add = 1, tmar;
//文字滑动
  function mar() {
    if (s.offsetWidth <= si.offsetWidth) {
      s_scrollLeft = s.scrollLeft;
      s.scrollLeft += s_add;
      if (s_scrollLeft == s.scrollLeft) {
        s_add = -s_add;
      }
      tmar = setTimeout(mar, 20);
    }
  }
  //框体升降
  var warnBox = {
    up: function () {
      warn.animate({ "top": "-48px" }, "slow");
      clearTimeout(tmar);
    },
    down: function (text) {
      var t = {
        showTime: 500,
        moveTime: 4000,
        totalTime: 15000
      };
      $.each(text, function (i, e) {
        setTimeout(function () {
          s.scrollLeft = 0;
          warn_text.html(e);
          warn.animate({"top": "18px"}, "slow");
        }, t.totalTime * i + t.showTime);
        setTimeout(function () {
          mar();
        }, t.totalTime * i + t.moveTime);
        setTimeout(function () {
          warnBox.up();
        }, t.totalTime * i + t.totalTime);
      });
    }
  };
  var warn_text_array = ['暂无'];
  // warnBox.down(warn_text_array);
});