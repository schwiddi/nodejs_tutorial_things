/*jshint esversion: 6 */

// and now switch to 
// async / await

console.log('Echo: Before DB Querry in Code..');

function getAllGamesFromUserCount(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let count = 72;
            console.log(`Got Result for getCountAllGamesFromUser from User: ${user} Games: ${count}`);
            resolve(count);
        }, 2000);
    });
}

function getAllWonGamesFromUserCount(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let count = 51;
            console.log(`Got Result for getAllWonGamesFromUserCount from User: ${user} WonGames: ${count}`);
            resolve(count);
        }, 1000);
    });
}

function calculatePercentageWonGames(all, won) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // reject(new Error('bla')) // just for testing the catch block
            // return
            const ratio = ( won/all ) * 100;
            console.log(`Got Result for calculatePercentageWonGames from User: Schwiddi Ratio is: ${ratio}`);
            resolve(ratio);
        }, 1000);
    });
}

// after switch to promises
// getAllGamesFromUserCount('schwiddi')
//     .then(count => getAllWonGamesFromUserCount('schwiddi'))
//     .then(countwon => calculatePercentageWonGames(72,countwon)) // setting 1. arg manualy / my example is not the best to display this
//     .then(ratio => console.log('end of then chain'))
//     .catch(err => console.log('Arrived in .catch', err));

// this above was before switching to async await
// const allusergames = await getAllGamesFromUserCount('schwiddi');
// const allwonusergames = await getAllWonGamesFromUserCount('schwiddi');
// const calcdone = await calculatePercentageWonGames(allusergames, allwonusergames);
// console.log(calcdone);

// so after written it in await we need to wrap it in a async function
// async function displayPercentage() {
//     const allusergames = await getAllGamesFromUserCount('schwiddi');
//     const allwonusergames = await getAllWonGamesFromUserCount('schwiddi');
//     const calcdone = await calculatePercentageWonGames(allusergames, allwonusergames);
//     console.log(calcdone);    
// }
// and execute this function
// displayPercentage();


// PS jshint seems not to like async functions :)

// when you are using async functions you do not have a .catch..
// so instead u use this here
async function displayPercentage() {
    try {
        const allusergames = await getAllGamesFromUserCount('schwiddi');
        const allwonusergames = await getAllWonGamesFromUserCount('schwiddi');
        const calcdone = await calculatePercentageWonGames(allusergames, allwonusergames);
        return(calcdone)
    }
    catch(err) {
        console.log('arrived in the catch', err.message)
    }    
}
// and execute this function
displayPercentage();



console.log('Echo: After DB Querry in Code..');