function Hunter(name, level) {
	this.superClass = new Archer(name, level);
	Archer.call(this, name, level);
	this.name = name;
	this.level = level;
	this.className = "Hunter";

}
Hunter.prototype = new Beginner();
Hunter.prototype.superClass = null;
Hunter.prototype.name = null;
Hunter.prototype.level = null;


Hunter.prototype.getPower = function (mlv) {
	var power = 0.9;
	var magic = 1.5;
	return (this.superClass.getPower.call(this, mlv) * power * magic);
}

Hunter.prototype.set = function (hp, selfExp) {
	this.superClass.setHp.call(this, hp);
	this.superClass.setSelfExp.call(this, hp);

}