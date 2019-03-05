function BaseCharacter(name, level) {
	this.name = name;
	this.level = level;
	this.power = 100;
	this.hp = 5000;
	this.selfExp = 0;
	this.className = "BaseCharacter";
}
BaseCharacter.prototype.name = null;
BaseCharacter.prototype.level = null;
BaseCharacter.prototype.power = null;
BaseCharacter.prototype.givenExp = null;
BaseCharacter.prototype.selfExp = null;
BaseCharacter.prototype.hp = null;
BaseCharacter.prototype.basePower = null;
BaseCharacter.prototype.className = null;


BaseCharacter.prototype.setName = function (name) {
	this.name = name;
}

BaseCharacter.prototype.getName = function () {
	return this.name;
}

BaseCharacter.prototype.setLevel = function (level) {
	this.level = level;
}

BaseCharacter.prototype.getLevel = function () {
	return this.level;
}

BaseCharacter.prototype.setPower = function (power) {
	this.setPower = power;
}

BaseCharacter.prototype.getPower = function (mlv) {
	//var c= 0.01 * (50 + this.level - mlv);
	if (0.9 > Math.random()) {
		return this.power;
	} else {
		return 0;
	}
}

BaseCharacter.prototype.addPower = function (power) {
	return this.power += power;
}

BaseCharacter.prototype.getSelfExp = function () {
	return this.selfExp;
}

BaseCharacter.prototype.addSelfExp = function (exp) {
	this.selfExp += exp;
	var levelup = ((this.level) * (100));
	if (this.selfExp >= levelup) {
		this.setLevel(this.level + 1);
		this.addHp(this.level * 5 + 1000);
		this.addPower(this.level);
	}
	return this.addSelfExp;
}

BaseCharacter.prototype.setSelfExp = function (exp) {
	return this.setSelfExp = exp;
}

BaseCharacter.prototype.addHp = function (hp) {
	return this.hp += hp;
}
BaseCharacter.prototype.getHp = function () {
	return this.hp;
}

BaseCharacter.prototype.setHp = function (hp) {
	this.hp = hp;
}


BaseCharacter.prototype.getclassName = function () {
	return this.className;
}