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
    // localStorage
    (function(){
        require('./xdLocalStorage.min');
        var cqupt_inner;
        xdLocalStorage.init({
            iframeUrl:'https://cqupt.congm.in/common/storage-iframe.html',
            initCallback: function () {
                xdLocalStorage.getItem('cqupt_inner', function(data){
                    console.log(data);
                    if(!data.value){
                        xdLocalStorage.setItem('cqupt_inner', JSON.stringify({}));
                    }
                    try{
                        cqupt_inner = JSON.parse(data.value);
                    }catch(error){
                        xdLocalStorage.setItem('cqupt_inner', JSON.stringify({}));
                    }
                });
            }
        });
        // 收集用户信息
        if(location.hostname == "jwzx.cqupt.congm.in"){
            document.querySelector('input[src="syspic/go.gif"]').addEventListener('click', function(){
                var xh = document.querySelector('form[action="login.php"]').querySelector('input[name="id"]').value;
                if(!cqupt_inner.xh_list){ cqupt_inner.xh_list = {}; }
                if(!cqupt_inner.xh_list[xh]){
                    cqupt_inner.xh_list[xh] = 1;
                }else{
                    cqupt_inner.xh_list[xh] += 1;
                }
                xdLocalStorage.getItem('cqupt_inner', JSON.stringify(cqupt_inner));
            });
        }
    })();
})();