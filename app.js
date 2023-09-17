$(function (){

   let header = $("#header");
   let intro = $("#intro");
    let introH = intro.innerHeight();
   let scrollpos = $(window).scrollTop();

   checkScroll(scrollpos, introH);

   $(window).on("scroll resize", function(){
      let introH = intro.innerHeight();
     scrollpos = $(this).scrollTop();

    checkScroll(scrollpos, introH);
   });
    function checkScroll(scrollpos, introH){
      if(scrollpos > introH ) {
          header.addClass("fixed");
      } else {
        header.removeClass("fixed");
      }
    }

/*Smooth scroll
=========================================*/
$("[data-scroll]").on("click", function(event) {
  event.preventDefault();
  let elementid = $(this).data('scroll');
  let elementOffset = $(elementid).offset().top;

  $("html, body").animate({
    scrollTop: elementOffset -90
  }, 800);
});

/*navToggle
=========================================*/
let nav = $("#nav");
let navToggle = $("#navToggle");
navToggle.on("click", function(event) {

  event.preventDefault();
  nav.toggleClass("show")
});





});
