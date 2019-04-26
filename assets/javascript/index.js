$(document).ready(function () {
  $(".title").lettering();
  $(".button").lettering();
});

$(document).ready(function () {
  animation();
  switchImage()
}, 1000);

$('.container').click(function () {
  animation();
});

var bool = true

function switchImage() {
  setTimeout(function () {
    var i = bool ? 0 : 1
    document.querySelector("#main").style.backgroundImage = "url(assets/images/marcus_" + i.toString() + ".jpg)";
    bool = !bool
    switchImage();
  }, 200)
}

function animation() {
  var title1 = new TimelineMax();
  title1.to(".button", 0, { visibility: 'hidden', opacity: 0 })
  title1.staggerFromTo(".title span", 0.5,
    { ease: Back.easeOut.config(1.7), opacity: 0, bottom: -80 },
    { ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0 }, 0.05);
  title1.to(".button", 0.2, { visibility: 'visible', opacity: 1 })
}
