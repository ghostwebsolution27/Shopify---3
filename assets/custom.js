var scrollY;

$(document).ready(function(){
  calc_pos();
  $(".my_bottom_addcart").click(function(){
    var eTop = $('.add_to_art button').offset().top; //get the offset top of the element
    var _scrollY = window.scrollY;
    var scrollY = _scrollY - eTop;
    setTimeout(function(){
      $(window).scrollTop(eTop - 520);
    }, 300);
  });
  
  calc_sticky();
  
});

$(window).resize(function(){
  calc_sticky();
});

$(window).scroll(function(){
  calc_pos();
});
function calc_sticky(){
  setTimeout(function(){
    
    var header_height = "";
    var header_type = $(".fix_header").css("position");
    if(header_type == "fixed")	header_height = $(".fix_header").height();
    else header_height = 0;
    
    var slider_height = $(".product_main_page .side_margggg .main_slider_products ").height();
    
    var window_height = $(window).height() - header_height;

    $(".product_main_page .side_margggg.is_enable").css({"position": "sticky", "top": header_height + 26 + "px"});

//     Mobile height resize version
    if(slider_height > window_height){
      var trans_height = slider_height - window_height - header_height;
      $(".product_main_page .side_margggg.is_enable").css('top', '-'+trans_height+'px');
    }
    console.log("slider-" + slider_height + ", window-" + ($(window).height() - header_height));
  
  }, 500);

  
}
function calc_pos(){
  var eTop = $('.add_to_art button').offset().top; //get the offset top of the element
  var _scrollY = window.scrollY;
  var scrollY = _scrollY - eTop;

  if(scrollY < 0){
    $(".my_bottom_addcart").removeClass('open_addto_cart');
  }else{
    $(".my_bottom_addcart").addClass('open_addto_cart');
  }
}

$(".navbar-toggler").bind('click', function(){
  $("body").toggleClass("overlay_body");
});  
$(".navbar-toggler").blur(function(){
  $(".navbar-toggler").trigger("click");
});