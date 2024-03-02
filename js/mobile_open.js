//init objects
var MobileOpen = function MobileOpen(el) {
    this.element = el;
    return this.init(el);
};

MobileOpen.prototype.init = function (el) {
  // Bind events to the handler
  var that = this;
  var handleEvent = function handleEvent() {
      that.handleEvent.call(that);
  };
  el.addEventListener('click', this, false);
};

//the handler
MobileOpen.prototype.handleEvent = function (e) {
  var navigation = document.getElementById('navigation');
  navigation.classList = "active";
};

//look for elements
var el = document.getElementById('mobileOpen');
var mobile_open = [];
if(el){mobile_open.push(el);}

//initialize elements
if (mobile_open.length) {
  initializeUI(mobile_open, MobileOpen);
}
