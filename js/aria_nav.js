//init objects
var AriaNavbar = function AriaNavbar(el) {
    this.element = el;
    return this.init(el);
};

AriaNavbar.prototype.init = function (el) {
  // Bind events to the handler
  var that = this;
  var handleEvent = function handleEvent() {
      that.handleEvent.call(that);
  };

  this.Menus = this.element.getElementsByClassName('menu-parent');
  for (var m = 0, mm = this.Menus.length; m < mm; m++) {
      this.Menus[m].addEventListener('focus', this, false);
  }

};

AriaNavbar.prototype.handleEvent = function (e) {
  e = e || window.event;
  var target = e.target || e.srcElement;

  var findSubOpen = document.getElementsByClassName("aria-subnav open");
  var runClearOpen = Array.prototype.filter.call(findSubOpen, function(clearThisUl) {
    clearThisUl.className = "aria-subnav";
  });

  if(target.classList == "aria-menu-parent menu-parent"){
    //console.log(target.nextElementSibling.nextElementSibling);
    target.nextElementSibling.nextElementSibling.classList.toggle('open');
  }
};



//look for elements
var el = document.getElementById('navigation');
var aria_navbar = [];
if(el){aria_navbar.push(el);}

//initialize elements
if (aria_navbar.length) {
  initializeUI(aria_navbar, AriaNavbar);
}
