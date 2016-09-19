var students = [],
    htmls;
$(".search-input").keydown(function(e){
    if (e.keyCode == 13) {
        $("#search").trigger('click');
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
    if(!key.trim()){
        $(".logo").trigger('click');
    }
    $(".search-input").val(key);
    htmls = '<tr class="info"><th>#</th><th>学号</th><th>姓名</th><th>性别</th><th>专业</th><th>学院</th><th>年级</th><th>班级</th></tr>';
    $(".header").addClass("top");
    $(".info-box").slideUp("fast");
    $(".list-table tbody").html('<div class="alert alert-warning my-alert">正在查询...</div>');
    $(".list").show("fast");
    $.ajax({
        type: "GET",
        url: "https://blues.congm.in/stu.php?searchKey=" + key,
        success: function(res){
            var count = res.total;
            if(count){
                students = res.rows;
                for(var i = 0; i < count; i++){
                    htmls += '<tr data-id="' + i + '"><td>' + (i + 1) + '</td><td>' + students[i].xh + '</td><td>' + students[i].xm + '</td><td>' + students[i].xb + '</td><td>' + students[i].zym + '</td><td>' + students[i].yxm + '</td><td>' + students[i].nj + '</td><td>' + students[i].bj + '</td></tr>';
                }
                $(".list-table tbody").html(htmls);
            }
        }
    });
    $(".list-table").on("click", "tr", function(){
        if(!$(this).hasClass("info")){
            var $id = $(".student-id"),
                $img = $(".student-img"),
                $img_cet = $(".student-img-cet"),
                $tbody = $(".student-table tbody");
            $id.html("【 学号 - 姓名 】");
            $img.attr("src", "");
            $tbody.html("");
            var student = students[$(this).data("id")],
                html = '<tr><td>姓名：' + student.xm + '</td><td>性别：' + student.xb + '</td></tr><tr><td>班级：' + student.bj + '</td><td>专业：' + student.zym + '</td></tr><tr><td>年级：' + student.nj + '</td><td>学院：' + student.yxm + '</td></tr><tr><td><button class="btn btn-sm btn-success" href="#" onclick="search(\'' + student.bj + '\')">该班学生名单</button></td><td><a class="btn btn-sm btn-danger" href="https://jwzx.cqupt.congm.in/jwzxtmp/showKebiao.php?type=student&id=' + student.xh + '" target="_blank">个人课表</a></td></tr>';
            $id.html("【" + student.xh + " - " + student.xm + "】");
            $img.attr("src", "https://jwzx.cqupt.congm.in/showstuPic.php?xh=" + student.xh);
            $img_cet.attr("src", "http://172.22.80.212.cqupt.congm.in/PHOTO0906CET/" + student.xh + ".JPG");
            $tbody.html(html);
            $(".list-table tr").removeClass("active");
            $(this).addClass("active");
            $(".info-box").slideDown("fast");
        }
    });
}
