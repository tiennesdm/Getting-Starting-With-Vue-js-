new Vue({
    el: "#app",
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: []
    },
    methods: {
        startGame: function() {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];

        },
        attack: function() {},
        specialAttack: function() {},
        heal: function() {},
        giveUp: function() {},
        monsterAttacks: function() {},
        calculateDamage: function() {},
        checkWin: function() {}


    },
});