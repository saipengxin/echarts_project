// 监控区域模块制作
(function() {
    $(".monitor .tabs").on("click", "a", function() {
      $(this)
        .addClass("active") //  字体变成白色的类
        .siblings("a")
        .removeClass("active");
  
      // console.log($(this).index());
      //   选取对应索引号的content
      $(".monitor .content")
        .eq($(this).index())
        .show()
        .siblings(".content")
        .hide();
    });
})(); // 不要忘记结尾的分号