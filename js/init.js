$(document).ready(function () {
     $('.button-collapse').sideNav();
    $("html").niceScroll({
       // touchbehavior:true,
        cursorwidth: "10px",
        cursorborder: "1px solid #fff",
        cursorborderradius: "5px",
        scrollspeed: 1,
        spacebarenabled: true,
        bouncescroll: true  ,
        smoothscroll: false ,
        autohidemode: false
    });  
    new WOW().init({
        mobile:false,
        duration:"2s"
    });
    $('.modal-trigger').leanModal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      in_duration: 300, // Transition in duration
      out_duration: 200 // Transition out duration
    });
})