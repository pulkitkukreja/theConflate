
var pathEls = document.querySelectorAll('path');
for (var i = 0; i < pathEls.length; i++) {
  var pathEl = pathEls[i];
  var offset = anime.setDashoffset(pathEl);
  pathEl.setAttribute('stroke-dashoffset', offset);
  anime({
    targets: pathEl,
    strokeDashoffset: [offset, 0],
    duration: anime.random(1000, 3000),
    delay: anime.random(0, 2000),
    loop: false,
    direction: 'alternate',
    easing: 'easeInOutSine',
    autoplay: true
  });
}


$(document).ready(function() {
  setTimeout(function(){
    $('.anim').css("border-radius","10px");

    $('body').css("overflow","scroll");
    anime({
     targets: '.anim',
     translateY: -2000,
     scale: 0.95,
     duration: 2500
    });

    anime({
     targets: '.header',
     translateY: 50,
     scale: {
       value: 0.95,
     duration: 2500
    }
    });
  $('.anim').remove();
}, 4300);

});

function openNav() {
document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
document.getElementById("myNav").style.width = "0%";
}

$

//Hover anim on nav-divs
$('.sign-up').hover(function(){
  anime.timeline({loop: false})
  .add({
    targets: '.sign-up-line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeInOutExpo",
    duration: 400
  });

}, function(){
  anime.timeline({loop: false})
  .add({
    targets: '.sign-up-line',
    scaleX: [1,0],
    opacity: [1,0.5],
    easing: "easeInOutExpo",
    duration: 400
  });
});

$('.login').hover(function(){
  anime.timeline({loop: false})
  .add({
    targets: '.login-line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeInOutExpo",
    duration: 400
  });

}, function(){
  anime.timeline({loop: false})
  .add({
    targets: '.login-line',
    scaleX: [1,0],
    opacity: [1,0.5],
    easing: "easeInOutExpo",
    duration: 400
  });
});

//section1 animation begins

$('.section1-heading').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});
var flag = true;
setTimeout(function(){
  $(window).scroll(function() {
    if ($(document).scrollTop() > 50 && flag) {
      anime.timeline({loop: 1})
        .add({
          targets: '.section1-heading .letter',
          translateY: [-110,0],
          easing: "easeOutExpo",
          duration: 1400,
          delay: function(el, i) {
            return 30 * i;
          }
        })
        flag = false;
    } else {

    }
  });
},4300);
