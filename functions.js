const dragonEvents = [
    {type: 'attack', value: 12, target: 'player-dorkman'},
    {type: 'yawn', value: 40, target: 'player-dorkman'},
    {type: 'eat', value: 12, target: 'horse'},
    {type: 'attack', value: 23, target: 'player-fluffykins'},
    {type: 'attack', value: 12, target: 'player-dorkman'},
    {type: 'attack', value: 90, target: 'player-fluffykins'}

]
/*
//filter
//gets things out of an array
const totalDamageonDorkman = dragonEvents
.filter(function(event) {
    return event.type === 'attack'
})

.filter(function(event){
    return event.target === 'player-dorkman'
})

.filter((event) => {
    return event.target === 'player-dorkman'
})


.map(function(event) {
    return event.value
})

//Adding the previous values together
.reduce(function(prev, value) {
    return (prev || 0) + value
})
*/

//refactor using arrow functions
const reduceTotal = (prev, x) => (prev || 0) + x

const totallyDamageonDorkman = dragonEvents
.filter(e => e.target === 'attack')
.filter(event => event.type === 'yawn')
.map(event => event.value)
.reduce(reduceTotal)



console.log('totalDamageonDorkman\n', totalDamageonDorkman);
console.log('totallyDamageonDorkman\n', totallyDamageonDorkman);




