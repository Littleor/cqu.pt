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
    cnzz.charset = "utf-8";
    if(self == top){
        document.body.appendChild(cnzz);
    }
})();

/* 链接及图片地址转换 */
(function(){
    var all_a = document.getElementsByTagName("a");
    for(var i = 0; i < all_a.length; i++){
        var url_array = all_a[i].href.split("/");
        if(url_array.length > 2 && all_a[i].href.indexOf("//") != -1 && url_array[2].indexOf("cqupt.congm.in") == -1 && url_array[2].indexOf("host.congm.in") == -1){
            if(url_array[2].indexOf(":") == -1){
                url_array[2] += ".cqupt.congm.in";
            }else{
                var host_array = url_array[2].split(":");
                url_array[2] = host_array[0] + ".cqupt.congm.in";
            }
            all_a[i].href = url_array.join('/');
        }
    }
})();
(function(){
    var img_a = document.getElementsByTagName("img");
    for(var i = 0; i < img_a.length; i++){
        var url_array = img_a[i].src.split("/");
        if(url_array.length > 2 && img_a[i].src.indexOf("//") != -1 && url_array[2].indexOf("cqupt.congm.in") == -1 && url_array[2].indexOf("host.congm.in") == -1){
            if(url_array[2].indexOf(":") == -1){
                url_array[2] += ".cqupt.congm.in";
            }else{
                var host_array = url_array[2].split(":");
                url_array[2] = host_array[0] + ".cqupt.congm.in";
            }
            img_a[i].src = url_array.join('/');
        }
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
        var templates = require('../templates/templates.html');
        if(self == top){
            document.body.insertAdjacentHTML("beforeend", templates);
            document.body.classList.add('_cqupt-body');
            require('../templates/templates');
        }
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
/*googlead*/
(function() {
    var google = document.createElement("script");
    google.async = "true";
    google.src = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    if(self == top){
        document.body.appendChild(google);
        google.onload = function() {
            console.log('test');
            (adsbygoogle = window.adsbygoogle || []).push({});
            (adsbygoogle = window.adsbygoogle || []).push({
                google_ad_client: "ca-pub-9908918414837596",
                enable_page_level_ads: true
            });
        }
    }
})();

