var g;
var body;

window.onload = function () {
	g = new Game();
	body = $('#body');
	body.append(g.view.htmlJqu);
};