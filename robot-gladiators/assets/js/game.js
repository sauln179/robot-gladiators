//Create a window that alerts the user the fight has begun
function fight(){
    window.alert("The fight has begun!");
}
//Prompt that ask and stores robot name.
var playerName = window.prompt("What is your robot name?");
var playerHealth = 100;
var playerAttack= 10;
console.log(playerName, playerHealth, playerAttack);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;
var fight = function() {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");
  
    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth = enemyHealth - playerAttack;

    // Log a resulting message to the console so we know that it worked.
    console.log(playerName+ " attacked " + enemyName +". "+ enemyName +" now has "+enemyHealth+" health remaining."
    );
    //CHECK ENEMY'S HEALTH
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
      } 
      else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
      }      

    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack;

    // check player's health
    if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
    } 
    else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
     }

    // Log a resulting message to the console so we know that it worked.
    console.log(enemyName+ " attacked " + playerName +"."+ playerName +" now has "+playerHealth+" health remaining."
    );
  };
  
fight();
if (playerHealth > 0){
    console.log(playerName+ " is still alive!");
}
/*console.log(playerName);
var name ="your name";
console.log(name);
console.log("This logs a string, good for leaving yourself a message");
// this will do math and log 20
console.log(10 + 10);
// what is this?
console.log("Our robot's name is " + playerName);
//fight();
*/
