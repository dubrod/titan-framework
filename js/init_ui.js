"use strict";

// Helper function to initialize sets of UI components obtained
// from getElementsByClassName/querySelectorAll
function initializeUI(elementList, init) {
    var storage = [];

    for (var i = 0; i < elementList.length; i++) {
        storage.push(new init(elementList[i]));
    }

    console.log(storage);

    return storage;
}

document.addEventListener("DOMContentLoaded", function(){
	window.addEventListener('scroll', function() {

		if (window.scrollY > 110) {
			document.getElementById('header').classList.add('fixed');
		} else {
		 	document.getElementById('header').classList.remove('fixed');
		}
	});
});
