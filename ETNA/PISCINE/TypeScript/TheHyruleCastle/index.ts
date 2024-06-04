import { link } from 'fs';
import { Character, Link, Enemy, Boss } from './interface_character';
var readlineSync = require('readline-sync');
export const getInput = (question: string) => readlineSync.question(`${question}\n`);
const etages = 9;
const fs = require('fs');

//const random_perso = Math.random(* rarity)
//const enemies = Math.random(* rarity)
//const boss = Math.random(* rarity)
// console.log (random_perso)

          for (let g = 0; g < etages && Link.hp > 0; g++) {   
               Enemy.hp = Enemy.hp_max;
               console.log(`\n================= FIGHT ${g + 1} =================\n\nYou encouter Bokoblin at the stage ${g + 1} !\n\nBokoblin has ${Enemy.hp} hp and you have ${Link.hp < 20 ? `\x1b[31m${Link.hp}\x1b[0m` : Link.hp} hp.`)
               for (let i = 0; Link.hp > 0 && Enemy.hp > 0; i++) {
                    console.log(`\n             === ROUND ${g + 1} ===\n\nLink HP : ${Link.hp < 20 ? `\x1b[31m${Link.hp}\x1b[0m` : Link.hp}     -----     Bokoblin HP : ${Enemy.hp}`)
                    let choix = getInput("\nChoose your action (\x1b[31m1. Attack\x1b[0m or \x1b[32m2. Heal\x1b[0m) ?");
                    // Conditions attaque ou heal  
                    if (choix.toLowerCase() == "attack" || choix.toLowerCase() == "1") {
                         Enemy.hp = Enemy.hp - Link.strength;
                         Link.hp = Link.hp - Enemy.strength;
                         console.log(`\nYou have inflicted ${Link.strength} on Bokoblin ! Only ${Enemy.hp} hp left !`)
                         console.log(`\nBokoblin inflicted ${Enemy.strength} damage on you. You now have ${Link.hp < 20 ? `\x1b[31m${Link.hp}\x1b[0m` : Link.hp} hp left.`)
                    } else if (choix.toLowerCase() == "heal"|| choix.toLowerCase() == "2") {
                         if ((Link.hp + (Link.hp_max / 2)) > Link.hp_max) {
                              Link.hp = Link.hp + (Link.hp_max - Link.hp)
                         } else {
                              Link.hp = Link.hp + (Link.hp_max / 2);
                         }
                         console.log(`\nBokoblin inflicted ${Enemy.strength} damage on you. You now have ${Link.hp < 20 ? `\x1b[31m${Link.hp}\x1b[0m` : Link.hp} hp left.`)
                         console.log(`\nYou have chosen to heal ! You now have ${Link.hp < 20 ? `\x1b[31m${Link.hp}\x1b[0m` : Link.hp} hp left.`)
                    } else if (Enemy.hp === 0) {
                         console.log(`\n Bokoblin is dead, you're moving on to the next stage !`);
                         break;
                    } 
               } console.clear()
          }     


for (let h = 10; Boss.hp > 0 && Link.hp > 0;) {
     //     console.log(Link.hp)    
     Boss.hp = Boss.hp_max;
     console.log(`\n================ FIGHT 10 ================\n\nYou encouter Ganon at the level 10 !\n\nGanon has ${Boss.hp} hp and you have ${Link.hp < 20 ? `\x1b[31m${Link.hp}\x1b[0m` : Link.hp} hp.`)
     for (let i = 0; Link.hp > 0 && Boss.hp > 0; i++) {
          console.log(`\n             === ROUND 10 ===\n\nLink HP : ${Link.hp < 20 ? `\x1b[31m${Link.hp}\x1b[0m` : Link.hp}     -----     Ganon HP : ${Boss.hp}`)
          let choix = getInput("\nChoose your action (\x1b[31m1. Attack\x1b[0m or \x1b[32m2. Heal\x1b[0m)?");
          // Conditions attaque ou heal  
          if (choix.toLowerCase() == "attack" || choix.toLowerCase() == "1") {
               Boss.hp = Boss.hp - Link.strength;
               Link.hp = Link.hp - Boss.strength;
               console.log(`\nYou have inflicted ${Link.strength} on Ganon ! Only ${Boss.hp} hp left !`)
               console.log(`\nGanon inflicted ${Boss.strength} damage on you. You now have ${Link.hp < 20 ? `\x1b[31m${Link.hp}\x1b[0m` : Link.hp} hp left.`)
          } else if (choix.toLowerCase() == "heal" || choix.toLowerCase() == "2") {
               if ((Link.hp + (Link.hp_max / 2)) > Link.hp_max) {
                    Link.hp = Link.hp + (Link.hp_max - Link.hp)
               } else {
                    Link.hp = Link.hp + (Link.hp_max / 2);
               }
               console.log(`\nGanon inflicted ${Boss.strength} damage on you. You now have ${Link.hp < 20 ? `\x1b[31m${Link.hp}\x1b[0m` : Link.hp} hp left.`)
               console.log(`\nYou have chosen to heal ! You now have ${Link.hp < 20 ? `\x1b[31m${Link.hp}\x1b[0m` : Link.hp} hp left.`)
          } else if (Boss.hp === 0) {
               console.log(`\nGanon is dead, the game is over \nYOU WON !`);
               break;
          }
     } console.clear()
}