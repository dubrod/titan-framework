var ModalTrigger = function ModalTrigger(el) {
    this.element = el;
    return this.init(el);
};

ModalTrigger.prototype.init = function (el) {
  var that = this;
  var handleEvent = function handleEvent() {
      that.handleEvent.call(that);
  };

  el.addEventListener('click', this, false);
  this.modal_id = el.getAttribute("data-modal");
  this.modal = document.getElementById(this.modal_id);
};

ModalTrigger.prototype.handleEvent = function (e) {
  this.modal.classList.toggle('open');
};

var modal_triggers = document.getElementsByClassName('modal-trigger');

//initialize elements
if (modal_triggers.length) {
  initializeUI(modal_triggers, ModalTrigger);
}


//
//Close
//

var ModalClose = function ModalClose(el) {
    this.element = el;
    return this.init(el);
};

ModalClose.prototype.init = function (el) {
  var that = this;
  var handleEvent = function handleEvent() {
      that.handleEvent.call(that);
  };

  el.addEventListener('click', this, false);
  this.youtube_id = el.getAttribute("data-youtube");
  this.modal_id = el.getAttribute("data-modal");
  this.is_vimeo = el.getAttribute("data-vimeo");
  this.idx = el.getAttribute("data-idx");
  this.modal = document.getElementById(this.modal_id);
};

ModalClose.prototype.handleEvent = function (e) {
  e = e || window.event;
  var target = e.target || e.srcElement;

  if(this.youtube_id){
    var player = document.getElementById(this.youtube_id);
    var og_src = player.src;
    player.src = ""; //unset it to stop it
    player.src = og_src; //reset it

  }

  //stop vimeo player on close
  if(this.is_vimeo == "true"){
    closeVimeo(this.idx);
  }

  if(target.closest('.modal-content') == null || target.classList.contains('modal-close')){ // it was not a click inside the content div
    this.modal.classList.toggle('open');
  }
  
};

var modal_close = document.getElementsByClassName('modal-window');

//initialize elements
if (modal_close.length) {
  initializeUI(modal_close, ModalClose);
}
