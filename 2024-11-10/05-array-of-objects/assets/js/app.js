const mira = {
    name: `Mira`,
    age: 22,
    gender: `female`,
    city: `Petach Tiqwa`
}

const yoav = {
    name: `Yoav`,
    age: 22,
    gender: `male`,
    city: `Hertzliya`
}

const beery = {
    name: `Beery`,
    age: 18,
    gender: `male`,
    city: `Holon`
}


const osher = {
    name: `Osher`,
    age: 22,
    gender: `male`,
    city: `Givat shmuel`
}

const friends = [mira, yoav, beery, osher];
const animals = [`dog`, `cat`, `fish`];
for (const friend of friends) {
    document.write(`properties of ${friend.name} `)
    for (const property in friend) {
        document.write(`${property} value is ${friend[property]} <br>`)
    }
    document.write(`<br>`)
}

friends.splice(1, 1);

for (const friend of friends) {
    document.write(`${friend.name} is my friend <br>`)
}

const bands = [{ name: `nirvana`, style: `Rock` }, { name: `Beatles`, style: `Rock ` }, { name: `Mashina`, style: `Israeli` }];
document.write(`There are ${bands.length} bands in my collection`)