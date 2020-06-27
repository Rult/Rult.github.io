var divContent = document.getElementById("content");



var imgRegularImage = document.getElementsByClassName("regularImage");


function adjustRegularImages() {

	if (checkAdaptivity() == "mobile") {
		for (var i=0; i<imgRegularImage.length; i++) {
			imgRegularImage[i].style.maxWidth = "80vw";

			var widthOfImage = parseFloat(getComputedStyle(imgRegularImage[i], null).getPropertyValue("width"));
			var widthOfContent = parseFloat(getComputedStyle(divContent, null).getPropertyValue("width"));

			if (widthOfImage/widthOfContent >= 0.6) {
				imgRegularImage[i].style.float = "none";
				imgRegularImage[i].style.marginLeft = "0";
			} else {
				imgRegularImage[i].style.float = "right";
				imgRegularImage[i].style.marginLeft = "3vw";
			}
		}

	} else {
		for (var i=0; i<imgRegularImage.length; i++) {
			imgRegularImage[i].style.maxWidth = "25vw";
			imgRegularImage[i].style.float = "right";
			imgRegularImage[i].style.marginLeft = "3vw";
		}
	}
}



function turnOnTransitionOpenSidebar() {
	if (checkAdaptivity() == "desktop") {
		divSidebarDesktop.style.transition = "margin-left 1s ease-in-out";
	} else {
		divSidebarMobile.style.transition = "height 1s ease-in-out";
	}
	divHat.style.transition = "margin-left 0s ease-in-out 0s, width 0s ease-in-out 0s";
	divContent.style.transition = "margin-left 0s ease-in-out 0s, width 0s ease-in-out 0s";
}

function turnOnTransitionCloseSidebar() {
	if (checkAdaptivity() == "desktop") {
		divSidebarDesktop.style.transition = "margin-left 1s ease-in-out";
	} else {
		divSidebarMobile.style.transition = "height 1s ease-in-out";
	}
	divHat.style.transition = "margin-left 0s ease-in-out 1s, width 0s ease-in-out 1s";
	divContent.style.transition = "margin-left 0s ease-in-out 1s, width 0s ease-in-out 1s";
}

function turnOffTransition() {
	if (checkAdaptivity() == "desktop") {
		divSidebarDesktop.style.transition = "margin-left 0s ease-in-out";
	} else {
		divSidebarMobile.style.transition = "height 0s ease-in-out";
	}
	divHat.style.transition = "margin-left 0s ease-in-out 0s, width 0s ease-in-out 0s";
	divContent.style.transition = "margin-left 0s ease-in-out 0s, width 0s ease-in-out 0s";
}

var menuButton = document.getElementById("menuButton");

var timerForTurningOffTransition;
var timerForDisplayingDivHatMenuSections;

menuButton.onclick = function toggleSidebar() {

	clearTimeout(timerForTurningOffTransition);
	clearTimeout(timerForDisplayingDivHatMenuSections);

	if (isSidebarOpened == 1) {
		turnOnTransitionCloseSidebar();
		timerForTurningOffTransition = setTimeout(turnOffTransition, 1000);

		setSidebarForClosedSidebar();

		if (checkAdaptivity() == "desktop") {
			setHatForClosedSidebar();
			document.body.className = "desktop noSidebar";

			timerForDisplayingDivHatMenuSections = setTimeout(function() { divHatMenuSections.style.display = 'inline'; }, 1001);
		}

	} else {
		turnOnTransitionOpenSidebar();
		timerForTurningOffTransition = setTimeout(turnOffTransition, 1000);

		setSidebarForOpenedSidebar();

		if (checkAdaptivity() == "desktop") {
			setHatForOpenedSidebar();
			document.body.className = "desktop withSidebar";

			divHatMenuSections.style.display = "none";
		}
	}

	localStorage["sidebarStatus"] = (isSidebarOpened = +!isSidebarOpened);
	// меняем значение переменной на противоположное и сохраняем его в localStorage

};


for (var i=0; i<imgRegularImage.length; i++) {
	imgRegularImage[i].setAttribute("onload", "adjustRegularImages();");
}

adjustRegularImages();
window.addEventListener("resize", adjustRegularImages);
