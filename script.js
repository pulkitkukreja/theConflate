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
    $('.website').css("visibility","visible");
    anime({
     targets: '.anim',
     translateY: -750,
     scale: 0.95,
     duration: 1500
    });

    anime({
     targets: '.header',
     translateY: 50,
     scale: {
       value: 0.95,
     duration: 2000
    }
    });

  }, 4300);
});

function openNav() {
document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
document.getElementById("myNav").style.width = "0%";
}
