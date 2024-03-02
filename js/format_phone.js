//init objects
var FormatPhone = function FormatPhone(el) {
    this.element = el;
    return this.init(el);
};

FormatPhone.prototype.init = function (el) {
  // Bind events to the handler
  var that = this;
  var handleEvent = function handleEvent() {
      that.handleEvent.call(that);
  };
  el.addEventListener('keydown', this, false);
};

//the handler
FormatPhone.prototype.handleEvent = function (e) {
  e = e || window.event;
  var target = e.target || e.srcElement;
  var x = target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
  target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
};

//look for elements
var el = document.getElementById('phone');
var format_phone = [];
if(el){format_phone.push(el);}

//initialize elements
if (format_phone.length) {
  initializeUI(format_phone, FormatPhone);
}
