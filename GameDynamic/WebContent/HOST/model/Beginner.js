function Beginner(name, level) {
	this.superClass = new BaseCharacter(name, level);
	BaseCharacter.call(this, name, level);
	this.name = name;
	this.level = level;
	this.hp = 5000;
	this.className = "Beginner";
}
Beginner.prototype = new BaseCharacter();
Beginner.prototype.superClass = null;
Beginner.prototype.name = null;
Beginner.prototype.level = null;
Beginner.prototype.className = null;


Beginner.prototype.getHP = function () {
	return this.getHp;
}

Beginner.prototype.getPower = function (mlv) {
	return this.superClass.getPower.call(this, mlv);
}