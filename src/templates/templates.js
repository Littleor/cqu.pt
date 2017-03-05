/*广告*/
(function() {
    var google = document.createElement("script");
    google.async = "true";
    google.src = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    if(self == top){
        document.body.appendChild(google);
    }
    var ibody = document.querySelector('body'), adbox = document.querySelector('#_cqupt-adbox');
    if(getComputedStyle(adbox, null).display != 'none'){
        // 3个内容广告
        (adsbygoogle = window.adsbygoogle || []).push({});
        (adsbygoogle = window.adsbygoogle || []).push({});
        (adsbygoogle = window.adsbygoogle || []).push({});
    }
    // 移动端网页级广告
    (adsbygoogle = window.adsbygoogle || []).push({
        google_ad_client: "ca-pub-9908918414837596",
        enable_page_level_ads: true
    });
    function outerHeight(el) {
        var height = el.offsetHeight;
        var style = getComputedStyle(el);
        height += parseInt(style.marginTop) + parseInt(style.marginBottom);
        return height;
    }
    var wHeight = window.innerHeight, adHeight = outerHeight(document.querySelector('#_cqupt-adbox')), maxHeight = 0;
    var bcs = ibody.children;
    for(var i = 0; i < bcs.length; i++){
        if(bcs[i].id.indexOf('_cqupt') === -1 && maxHeight < outerHeight(bcs[i])){
            maxHeight = outerHeight(bcs[i]);
        }
    }
    if(maxHeight){
        ibody.style.minHeight = maxHeight + 'px';
    }
    if(wHeight > adHeight + maxHeight) {
        adbox.style.top = (wHeight-adHeight) + 'px';
    }
    document.querySelector('#_cqupt-adbox-close').onclick = function(){
        adbox.style.display = 'none';
    };
})();
(function(){
    /* 更改标题 */
    if(location.hostname !== 'cqupt.congm.in') { document.title = '【内网外入】 ' + document.title; }
    /* 多说 */
    duoshuoQuery = { short_name: "cqupt-inner" };
    /* side-box */
    var title_btn = document.querySelector("#_cqupt-title"),
        discuss_btn = document.querySelector("[data-target='#_cqupt-duosuo']"),
        duosuo = document.querySelector("#_cqupt-duosuo"),
        side = document.querySelector("#_cqupt-side-box");
    var sideTabs = document.querySelectorAll("[data-toggle='sideTab']"),
        sideTabLen = sideTabs.length,
        contentList = document.querySelectorAll("._cqupt-content-item"),
        contentLen = contentList.length;
    side.addEventListener('click', function(e){
        if(!e.target){ return; }
        var eTarget = e.target.getAttribute('data-toggle') == 'sideTab' ? e.target : e.target.parentNode;
        if(eTarget.getAttribute('data-toggle') == 'sideTab'){
            for(var i = 0; i < sideTabLen; i++){
                sideTabs[i].classList.remove('_cqupt-active');
            }
            for(var j = 0; j < contentLen; j++){
                contentList[j].classList.add('_cqupt-hidden');
            }
            var tabTarget = eTarget.getAttribute('data-target');
            if(tabTarget != 'close'){
                eTarget.classList.add('_cqupt-active');
                side.classList.add('_cqupt-active');
                document.querySelector(tabTarget).classList.remove('_cqupt-hidden');
            }else{
                side.classList.remove('_cqupt-active');
            }
        }
    });
    title_btn.onclick = function(){
        document.body.classList.remove('_cqupt-body');
        side.classList.remove('_cqupt-active');
        side.classList.add('_cqupt-close');
    };
    discuss_btn.addEventListener('click', function(){
        var el = document.createElement('div');
        el.setAttribute('data-thread-key', '1');
        el.setAttribute('data-title', '内网外入');
        el.setAttribute('data-url', 'https://cqupt.congm.in');
        DUOSHUO.EmbedThread(el);
        var duosuo_content = duosuo.querySelector("._cqupt-content-bd");
        duosuo_content.replaceChild(el, duosuo_content.lastElementChild);
    });
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
})();