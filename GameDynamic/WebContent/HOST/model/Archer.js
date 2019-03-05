function Archer(name, level) {
	this.superClass = new Beginner(name, level);
	Beginner.call(this, name, level);
	this.name = name;
	this.level = level;
	this.className = "Archer";

}

Archer.prototype = new Beginner();
Archer.prototype.superClass = null;

Archer.prototype.name = null;
Archer.prototype.level = null;

Archer.prototype.getPower = function (mlv) {
	var power = 0.9;
	var magic = 1.5;
	return (this.superClass.getPower.call(this, mlv) * power * magic);
}

Archer.prototype.set = function (hp, selfExp) {
	this.superClass.setHp.call(this, hp);
	this.superClass.setSelfExp.call(this, hp);

}