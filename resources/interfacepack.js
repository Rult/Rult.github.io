var objectHatMenuSections = { // список ссылок для хеадера/шапки
	"Галерея": "/gallery/",
	"Инфо": "/info/"
};

var objectSidebarMenuSections = { // список ссылок для сайдбара
	"Главная": "/",
	"Галерея": "/gallery/",
	"Инфо": "/info/",
	"Соседи": "",
		"Соседи - ссылки": {
			"ChaosCraft": "https://chaoscraft.ml/",
			"Deer's House": "https://pious.dev/",
			"oneLab": "https://github.com/oneLab-Projects"
		}
};









var clientWidthBoundary = 65*parseFloat(getComputedStyle(document.body).fontSize);

function checkAdaptivity() {
	var clientWidth = document.body.clientWidth;

	return (clientWidth > clientWidthBoundary) ? "desktop" : "mobile"; // условие ? значение-истина : значение-ложь
}





// скрипт для вставки сайдбара и шапки (хеадера) на страницу



var divHat = document.createElement("div");
divHat.id = "hat";
document.body.appendChild(divHat);
// шапка/хеадер появляется в index.php выше, чем контент-блок

	var imgMenuButton = document.createElement("img");
	imgMenuButton.id = "menuButton";
	imgMenuButton.src = "/resources/menu_button_dark.svg";
	imgMenuButton.title = "Навигация";
	divHat.appendChild(imgMenuButton);

	var divHatMenuTitle = document.createElement("div");
	divHatMenuTitle.id = "hatMenuTitle";
	divHat.appendChild(divHatMenuTitle);

	if (window.location.pathname !== "/") {
		divHatMenuTitle.innerHTML = "<a href='/'>StillTest</a>";
	} else {
		divHatMenuTitle.textContent = "StillTest";
	}

	var divHatMenuSections = document.createElement("div");
	divHatMenuSections.id = "hatMenuSections";
	divHat.appendChild(divHatMenuSections);

		for (var key in objectHatMenuSections) {
			var aHatMenuSection = document.createElement("a"); // создание переменной для хранения ссылки
			var spanHatMenuSection = document.createElement("span"); // для текста

			if (objectHatMenuSections[key] != "" && objectHatMenuSections[key] != window.location.pathname) {
				aHatMenuSection.href = objectHatMenuSections[key]; // вставка ссылки
			} else {
				aHatMenuSection.style.textShadow = "none";
			}

			divHatMenuSections.appendChild(aHatMenuSection); // вставка элемента для ссылки

			spanHatMenuSection.className = "hatMenuSection";
			spanHatMenuSection.textContent = key; // вставка текста
			aHatMenuSection.appendChild(spanHatMenuSection); // вставка элемента для текста в элемент для ссылки
		}



var divSidebar = document.createElement("div");
divSidebar.id = "sidebar";
document.body.appendChild(divSidebar);
// сайдбар появляется в index.php выше, чем контент-блок, но ниже, чем шапка/хеадер

	var divSidebarSign = document.createElement("div");
	divSidebarSign.id = "sidebarSign";
	divSidebar.appendChild(divSidebarSign);

		divSidebarSign.textContent = "Навигация";

	var divSidebarMenu = document.createElement("div");
	divSidebarMenu.id = "sidebarMenu";
	divSidebar.appendChild(divSidebarMenu);

		for (var key in objectSidebarMenuSections) {
			if (typeof(objectSidebarMenuSections[key]) == "object") {

				var divSidebarMenuLinks = document.createElement("div");
				divSidebarMenuLinks.className = "sidebarMenuLinks";
				divSidebarMenu.appendChild(divSidebarMenuLinks);

				var objectSidebarMenuLinks = objectSidebarMenuSections[key];

				for (var subkey in objectSidebarMenuLinks) {
					var aSidebarMenuLink = document.createElement("a");
					var divSidebarMenuLink = document.createElement("div");

					if (objectSidebarMenuLinks[subkey] != "" && objectSidebarMenuLinks[subkey] != window.location.pathname) {
						aSidebarMenuLink.href = objectSidebarMenuLinks[subkey];
						aSidebarMenuLink.target = "_blank";
					} else {
						divSidebarMenuLink.style.textShadow = "none";
					}

					divSidebarMenuLinks.appendChild(aSidebarMenuLink);

					divSidebarMenuLink.textContent = subkey;
					aSidebarMenuLink.appendChild(divSidebarMenuLink);
				}

			} else {
				var aSidebarMenuSection = document.createElement("a"); // создание переменной для хранения ссылки
				var divSidebarMenuSection = document.createElement("div"); // для текста

				if (objectSidebarMenuSections[key] != "" && objectSidebarMenuSections[key] != window.location.pathname) {
					aSidebarMenuSection.href = objectSidebarMenuSections[key]; // вставка ссылки
				} else {
					divSidebarMenuSection.style.textShadow = "none";
				}

				divSidebarMenu.appendChild(aSidebarMenuSection); // вставка элемента для ссылки

				divSidebarMenuSection.className = "sidebarMenuSection";
				divSidebarMenuSection.textContent = key; // вставка текста
				aSidebarMenuSection.appendChild(divSidebarMenuSection); // вставка элемента для текста в элемент для ссылки
			}
		}

	var divFooter = document.createElement("div");
	divFooter.id = "footer";
	divSidebar.appendChild(divFooter);

	divFooter.innerHTML = '<span style="display: inline-block; transform: scaleX(-1)";>©</span> Footer test<br>All rights tested';
























