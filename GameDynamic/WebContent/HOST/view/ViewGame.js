function ViewGame(gamePages) {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", gamePages + "Gamebody.html", false);
	xhr.send("");
	this.htmlJqu = $($.parseHTML(xhr.responseText)[0]);
	this.htmlDom = this.htmlJqu[0];

	this.inputPlayerName = $(this.htmlDom.querySelectorAll('#inputPlayerName')[0]);
	this.btnStart = $(this.htmlDom.querySelectorAll('#btnStart')[0]);
	this.divPage = $(this.htmlDom.querySelectorAll('#divPage')[0]);
}

ViewGame.prototype.inputPlayerName = null;
ViewGame.prototype.btnStart = null;
ViewGame.prototype.divPage = null;

ViewGame.prototype.showLog = function (printLog) {
	this.divPage.html(this.divPage.html() + "<br/>" + printLog);
}

ViewGame.prototype.show = function () {
	this.showWithParameter();
}

ViewGame.prototype.showWithParameter = function (textbox, button, page) {
	if (bextbox != null) {
		this.setGameTextbox(textbox);
	}
	if (button != null) {
		this.setGameButton(button);
	}
	if (page != null) {
		this.setGamePage(page);
	}
	this.htmlJqu.show();
};

ViewGame.prototype.hide = function () {
	this.htmlJqu.hide();
};