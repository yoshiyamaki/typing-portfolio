$(function() {
  $(window).scroll(function(){
    var y = $(this).scrollTop();
    $('#bg_kumo').css('background-position','0 ' + parseInt( -y / 10 )
+ 'px');
$('#bg_mountain').css('background-position','0 ' + (parseInt( -y / 40 )+500)
+ 'px');
  });
});

// スムーススクロール
// main.js

$(function () {
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();

    const targetId = $(this).attr('href');
    const $target = targetId === '#' ? $('html') : $(targetId);

    if ($target.length) {
      const position = $target.offset().top;
      $('html, body').animate({ scrollTop: position }, 3000, 'easeOutExpo');
    }
  });
});


