/* 插入于内网页面中
 * cqupt.congm.in
 * */
require('./main.css');

/* 插入js */
/* 百度统计 */
var _hmt = _hmt || [];
(function() {
    var baidu = document.createElement("script");
    baidu.src = "//hm.baidu.com/hm.js?d57aa305b1d347caa2d89b63bdcd298c";
    if(self == top){
        document.body.appendChild(baidu);
    }
})();
/* CNZZ统计 */
(function() {
    var cnzz = document.createElement("script");
    cnzz.src = "//congm.in/tongji/cqupt.congm.in.js";
    duosuo.charset = "utf-8";
    if(self == top){
        document.body.appendChild(cnzz);
    }
})();

(function() {
    /* 插入css */
    var css = document.createElement("link");
    css.rel = "stylesheet";
    css.href = "//cqupt.congm.in/common/main.css?" + new Date().getTime();
    if(self == top){
        document.head.appendChild(css);
    }
    /* 插入dom */
    css.onload = function(){
        var a = require('../templates.html');
        if(self == top){
            document.body.insertAdjacentHTML("afterbegin", a);
            document.body.classList.add('_cqupt-body');
        }
        /* side-box */
        var title_btn = document.querySelector("#_cqupt-title"),
            discuss_btn = document.querySelector("#_cqupt-discuss"),
            donate_btn = document.querySelector("#_cqupt-donate-btn"),
            info_btn = document.querySelector("#_cqupt-info-btn"),
            duosuo = document.querySelector("#_cqupt-duosuo"),
            donate = document.querySelector("#_cqupt-donate"),
            info = document.querySelector("#_cqupt-info"),
            side = document.querySelector("#_cqupt-side-box"),
            close = document.querySelector("#_cqupt-discuss-close");
        title_btn.onclick = function(){
            document.body.classList.remove('_cqupt-body');
            side.classList.remove('_cqupt-active');
            side.classList.add('_cqupt-close');
        };
        discuss_btn.onclick = function(){
            var el = document.createElement('div');
            el.setAttribute('data-thread-key', '1');
            el.setAttribute('data-title', '内网外入');
            el.setAttribute('data-url', 'https://cqupt.congm.in');
            DUOSHUO.EmbedThread(el);
            var duosuo_content = duosuo.querySelector("._cqupt-content-bd");
            duosuo_content.replaceChild(el, duosuo_content.lastElementChild);
            discuss_btn.classList.add('_cqupt-active');
            donate_btn.classList.remove('_cqupt-active');
            info_btn.classList.remove('_cqupt-active');
            side.classList.add('_cqupt-active');
            duosuo.classList.remove('_cqupt-hidden');
            donate.classList.add('_cqupt-hidden');
            info.classList.add('_cqupt-hidden');
        };
        donate_btn.onclick = function(){
            discuss_btn.classList.remove('_cqupt-active');
            donate_btn.classList.add('_cqupt-active');
            info_btn.classList.remove('_cqupt-active');
            side.classList.add('_cqupt-active');
            duosuo.classList.add('_cqupt-hidden');
            donate.classList.remove('_cqupt-hidden');
            info.classList.add('_cqupt-hidden');
        };
        info_btn.onclick = function(){
            discuss_btn.classList.remove('_cqupt-active');
            donate_btn.classList.remove('_cqupt-active');
            info_btn.classList.add('_cqupt-active');
            side.classList.add('_cqupt-active');
            duosuo.classList.add('_cqupt-hidden');
            donate.classList.add('_cqupt-hidden');
            info.classList.remove('_cqupt-hidden');
        };
        close.onclick = function(){
            discuss_btn.classList.remove('_cqupt-active');
            donate_btn.classList.remove('_cqupt-active');
            info_btn.classList.remove('_cqupt-active');
            side.classList.remove('_cqupt-active');
            duosuo.classList.add('_cqupt-hidden');
            donate.classList.add('_cqupt-hidden');
            info.classList.add('_cqupt-hidden');
        };
        // donate.json
        (function(data){
            var html = '<tbody>';
            for(var i = 0; i < data.length; i++){
                html += '<tr>';
                html += '<td>' + data[i].user_id +'</td>';
                html += '<td>' + data[i].user_name +'</td>';
                html += '<td>' + data[i].time +'</td>';
                html += '<td>' + data[i].money +'</td>';
                html += '</tr>';
            }
            html += '</tbody>';
            document.querySelector("._cqupt-donate-list").insertAdjacentHTML("afterbegin", html);
        })(require('../../json/donate'));
    };
})();

/* 多说 */
window.duoshuoQuery = {short_name:"cqupt-inner"};
(function() {
    var duosuo = document.createElement("script");
    duosuo.src = "//cqupt.congm.in/static/duosuo_embed.min.js";
    duosuo.charset = "utf-8";
    if(self == top){
        document.body.appendChild(duosuo);
    }
})();

/* 链接及图片地址转换 */
(function(){
    var all_a = document.getElementsByTagName("a");
    for(var i = 0; i < all_a.length; i++){
        var url_array = all_a[i].href.split("/");
        if(url_array.length > 2 && all_a[i].href.indexOf("//") != -1 && url_array[2].indexOf("cqupt.congm.in") == -1){
            if(url_array[2].indexOf(":") == -1){
                url_array[2] += ".cqupt.congm.in";
            }else{
                var host_array = url_array[2].split(":");
                url_array[2] = host_array[0] + ".cqupt.congm.in" + ":" + host_array[1];
            }
            all_a[i].href = url_array.join('/');
        }
    }
})();
(function(){
    var img_a = document.getElementsByTagName("img");
    for(var i = 0; i < img_a.length; i++){
        var url_array = img_a[i].src.split("/");
        if(url_array.length > 2 && img_a[i].src.indexOf("//") != -1 && url_array[2].indexOf("cqupt.congm.in") == -1){
            if(url_array[2].indexOf(":") == -1){
                url_array[2] += ".cqupt.congm.in";
            }else{
                var host_array = url_array[2].split(":");
                url_array[2] = host_array[0] + ".cqupt.congm.in" + ":" + host_array[1];
            }
            img_a[i].src = url_array.join('/');
        }
    }
})();