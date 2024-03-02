//init objects
var MobileToggle = function MobileToggle(el) {
    this.element = el;
    return this.init(el);
};

MobileToggle.prototype.init = function () {
  // Bind events to the handler
  var that = this;
  var handleEvent = function handleEvent() {
      that.handleEvent.call(that);
  };

  this.Buttons = this.element.getElementsByClassName('mobile-toggle');
  for (var b = 0, bb = this.Buttons.length; b < bb; b++) {
      this.Buttons[b].addEventListener('click', this, false);
  }

};

//the handler
MobileToggle.prototype.handleEvent = function (e) {
  //console.log('click');
  e = e || window.event;
  var target = e.target || e.srcElement;

  if(target.nextElementSibling.classList == "aria-subnav active"){
    target.classList.remove('up');
    target.nextElementSibling.classList.remove('active');
    return false;
  }

  var subs = document.getElementsByClassName('aria-subnav active');
  for (var i = 0, ii = subs.length; i < ii; i++) {
    subs[i].previousElementSibling.classList.remove('up');
    subs[i].classList.remove("active");
  }

  target.classList.toggle('up');
  target.nextElementSibling.classList.toggle('active');

};

//look for elements
var mobile_toggle = document.getElementsByClassName('has-sub-menu');

//initialize elements
if (mobile_toggle.length) {
  initializeUI(mobile_toggle, MobileToggle);
}
