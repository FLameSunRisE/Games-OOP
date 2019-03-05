function BigDragons(name, level) {
	this.superClass = new BaseCharacter(name, level);
	BaseCharacter.call(this, name, level);
	this.name = name;
	this.level = level;
	this.givenExp = 500;
	this.hp = level * 50;
	//this.setPower(level * 3);
}
// Beginner.prototype = Object.create(BaseCharacter.prototype);
// Beginner.prototype.constructor = Beginner;
BigDragons.prototype = new BaseCharacter();
BigDragons.prototype.superClass = null;

BigDragons.prototype.name = null;
BigDragons.prototype.level = null;
BigDragons.prototype.givenExp = null;
BigDragons.prototype.hp = null;
BigDragons.prototype.setPower = null;


BigDragons.prototype.getHP = function () {
	return this.getHp;
}

BigDragons.prototype.getPower = function (mlv) {
	var bg = 0.7;
	var getpowertmp = this.superClass.getPower.call(this, mlv);
	if (bg > Math.random() & getpowertmp > 0) {
		return getpowertmp + 100;
	} else {
		return getpowertmp;
	}
}