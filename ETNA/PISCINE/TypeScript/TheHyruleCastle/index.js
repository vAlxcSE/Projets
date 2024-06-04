"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInput = void 0;
var interface_character_1 = require("./interface_character");
var readlineSync = require('readline-sync');
var getInput = function (question) { return readlineSync.question("".concat(question, "\n")); };
exports.getInput = getInput;
var etages = 9;
var fs = require('fs');
//const random_perso = Math.random(* rarity)
//const enemies = Math.random(* rarity)
//const boss = Math.random(* rarity)
// console.log (random_perso)
for (var g = 0; g < etages && interface_character_1.Link.hp > 0; g++) {
    interface_character_1.Enemy.hp = interface_character_1.Enemy.hp_max;
    console.log("\n================= FIGHT ".concat(g + 1, " =================\n\nYou encouter Bokoblin at the stage ").concat(g + 1, " !\n\nBokoblin has ").concat(interface_character_1.Enemy.hp, " hp and you have ").concat(interface_character_1.Link.hp < 20 ? "\u001B[31m".concat(interface_character_1.Link.hp, "\u001B[0m") : interface_character_1.Link.hp, " hp."));
    for (var i = 0; interface_character_1.Link.hp > 0 && interface_character_1.Enemy.hp > 0; i++) {
        console.log("\n             === ROUND ".concat(g + 1, " ===\n\nLink HP : ").concat(interface_character_1.Link.hp < 20 ? "\u001B[31m".concat(interface_character_1.Link.hp, "\u001B[0m") : interface_character_1.Link.hp, "     -----     Bokoblin HP : ").concat(interface_character_1.Enemy.hp));
        var choix = (0, exports.getInput)("\nChoose your action (\x1b[31m1. Attack\x1b[0m or \x1b[32m2. Heal\x1b[0m) ?");
        // Conditions attaque ou heal  
        if (choix.toLowerCase() == "attack" || choix.toLowerCase() == "1") {
            interface_character_1.Enemy.hp = interface_character_1.Enemy.hp - interface_character_1.Link.strength;
            interface_character_1.Link.hp = interface_character_1.Link.hp - interface_character_1.Enemy.strength;
            console.log("\nYou have inflicted ".concat(interface_character_1.Link.strength, " on Bokoblin ! Only ").concat(interface_character_1.Enemy.hp, " hp left !"));
            console.log("\nBokoblin inflicted ".concat(interface_character_1.Enemy.strength, " damage on you. You now have ").concat(interface_character_1.Link.hp < 20 ? "\u001B[31m".concat(interface_character_1.Link.hp, "\u001B[0m") : interface_character_1.Link.hp, " hp left."));
        }
        else if (choix.toLowerCase() == "heal" || choix.toLowerCase() == "2") {
            if ((interface_character_1.Link.hp + (interface_character_1.Link.hp_max / 2)) > interface_character_1.Link.hp_max) {
                interface_character_1.Link.hp = interface_character_1.Link.hp + (interface_character_1.Link.hp_max - interface_character_1.Link.hp);
            }
            else {
                interface_character_1.Link.hp = interface_character_1.Link.hp + (interface_character_1.Link.hp_max / 2);
            }
            console.log("\nBokoblin inflicted ".concat(interface_character_1.Enemy.strength, " damage on you. You now have ").concat(interface_character_1.Link.hp < 20 ? "\u001B[31m".concat(interface_character_1.Link.hp, "\u001B[0m") : interface_character_1.Link.hp, " hp left."));
            console.log("\nYou have chosen to heal ! You now have ".concat(interface_character_1.Link.hp < 20 ? "\u001B[31m".concat(interface_character_1.Link.hp, "\u001B[0m") : interface_character_1.Link.hp, " hp left."));
        }
        else if (interface_character_1.Enemy.hp === 0) {
            console.log("\n Bokoblin is dead, you're moving on to the next stage !");
            break;
        }
    }
    console.clear();
}
for (var h = 10; interface_character_1.Boss.hp > 0 && interface_character_1.Link.hp > 0;) {
    //     console.log(Link.hp)    
    interface_character_1.Boss.hp = interface_character_1.Boss.hp_max;
    console.log("\n================ FIGHT 10 ================\n\nYou encouter Ganon at the level 10 !\n\nGanon has ".concat(interface_character_1.Boss.hp, " hp and you have ").concat(interface_character_1.Link.hp < 20 ? "\u001B[31m".concat(interface_character_1.Link.hp, "\u001B[0m") : interface_character_1.Link.hp, " hp."));
    for (var i = 0; interface_character_1.Link.hp > 0 && interface_character_1.Boss.hp > 0; i++) {
        console.log("\n             === ROUND 10 ===\n\nLink HP : ".concat(interface_character_1.Link.hp < 20 ? "\u001B[31m".concat(interface_character_1.Link.hp, "\u001B[0m") : interface_character_1.Link.hp, "     -----     Ganon HP : ").concat(interface_character_1.Boss.hp));
        var choix = (0, exports.getInput)("\nChoose your action (\x1b[31m1. Attack\x1b[0m or \x1b[32m2. Heal\x1b[0m)?");
        // Conditions attaque ou heal  
        if (choix.toLowerCase() == "attack" || choix.toLowerCase() == "1") {
            interface_character_1.Boss.hp = interface_character_1.Boss.hp - interface_character_1.Link.strength;
            interface_character_1.Link.hp = interface_character_1.Link.hp - interface_character_1.Boss.strength;
            console.log("\nYou have inflicted ".concat(interface_character_1.Link.strength, " on Ganon ! Only ").concat(interface_character_1.Boss.hp, " hp left !"));
            console.log("\nGanon inflicted ".concat(interface_character_1.Boss.strength, " damage on you. You now have ").concat(interface_character_1.Link.hp < 20 ? "\u001B[31m".concat(interface_character_1.Link.hp, "\u001B[0m") : interface_character_1.Link.hp, " hp left."));
        }
        else if (choix.toLowerCase() == "heal" || choix.toLowerCase() == "2") {
            if ((interface_character_1.Link.hp + (interface_character_1.Link.hp_max / 2)) > interface_character_1.Link.hp_max) {
                interface_character_1.Link.hp = interface_character_1.Link.hp + (interface_character_1.Link.hp_max - interface_character_1.Link.hp);
            }
            else {
                interface_character_1.Link.hp = interface_character_1.Link.hp + (interface_character_1.Link.hp_max / 2);
            }
            console.log("\nGanon inflicted ".concat(interface_character_1.Boss.strength, " damage on you. You now have ").concat(interface_character_1.Link.hp < 20 ? "\u001B[31m".concat(interface_character_1.Link.hp, "\u001B[0m") : interface_character_1.Link.hp, " hp left."));
            console.log("\nYou have chosen to heal ! You now have ".concat(interface_character_1.Link.hp < 20 ? "\u001B[31m".concat(interface_character_1.Link.hp, "\u001B[0m") : interface_character_1.Link.hp, " hp left."));
        }
        else if (interface_character_1.Boss.hp === 0) {
            console.log("\nGanon is dead, the game is over \nYOU WON !");
            break;
        }
    }
    console.clear();
}
