/*广告*/
(function() {
    var google = document.createElement("script");
    google.async = "true";
    google.src = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    if(self == top){
        document.body.appendChild(google);
    }
})();
// 广告
(adsbygoogle = window.adsbygoogle || []).push({
    google_ad_client: "ca-pub-9908918414837596",
    enable_page_level_ads: true
});
// localStorage
(function(){
    var extend = function(out){
        out = out || {};
        for(var i = 1; i < arguments.length; i++){
            if (!arguments[i]){ continue; }
            for(var key in arguments[i]){
                if(arguments[i].hasOwnProperty(key)){
                    out[key] = arguments[i][key];
                }
            }
        }
        return out;
    };
    var CrossStorageClient = require('cross-storage').CrossStorageClient;
    var cqupt_inner_storage = new CrossStorageClient('https://cqupt.congm.in/common/storage-iframe.html');
    cqupt_inner_storage.onConnect().then(function(){
        return cqupt_inner_storage.get('cqupt_inner');
    }).then(function(res) {
        var cqupt_inner = {};
        if(!res){
            cqupt_inner_storage.set('cqupt_inner', JSON.stringify({}));
        }
        try{
            cqupt_inner = JSON.parse(res);
        }catch(error){
            cqupt_inner_storage.set('cqupt_inner', JSON.stringify({}));
            cqupt_inner = {};
        }
        // 获取用户信息
        var user_xh = 0,
            user_xh_count = 3;
        if(cqupt_inner.xh_list){
            var xh_list = cqupt_inner.xh_list;
            for(var i in xh_list){
                if(xh_list.hasOwnProperty(i)){
                    if(xh_list[i] >= user_xh_count){
                        user_xh = parseInt(i);
                        user_xh_count = xh_list[i];
                    }
                }
            }
        }
        // 查询用户信息
        if(user_xh){
            if(!cqupt_inner.xh || cqupt_inner.xh != user_xh){
                var request = new XMLHttpRequest();
                request.open('GET', 'https://blues.congm.in/stu.php?searchKey=' + parseInt(user_xh), true);
                request.onload = function() {
                    if (request.status >= 200 && request.status < 400) {
                        var data = JSON.parse(request.responseText);
                        if(data.total === 1){
                            window._cqupt_inner_user = extend({}, cqupt_inner, data.rows[0]);
                            cqupt_inner_storage.set('cqupt_inner', JSON.stringify(_cqupt_inner_user));
                            _cqupt_inner_user_show();
                        }
                    }else{
                        window._cqupt_inner_user = {};
                    }
                };
                request.onerror = function() {
                    window._cqupt_inner_user = {};
                };
                request.send();
            }else{
                window._cqupt_inner_user = cqupt_inner;
                _cqupt_inner_user_show();
            }
        }
        // 收集用户信息
        if(location.hostname == "jwzx.cqupt.congm.in"){
            collect_user_info({
                form: 'form[action="login.php"]',
                btn: 'input[src="syspic/go.gif"]',
                input: 'input[name="id"]'
            });
        }
        if(location.hostname.indexOf('xk') != -1){
            collect_user_info({
                form: 'form#loginForm',
                btn: 'button#submitButton',
                input: 'input[name="id"]'
            });
        }
        function collect_user_info(options){
            var loginForm = document.querySelector(options.form);
            if(loginForm){
                loginForm.querySelector(options.btn).addEventListener('click', function(){
                    var xh = loginForm.querySelector(options.input).value;
                    if(!xh.trim()){ return; }
                    if(!cqupt_inner.xh_list){ cqupt_inner.xh_list = {}; }
                    if(!cqupt_inner.xh_list[xh]){
                        cqupt_inner.xh_list[xh] = 1;
                    }else{
                        cqupt_inner.xh_list[xh] += 1;
                    }
                    cqupt_inner_storage.set('cqupt_inner', JSON.stringify(cqupt_inner));
                });
            }
        }
    });
})();
(function(){
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
    /* info */
    document.querySelector('._cqupt-nav-user-info-btn').addEventListener('click', function(){
        document.querySelector('._cqupt-nav-user-info').classList.remove('_cqupt-hidden');
        document.querySelector('._cqupt-nav-user-pic').classList.add('_cqupt-hidden');
    });
    document.querySelector('._cqupt-nav-user-pic-btn').addEventListener('click', function(){
        document.querySelector('._cqupt-nav-user-info').classList.add('_cqupt-hidden');
        document.querySelector('._cqupt-nav-user-pic').classList.remove('_cqupt-hidden');
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

function _cqupt_inner_user_show() {
    if(!_cqupt_inner_user.xh){ return; }
    _cqupt_inner_user['xb'] = _cqupt_inner_user['xb'].trim();
    _cqupt_inner_user['bj'] = _cqupt_inner_user['bj'].trim() + '班';
    _cqupt_inner_user['nj'] = _cqupt_inner_user['nj'].trim() + '级';
    _cqupt_inner_user['zym'] = _cqupt_inner_user['zym'].trim() + '专业';
    document.querySelector("._cqupt-nav-info").classList.add('_cqupt-show');
    document.querySelector("._cqupt-nav-user-name").innerHTML = _cqupt_inner_user.xm;
    var nav_user_list = ['xm', 'xb', 'xh', 'yxm', 'zym', 'nj', 'bj'];
    nav_user_list.forEach(function(e){
        document.querySelector("._cqupt-nav-user-" + e).innerHTML = _cqupt_inner_user[e].trim();
    });
    document.querySelector("._cqupt-nav-user-kb-btn").setAttribute('href', 'https://jwzx.cqupt.congm.in/jwzxtmp/showKebiao.php?type=student&id=' + _cqupt_inner_user.xh);
    var jwzx_img = document.createElement('img');
    jwzx_img.src = "https://jwzx.cqupt.congm.in/showstuPic.php?xh=" + _cqupt_inner_user.xh;
    jwzx_img.onload = function(){
        if(jwzx_img.complete){
            document.querySelector("._cqupt-nav-user-pic").appendChild(jwzx_img);
        }
    };
    var cet_img = document.createElement('img');
    cet_img.src = "https://congm.in/proxy/172.22.80.212.cqupt.congm.in/PHOTO0906CET/" + _cqupt_inner_user.xh + ".JPG";
    cet_img.onload = function(){
        if(cet_img.complete){
            document.querySelector("._cqupt-nav-user-pic").appendChild(cet_img);
        }
    }
}