function checkLocalStorageForContent() {

	if (localStorage["sidebarStatus"] == "1") {


		divSidebar.style.marginLeft = "0";
		divSidebar.style.display = "block";

		divHatMenuSections.style.display = "none";

		divHat.style.marginLeft = "17vw";
		divHat.style.width = "78.5vw";

		document.body.className = "desktop withSidebar";
	} else {


		divSidebar.style.marginLeft = "-16vw";
		divSidebar.style.display = "none";

		divHatMenuSections.style.display = "inline";

		divHat.style.marginLeft = "2vw";
		divHat.style.width = "93.5vw";

		document.body.className = "desktop noSidebar";
	}

}








var divHatMobile;
var divSidebarMobile;

var divHatDesktop;
var divSidebarDesktop;




function setClassesAndIdsForInterface() {

	if (checkAdaptivity() == "mobile") {


		divHat.id = "hatMobile";
		divSidebar.id = "sidebarMobile";

		if (localStorage["sidebarStatus"] == "1") {
			divSidebar.style.height = "";
			divSidebar.style.display = "block";
		} else {
			divSidebar.style.height = "0";
			divSidebar.style.display = "none";
		}

		divSidebar.style.marginLeft = "6.5vw";

		divHat.style.width = "93.5vw";
		divHat.style.marginLeft = "2vw";



		divHatMenuSections.style.display = "none";

		document.body.className = "mobile";

	} else {


		divHat.id = "hat";
		divSidebar.id = "sidebar";

		divSidebar.style.height = "100%";

		checkLocalStorageForContent();
	}

	divHatMobile = document.getElementById("hatMobile");
	divSidebarMobile = document.getElementById("sidebarMobile");

	divHatDesktop = document.getElementById("hat");
	divSidebarDesktop = document.getElementById("sidebar");
}

setClassesAndIdsForInterface();
window.addEventListener("resize", setClassesAndIdsForInterface);


function setHatForOpenedSidebar() {
	if (checkAdaptivity() == "desktop") {
		divHatDesktop.style.marginLeft = "17vw";
		divHatDesktop.style.width = "78.5vw";
	}
}

function setHatForClosedSidebar() {
	if (checkAdaptivity() == "desktop") {
		divHatDesktop.style.marginLeft = "2vw";
		divHatDesktop.style.width = "93.5vw";
	}
}

var timerForClosingSidebar;

function setSidebarForClosedSidebar() {

	clearTimeout(timerForClosingSidebar);

	if (checkAdaptivity() == "desktop") {
		divSidebarDesktop.style.marginLeft = "-16vw";
		timerForClosingSidebar = setTimeout(function(){ divSidebarDesktop.style.display = "none"; }, 1000);
	} else {
		divSidebarMobile.style.height = "0";
		divSidebarMobile.style.display = "none";
	}
}

function setSidebarForOpenedSidebar() {

	clearTimeout(timerForClosingSidebar);
	divSidebar.style.display = "block";

	if (checkAdaptivity() == "desktop") {
		divSidebarDesktop.style.marginLeft = "0";
	} else {
		divSidebarMobile.style.height = "";
	}
}













if (localStorage["sidebarStatus"] == "1") { // если сайдбар был ранее открыт

	setHatForOpenedSidebar();
	setSidebarForOpenedSidebar();

	if (checkAdaptivity() == "desktop") {
		document.body.className = "desktop withSidebar";
	} else {
		document.body.className = "mobile";
	}

	divHatMenuSections.style.display = "none";

} else { // если сайдбар был ранее закрыт или страница не посещалась вообще
	localStorage.setItem("sidebarStatus", "0");

	setHatForClosedSidebar();

	setSidebarForClosedSidebar();
	clearTimeout(timerForClosingSidebar);
	divSidebar.style.display = "none";

	if (checkAdaptivity() == "desktop") {
		document.body.className = "desktop noSidebar";
	} else {
		document.body.className = "mobile";
	}


	if (checkAdaptivity() == "desktop") {
		divHatMenuSections.style.display = "inline";
	}
}

var isSidebarOpened = +localStorage["sidebarStatus"];
// записываем статус сайдбара в переменную

divSidebarMenu.onclick = function closeSidebarForMobile(event) {
	if (event.target.parentNode.parentNode == this && checkAdaptivity() == "mobile") {
		localStorage.setItem("sidebarStatus", "0");
		isSidebarOpened = +localStorage["sidebarStatus"];
	}
};
