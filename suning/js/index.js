$(function(){
  var index = 1;
  var width = $('.sn_banner').width();
  var pointBox = $('.sn_banner ul:last');
  var animeteFuc = function (){
    $('.sn_banner ul:first').animate({'transform':'translateX('+(-index*width)+'px)'},200,'linear',function(){
      if(index>=9){
        index=1;
        $('.sn_banner ul:first').css({'transform':'translateX('+(-index*width)+'px)'});
      }else if (index<=0){
        index=8;
        $('.sn_banner ul:first').css({'transform':'translateX('+(-index*width)+'px)'});
      }
      pointBox.find('li').removeClass('now').eq(index-1).addClass('now');
    })
  }
  var timer = setInterval(function(){
    index++;
    animeteFuc();
  },3000);
  $('.sn_banner').on('swipeLeft',function (){
    index++;
    animeteFuc();
  });
  $('.sn_banner').on('swipeRight',function (){
    index--;
    animeteFuc();
  })
})