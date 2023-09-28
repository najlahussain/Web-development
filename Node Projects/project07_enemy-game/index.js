/**Adventure Game.*/
import inquirer from "inquirer";
//System objects
let rand = Math.random();
//Game variables
let enemies = ['skeleton', 'zombie', 'warrior', 'assassin'];
let maxEnemyHealth = 75;
let enemyAttackDamage = 25;
//player variables
let health = 100;
let attackDamage = 50;
let numHealthPots = 3;
let healthPotionHealAmount = 30;
let healthPotionDropChance = 50; //percentage
let running = true;
console.log("Welcome to the dungeon");
Game: while (running) {
    console.log("-----------------------------------------");
    let temp = rand * maxEnemyHealth;
    let enemyHealth = parseInt(temp.toFixed());
    let enemy = enemies[parseInt((rand * enemies.length).toFixed())]; //generating a random index number
    console.log(`\t# ${enemy} appeared`);
    while (enemyHealth > 0) {
        console.log(`\tYour HP: ${health}`);
        console.log(`\t${enemy}'s health: ${enemyHealth}`);
        //console.log(`\n\tWhat would you like to do?`);
        console.log(`\t1. Attack`);
        console.log(`\t2. Drink health potion`);
        console.log(`\t3. Run!`);
        let answer = await inquirer.prompt([
            {
                name: "choice",
                type: "number",
                message: `What would you like to do? `,
            }
        ]);
        if (answer.choice == 1) {
            let damageDealt = parseInt((rand * attackDamage).toFixed());
            let damageTaken = parseInt((rand * enemyAttackDamage).toFixed());
            enemyHealth -= damageDealt;
            health -= damageTaken;
            console.log(`\t>You strike the ${enemy} for ${damageDealt} damage.`);
            console.log(`\t>You receive ${damageTaken} in retaliation.`);
            if (health < 1) {
                console.log(`\t>You have taken too much damage. You are too weak to go on.`);
                break;
            }
        }
        else if (answer.choice == 2) {
            if (numHealthPots > 0) {
                health += healthPotionHealAmount;
                numHealthPots--;
                console.log(`\t>You drink a health potion, healing yourself for ${healthPotionHealAmount} amount`);
                console.log(`\n\t>You now have ${health} HP.`);
                console.log(`\n\t>You now have ${numHealthPots} number of health potions left.`);
            }
            else
                console.log(`\t>You do not have any health potions left. Defeat enemies for a chance to win more.`);
        }
        else if (answer.choice == 3) {
            console.log(`\t>You run away from ${enemy}!`);
            continue Game;
        }
        else {
            console.log("Invalid command");
        }
    }
    if (health < 1) {
        console.log("You limp out of the dungeon. Too weak to battle");
        break;
    }
    console.log("-----------------------------------------");
    console.log(`${enemy} was defeated. ${health} HP left. #`);
    if (parseInt((rand * 100).toFixed()) < healthPotionDropChance) {
        numHealthPots++;
        console.log(`The ${enemy} dropped a health potion`);
        console.log(`You now have ${numHealthPots} number of health potions.`);
        console.log(`---------------------------------------`);
        console.log(`1. Continue the game.`);
        console.log(`2. Exit the dungeon?`);
        let answer = await inquirer.prompt([
            {
                name: "choice",
                type: "number",
                message: `What would you like to do? `,
            }
        ]);
        while (!(answer.choice == 1) && !(answer.choice == 2)) {
            console.log("Invalid command");
            answer = await inquirer.prompt([
                {
                    name: "choice",
                    type: "number",
                    message: `What would you like to do? `,
                }
            ]);
        }
        if (answer.choice == 1)
            console.log("You continue on your adventure.");
        else if (answer.choice == 2) {
            console.log("You exit the dungeon. Successful in your adventures.");
            break;
        }
    }
    // running = false;
}
console.log("Thank you for playing!!!");
