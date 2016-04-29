var students = [],
    space = /\s/g,// 空格的正则表达式
    integer = new RegExp("[\\u4E00-\\u9FFF]+","g"),//汉字的正则表达式
    htmls;
$(".search-input").keydown(function(e){
    if (e.keyCode == 13) {
        $("#search").click();
    }
});
$("#search").click(function(){
    search($(".search-input").val());
});
$(".panel-close").click(function(){
    $(".info-box").slideUp("fast");
});
$(".logo").click(function(){
    $(".info-box").slideUp("fast");
    $(".header").removeClass("top");
    $(".list").hide("fast");
});
function search(key){
    $(".search-input").val(key);
    htmls = '<tr class="info"><th>#</th><th>学号</th><th>姓名</th><th>性别</th><th>专业</th><th>学院</th><th>年级</th><th>班级</th></tr>';
    $(".header").addClass("top");
    $(".info-box").slideUp("fast");
    $(".list-table tbody").html('<div class="alert alert-warning my-alert">正在查询...</div>');
    $.ajax({
        type: "GET",
        url: "https://blues.congm.in/pubBjStu.php?bj=" + key,
        success: function(res){
            var $res = $(res),
            $table = $($res[2]),
            table = $($table[0]).find("tbody tr td table"),
            tds = $(table).find("td"),
            length = tds.length,
            count = length / 5 - 1,
            deal = function(o){
                return o.innerText.replace(space, "");
            };;
            for(var n = 0; n < count; n++){
                students[n] = {
                    id: deal(tds[5 * n + 5]),
                    name: deal(tds[5 * n + 6]),
                    sex: deal(tds[5 * n + 7]),
                    major: deal(tds[5 * n + 8]),
                    college: deal(tds[5 * n + 9]),
                    grade: '20' + key.substr(-4,2),
                    class: key,
                };
            }
            if(count === 1 && students[0].id === ""){
                next();
            }else{
                for(var i = 0; i < count; i++){
                    var html = '<tr data-id="' + i + '"><td>' + (i + 1) + '</td><td>' + students[i].id + '</td><td>' + students[i].name + '</td><td>' + students[i].sex + '</td><td>' + students[i].major + '</td><td>' + students[i].college + '</td><td>' + students[i].grade + '</td><td>' + students[i].class + '</td></tr>' ;
                    htmls += html;
                }
                $(".list-table tbody").html(htmls);
            }
            $(".list").show("fast");
        }
    });  
    function next(){
        $.ajax({
            type: "GET",
            url: "https://blues.congm.in/pubBjStu.php?searchKey=" + key,
            success: function(res){
                var $res = $(res),
                $table = $($res[3]),
                tds = $table.find("td"),
                length = tds.length,
                count = length / 8 - 1,
                deal = function(o){
                    return o.innerText.replace(space, "");
                };
                for(var n = 0; n < count; n++){
                    students[n] = {
                        id: deal(tds[8 * n + 8]),
                        name: deal(tds[8 * n + 9]),
                        sex: deal(tds[8 * n + 10]),
                        class: deal(tds[8 * n + 11]),
                        major: deal(tds[8 * n + 12]),
                        college: deal(tds[8 * n + 13]),
                        grade: deal(tds[8 * n + 14]),
                    };
                }
                if(count === 1 && students[0].id === ""){
                    $(".list-table tbody").html('<div class="alert alert-warning my-alert">查无此人！</div>');
                }else if(count > 100){
                    $(".list-table tbody").html('<div class="alert alert-warning my-alert">数据量太大，请重新查询！</div>');
                }else{
                    for(var i = 0; i < count; i++){
                        var html = '<tr data-id="' + i + '"><td>' + (i + 1) + '</td><td>' + students[i].id + '</td><td>' + students[i].name + '</td><td>' + students[i].sex + '</td><td>' + students[i].major + '</td><td>' + students[i].college + '</td><td>' + students[i].grade + '</td><td>' + students[i].class + '</td></tr>' ;
                        htmls += html;
                    }
                    $(".list-table tbody").html(htmls);
                }
                $(".list").show("fast");
            }
        });
    }
    $(".list-table").on("click", "tr", function(){
        if(!$(this).hasClass("info")){
            $(".student-id").html("【 学号 - 姓名 】");
            $(".student-img").attr("src", "");
            $(".student-table tbody").html("");

            var student = students[$(this).data("id")],
                html = '<tr><td>学号：' + student.name + '</td><td>性别：' + student.sex + '</td></tr><tr><td>班级：' + student.class + '</td><td>专业：' + student.major + '</td></tr><tr><td>年级：' + student.grade + '</td><td>学院：' + student.college + '</td></tr><tr><td><button class="btn btn-success" href="#" onclick="search(\'' + student.class + '\')">该班学生名单</button></td><td><a class="btn btn-danger" href="https://jwzx.cqupt.congm.in/pubStuKebiao.php?xh=' + student.id + '" target="_blank">个人课表</a></td></tr>';
            $(".student-id").html("【" + student.id + " - " + student.name + "】");
            $(".student-img").attr("src", "https://jwzx.cqupt.congm.in/showstuPic.php?xh=" + student.id.replace(space,''));
            $(".student-table tbody").html(html);
            $(".list-table tr").removeClass("active");
            $(this).addClass("active");
            $(".info-box").slideDown("fast");
        }
    });
}
