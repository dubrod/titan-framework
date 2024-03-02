//init objects
var MobileClose = function MobileClose(el) {
    this.element = el;
    return this.init(el);
};

MobileClose.prototype.init = function (el) {
  // Bind events to the handler
  var that = this;
  var handleEvent = function handleEvent() {
      that.handleEvent.call(that);
  };
  el.addEventListener('click', this, false);
};

//the handler
MobileClose.prototype.handleEvent = function (e) {
  var navigation = document.getElementById('navigation');
  navigation.classList = "";
};

//look for elements
var el = document.getElementById('mobileClose');
var mobile_close = [];
if(el){mobile_close.push(el);}

//initialize elements
if (mobile_close.length) {
  initializeUI(mobile_close, MobileClose);
}
