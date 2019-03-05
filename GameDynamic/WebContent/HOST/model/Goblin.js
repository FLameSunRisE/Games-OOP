function Goblin(name, level) {
	this.superClass =new BaseCharacter(name,level);
	BaseCharacter.call(this, name, level);
	this.name = name;
	this.level = level;
	this.givenExp = 100;
	this.hp = level * 50;
	//this.setPower(level * 2);
}
// Beginner.prototype = Object.create(BaseCharacter.prototype);
// Beginner.prototype.constructor = Beginner;
Goblin.prototype = new BaseCharacter();
Goblin.prototype.superClass = null;

Goblin.prototype.name = null;
Goblin.prototype.level = null;
Goblin.prototype.givenExp = null;
Goblin.prototype.hp = null;
Goblin.prototype.setPower = null;


Goblin.prototype.getHP = function() {
	return this.getHp;
}

Goblin.prototype.getPower = function(mlv) {
	var bg = 0.7;
	var getpowertmp = this.superClass.getPower.call(this, mlv);
	if (bg > Math.random() & getpowertmp > 0) {
		return getpowertmp + 100;
	} else {
		return getpowertmp;
	}
}

Goblin.prototype.givenExp = function() {
	return this.givenExp;
}

