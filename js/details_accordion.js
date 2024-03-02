//init objects
var Accordion = function Accordion(el) {
    this.el = el;
    return this.init(el);
};

Accordion.prototype.init = function (el) {
  this.summary = el.querySelector('summary');
  this.content = el.querySelector('.details-body');

  // Store the animation object (so we can cancel it, if needed)
  this.animation = null;
  // Store if the element is closing
  this.isClosing = false;
  // Store if the element is expanding
  this.isExpanding = false;

  this.summary.addEventListener('click', (e) => this.handleEvent(e));

};


//the handler
Accordion.prototype.handleEvent = function (e) {
  e = e || window.event;
  e.preventDefault();

  // Check if the element is being closed or is already closed
  if (this.isClosing || !this.el.open) {
    var details_open = document.querySelectorAll('details[open]');
    for (var i = 0, ii = details_open.length; i < ii; i++) {
      const startHeight = `${details_open[i].offsetHeight}px`;
      details_open[i].animate({
        height: [startHeight, '53px']
      }, {
        duration: 400,easing: 'ease-out'
      });
      details_open[i].open = false;
      details_open[i].animation = null;
      details_open[i].isClosing = false;
      details_open[i].isExpanding = false;
      details_open[i].style.height = details_open[i].style.overflow = '';
    }

    this.open();
  // Check if the element is being openned or is already open
  } else if (this.isExpanding || this.el.open) {
    this.shrink();
  }

};

Accordion.prototype.shrink = function () {
  // Set the element as "being closed"
  this.isClosing = true;
  // Store the current height of the element
  const startHeight = `${this.el.offsetHeight}px`;
  // Calculate the height of the summary
  const endHeight = `${this.summary.offsetHeight}px`;

  // If there is already an animation running
  if (this.animation) {
    // Cancel the current animation
    this.animation.cancel();
  }

  // Start a WAAPI animation
  this.animation = this.el.animate({
    // Set the keyframes from the startHeight to endHeight
    height: [startHeight, endHeight]
  }, {
    // If the duration is too slow or fast, you can change it here
    duration: 400,
    // You can also change the ease of the animation
    easing: 'ease-out'
  });

  // When the animation is complete, call onAnimationFinish()
  this.animation.onfinish = () => this.onAnimationFinish(false);
  // If the animation is cancelled, isClosing variable is set to false
  this.animation.oncancel = () => this.isClosing = false;
};

Accordion.prototype.open = function () {
  // Apply a fixed height on the element
  this.el.style.height = `${this.el.offsetHeight}px`;
  // Force the [open] attribute on the details element
  this.el.open = true;
  // Wait for the next frame to call the expand function
  window.requestAnimationFrame(() => this.expand());
};

Accordion.prototype.expand = function () {
  // Set the element as "being expanding"
  this.isExpanding = true;
  // Get the current fixed height of the element
  const startHeight = `${this.el.offsetHeight}px`;
  // Calculate the open height of the element (summary height + content height)
  const endHeight = `${this.summary.offsetHeight + this.content.offsetHeight}px`;

  // If there is already an animation running
  if (this.animation) {
    // Cancel the current animation
    this.animation.cancel();
  }

  // Start a WAAPI animation
  this.animation = this.el.animate({
    // Set the keyframes from the startHeight to endHeight
    height: [startHeight, endHeight]
  }, {
    // If the duration is too slow of fast, you can change it here
    duration: 400,
    // You can also change the ease of the animation
    easing: 'ease-out'
  });
  // When the animation is complete, call onAnimationFinish()
  this.animation.onfinish = () => this.onAnimationFinish(true);
  // If the animation is cancelled, isExpanding variable is set to false
  this.animation.oncancel = () => this.isExpanding = false;
};

Accordion.prototype.onAnimationFinish = function (open) {
  // Set the open attribute based on the parameter
  this.el.open = open;
  // Clear the stored animation
  this.animation = null;
  // Reset isClosing & isExpanding
  this.isClosing = false;
  this.isExpanding = false;
  // Remove the overflow hidden and the fixed height
  this.el.style.height = this.el.style.overflow = '';

};


//look for elements
var details = document.querySelectorAll('details');

//initialize elements
if (details.length) {
  initializeUI(details, Accordion);
}
