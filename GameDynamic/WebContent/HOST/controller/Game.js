function Game() {
	this.view = new ViewGame("page/");
	this.view.btnStart.click(btnController);
}
Game.prototype.player = null;
Game.prototype.speed = 100;
Game.prototype.view = null;
Game.prototype.gameover = false;

Game.prototype.start = function () {
	this.player = new Beginner(this.view.inputPlayerName.val(), 1);
	this.PlayWhile(this.player);

}
Game.prototype.PlayWhile = function (player) {
	var promise = new Promise((resolve) => setTimeout(resolve, 1000));
	promise.then(
		() => {
			this.PlayOne(player);
		}
	);
}

Game.prototype.PlayOne = function (player) {
	if (!this.gameover) {
		var monster = this.createMonster(this.player);

		this.view.showLog(this.player.getName());
		this.view.showLog(this.player.getLevel());
		this.view.showLog(this.player.getSelfExp());

		// PK
		if (monster == null) {
			this.PlayWhile();
			return;
		}
		this.player = this.fight(this.player, monster);
		// 計算
		this.player = this.calculator(this.player, monster);
		// 結果
		if (this.player.getHp() <= 0) {
			this.view.showLog("you dead");
			gameEnd = true;
		} else if (BigDragons.prototype.isPrototypeOf(monster)) {
			this.view.showLog("game end ^^");
			gameEnd = true;
		} else {
			this.view.showLog("penta kill");
		}
		this.PlayWhile();
	} else {

	}
}

Game.prototype.createMonster = function (player) {
	var monster = null;
	var rn = Math.random();
	if (rn > 0.8) {
		return monster;
	}
	if (player.getLevel() >= 40) {
		this.view.showLog("Big Dragon is coming");
		monster = new BigDragons("Big Dragon", 100);
	} else if (player.getLevel() >= 20) {
		this.view.showLog(" Dragon is coming");
		monster = new Dragons("Dragon", 49);
	} else {
		this.view.showLog("Goblin is coming");
		monster = new Goblin("Goblin", 10);
	}
	return monster;
}

Game.prototype.fight = function (player, monster) {
	while (monster.getHp() > 0 && player.getHp() > 0) {
		player.addHp(-(monster.getPower(player.getLevel())));
		this.view.showLog("monster attack------human hp:" + player.getHp());
		monster.addHp(-(player.getPower(monster.getLevel())));
		this.view.showLog("human attack------monster hp:" + monster.getHp());
	}
	return player;
}

Game.prototype.calculator = function (player, monster) {
	if (player.getHp() <= 0) {
		return player;
	}
	player.addSelfExp(monster.givenExp);
	this.view.showLog("human hp*****" + player.getHp());
	this.view.showLog("now level*******" + player.getLevel());
	this.view.showLog("now exp*******" + player.getSelfExp());
	this.view.showLog("now hp********" + player.getHp());
	this.upDateJob(player, monster);
	return player;

}

Game.prototype.upDateJob = function (player, monster) {
	var upDatePlayer = null;

	if (player.getLevel() >= 35 && !Hunter.prototype.isPrototypeOf(player)) {
		upDatePlayer = new Hunter("Jay-Hunter", player.getLevel());

	} else if (player.getLevel() >= 20 &&
		!Archer.prototype.isPrototypeOf(player)) {
		upDatePlayer = new Archer("Jay-Archer", player.getLevel());
	} else {
		this.view.showLog("Job-------" + player.className);
		return player;
	}
	upDatePlayer.setSelfExp(player.getSelfExp());
	player = upDatePlayer;
	this.view.showLog("Job-------" + player.className);
	return player;
}