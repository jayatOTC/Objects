/* jay Allen
   Oject coding
*/
const aurora = 
{
    name: "Aurora",
    health: 150,
    strength: 25,
    xp: 0
};

console.log(`${aurora.name} has ${aurora.health} health points and ${aurora.strength} as Strength`);
// Arora is harmed by an arrow - reduce health by 20
aurora.strength -= 20;
// Aurora equips a strength necklace - increase strength by // 10
aurora.strength += 10;

console.log(`${aurora.name} has ${aurora.health} health points and ${aurora.strength} as Strength`);
// console.log(" strength upped");

console.log(" describe character");
function describe(character)
{
    console.log(`${aurora.name} has ${aurora.health} health points and ${aurora.strength} as Strength`);

}
// Aurora learn a new skill 

aurora.xp += 15;
{
    console.log(`${aurora.name} has ${aurora.health} health points, ${aurora.strength} as Strength and ${aurora.xp} XP points`);
}
const ryu = 
{
    name: "Ryu",
    health: 150,
    strength: 25,
    describe()
    {
        return `${this.name} has ${this.health} health points and  
            ${this.strength} as Strength`;

    }
}