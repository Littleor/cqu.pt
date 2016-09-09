/* 插入于内网页面中
 * cqupt.congm.in
 * */

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
        var a = '<div id="_cqupt-side-box">' +
                    '<div class="_cqupt-side-bar">' +
                        '<div class="_cqupt-side-bar-item" id="_cqupt-title">' +
                            '<a href="javascript:void(0);">内网外入</a>' +
                        '</div>' +
                        '<div class="_cqupt-side-bar-top">' +
                            '<div class="_cqupt-side-bar-item">' +
                                '<a href="//cqupt.congm.in">' +
                                    '<span class="_cqupt-iconfont _cqupt-pinglun">&#xe601;</span>' +
                                '</a>' +
                            '</div>' +
                            '<div class="_cqupt-side-bar-item">' +
                                '<a href="https://github.com/mcc108/cqupt.congm.in" target="_blank">' +
                                    '<span class="_cqupt-iconfont _cqupt-pinglun">&#xe602;</span>' +
                                '</a>' +
                            '</div>' +
                            '<div class="_cqupt-side-bar-item">' +
                                '<a href="http://jq.qq.com/?_wv=1027&k=2CKYKx6" target="_blank">' +
                                    '<span class="_cqupt-iconfont _cqupt-pinglun">&#xe605;</span>' +
                                '</a>' +
                            '</div>' +
                        '</div>' +
                        '<div class="_cqupt-side-bar-bottom">' +
                            '<div class="_cqupt-side-bar-item" id="_cqupt-discuss">' +
                                '<span class="_cqupt-iconfont _cqupt-pinglun">&#xe600;</span>' +
                            '</div>' +
                            '<div class="_cqupt-side-bar-item" id="_cqupt-donate-btn">' +
                                '<span class="_cqupt-iconfont _cqupt-pinglun">&#xe603;</span>' +
                            '</div>' +
                            '<div class="_cqupt-side-bar-item" id="_cqupt-info-btn">' +
                                '<span class="_cqupt-iconfont _cqupt-pinglun">&#xe604;</span>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                    '<header class="_cqupt-header">' +
                        '<div id="_cqupt-discuss-close"><img src="//cqupt.congm.in/img/close.png"></div>' +
                    '</header>' +
                    '<div class="_cqupt-content">' +
                        '<div class="_cqupt-content-item _cqupt-hidden" id="_cqupt-duosuo">' +
                            '<div class="_cqupt-content-hd">评论</div>' +
                            '<div class="_cqupt-content-bd">' +
                                '<div class="ds-share flat" data-thread-key="1" data-title="内网外入 - CQUPT" data-images="https://cqupt.congm.in/img/cqupt.png" data-content="一站解决外网访问教务在线等内网所有网页！" data-url="https://cqupt.congm.in">' +
                                    '<div class="ds-share-inline">' +
                                        '<ul class="ds-share-icons-16">' +
                                            '<li data-toggle="ds-share-icons-more"><a class="ds-more" href="javascript:void(0);">分享:</a></li>' +
                                            '<li><a class="ds-weibo" href="javascript:void(0);" data-service="weibo">微博</a></li>' +
                                            '<li><a class="ds-wechat" href="javascript:void(0);" data-service="wechat">微信</a></li>' +
                                            '<li><a class="ds-qq" href="javascript:void(0);" data-service="qq">QQ</a></li>' +
                                            '<li><a class="ds-qzone" href="javascript:void(0);" data-service="qzone">空间</a></li>' +
                                        '</ul>' +
                                        '<div class="ds-share-icons-more"></div>' +
                                    '</div>' +
                                '</div>' +
                                '<span class="_cqupt-loading">正在加载中...</span>' +
                            '</div>' +
                        '</div>' +
                        '<div class="_cqupt-content-item _cqupt-hidden" id="_cqupt-donate">' +
                            '<div class="_cqupt-content-hd">捐助</div>' +
                            '<div class="_cqupt-content-bd">' +
                                '<h3><span class="_cqupt-label _cqupt-label-o">内网外入</span> (cqupt.congm.in) 是一个免费的系统，但是内网外入服务器搭建于我的旧电脑之上，每月需要宽带网络和运营维护的成本。</h3>' +
                                '<p>如果您觉得内网外入极大方便您的日常使用，您可以自愿选择通过捐赠来促进内网外入的健康维护和发展，内网外入也需要大家的点滴支持。</p>' +
                                '<p class="_cqupt-small">支付宝帐号：i@congm.in / 这是昵称 (闵聪)</p>' +
                                '<img src="//cqupt.congm.in/img/alipay.png" class="_cqupt-donate-img">' +
                                '<h2>捐助人列表</h2>' +
                                '<table class="_cqupt-donate-list">' +
                                    '<thead><tr>' +
                                        '<th>账户</th><th>用户名</th><th>时间</th><th>金额</th>' +
                                    '</tr></thead>' +
                                '</table>' +
                            '</div>' +
                        '</div>' +
                        '<div class="_cqupt-content-item _cqupt-hidden" id="_cqupt-info">' +
                            '<div class="_cqupt-content-hd">关于</div>' +
                            '<div class="_cqupt-content-bd">' +
                                '<h2>内网外入 (cqupt.congm.in) </h2>' +
                                '<h3><span class="_cqupt-label _cqupt-label-sm">个人项目</span> <span class="_cqupt-label _cqupt-label-sm">非官方项目</span></h3>' +
                                '<p>内网外入诞生于2015年9月，该系统利用nginx服务器反向代理的原理，解决了同学通过外网无法访问内网的问题。该系统在保证内网安全的前提下，可以随时随地进入内网查询自己的个人课表、考试安排、期末成绩，进行选课等，极大方便同学们的日常使用。网页上线一年来PV总访问量超过85万多次，PV单日峰值达5万多次，UV独立访客日均约1000人，UV峰值约10000人。</p>' +
                                '<div class="_cqupt-info-list">' +
                                    '<p>官网：<a href="//cqupt.congm.in" target="_blank">cqupt.congm.in</a></p>' +
                                    '<p>Github：<a href="https://github.com/mcc108/cqupt.congm.in" target="_blank">github.com/mcc108/cqupt.congm.in</a></p>' +
                                    '<p>交流群：<a href="http://jq.qq.com/?_wv=1027&k=2CKYKx6" target="_blank">312784909</a></p>' +
                                    '<p>博文：<a href="//i.congm.in/cqupt-inner" target="_blank">i.congm.in/cqupt-inner</a></p>' +
                                    '<p>统计：<a href="http://new.cnzz.com/v1/login.php?siteid=1257517721" target="_blank">CNZZ</a></p>' +
                                    '<p>作者：<a href="//congm.in" target="_blank">@ Cong Min</a></p>' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                '</div>';
        if(self == top){
            document.body.insertAdjacentHTML("afterbegin", a);
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
            side.classList.toggle('_cqupt-close');
            side.classList.remove('_cqupt-active');
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
        // ajax - donate.json
        var request = new XMLHttpRequest();
        request.open('GET', 'https://cqupt.congm.in/common/donate.json', true);
        request.onload = function() {
            if (this.status >= 200 && this.status < 400) {
                var data = JSON.parse(this.response);
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
            }
        };
        request.send();
    };
})();

/* 多说 */
var duoshuoQuery = {short_name:"cqupt-inner"};
(function() {
    var duosuo = document.createElement("script");
    duosuo.src = "//cqupt.congm.in/js/duosuo_embed.min.js";
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