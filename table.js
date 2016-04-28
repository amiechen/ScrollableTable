var footerHeight = 300;
$(window).scroll(function () {
  if ($(window).scrollTop() > $('.top').height()) {
    $('.sidebar-content').css({
      position: 'absolute',
      top: $(window).scrollTop() - $('.top').height(),
      left: 0,
      right: 0
    });
  } else {
    $('.sidebar-content').css({
      position: 'relative'
    });
  }
});