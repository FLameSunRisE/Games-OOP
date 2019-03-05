function Dragons(name, level) {
	this.superClass = new BaseCharacter(name, level);
	BaseCharacter.call(this, name, level);
	this.name = name;
	this.level = level;
	this.givenExp = 200;
	this.hp = level * 50;
	//this.setPower(level * 2);
}
// Beginner.prototype = Object.create(BaseCharacter.prototype);
// Beginner.prototype.constructor = Beginner;
Dragons.prototype = new BaseCharacter();
Dragons.prototype.superClass = null;

Dragons.prototype.name = null;
Dragons.prototype.level = null;
Dragons.prototype.givenExp = null;
Dragons.prototype.hp = null;
Dragons.prototype.setPower = null;


Dragons.prototype.getHP = function () {
	return this.getHp;
}

Dragons.prototype.getPower = function (mlv) {
	var bg = 0.7;
	var getpowertmp = this.superClass.getPower.call(this, mlv);
	if (bg > Math.random() & getpowertmp > 0) {
		return getpowertmp + 100;
	} else {
		return getpowertmp;
	}
}