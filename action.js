var aboutOpenButton = document.getElementById('about-open-button');
var aboutDrawer = document.getElementById('about-drawer');
var aboutCloseButton = document.getElementById('about-close-button');

aboutOpenButton.onclick = function(){
	aboutDrawer.classList.add("open");
};

aboutCloseButton.onclick = function(){
	aboutDrawer.classList.remove("open");
};

var descOpenButton = document.getElementById('desc-open-button');
var descDrawer = document.getElementById('desc-drawer');
var descCloseButton = document.getElementById('desc-close-button');

descOpenButton.onclick = function(){
	descDrawer.classList.add("open");
};

descCloseButton.onclick = function(){
	descDrawer.classList.remove("open");
};

var knOpenButton = document.getElementById('kn-open-button');
var knDrawer = document.getElementById('kn-drawer');
var knCloseButton = document.getElementById('kn-close-button');

knOpenButton.onclick = function(){
	knDrawer.classList.add("open");
};

knCloseButton.onclick = function(){
	knDrawer.classList.remove("open");
};

var chemOpenButton = document.getElementById('chem-open-button');
var chemDrawer = document.getElementById('chem-drawer');
var chemCloseButton = document.getElementById('chem-close-button');

chemOpenButton.onclick = function(){
	chemDrawer.classList.add("open");
};

chemCloseButton.onclick = function(){
	chemDrawer.classList.remove("open");
};
