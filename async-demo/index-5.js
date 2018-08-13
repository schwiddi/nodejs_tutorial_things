/*jshint esversion: 6 */

const games = [
    { id: 1, playerA: 'Schwiddi', playerB: 'Basil', scorePlayerA: 1, scorePlayerB: 0 },
    { id: 2, playerA: 'Schwiddi', playerB: 'Basil', scorePlayerA: 0, scorePlayerB: 1 },
    { id: 3, playerA: 'Mani', playerB: 'Basil', scorePlayerA: 0, scorePlayerB: 1 },
    { id: 4, playerA: 'Hazem', playerB: 'Schwiddi', scorePlayerA: 1, scorePlayerB: 0 }, 
    { id: 5, playerA: 'Schwiddi', playerB: 'Hazem', scorePlayerA: 0, scorePlayerB: 1 }
];

// here is the same code as in index-3 but made better with
// Umbau auf Promises

console.log('Echo: Before DB Querry in Code..');

function getAllGamesFromUserCount(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let count = 72;
            console.log(`Got Result for getCountAllGamesFromUser from User: ${user} Games: ${count}`);
            resolve(count);
        }, 3000);
    });
}

function getAllWonGamesFromUserCount(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let count = 51;
            console.log(`Got Result for getAllWonGamesFromUserCount from User: ${user} WonGames: ${count}`);
            resolve(count);
        }, 5000);
    });
}

function calculatePercentageWonGames(all, won) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // reject(new Error('bla'))
            // return
            const ratio = ( won / all ) * 100;
            console.log(`Got Result for calculatePercentageWonGames from User: Schwiddi Ratio is: ${ratio}`);
            resolve(ratio);
        }, 1000);
    });
}


// before switching to consume the promises
// getAllGamesFromUserCount('schwiddi', (countallgamesfromuser) => {
//     console.log(`callback from function getAllGamesFromUserCount.. the count is ${countallgamesfromuser}`);
//     const allgames = countallgamesfromuser;
//     getAllWonGamesFromUserCount('schwiddi', (countallwongamesfromuser) => {
//         console.log(`callback from function getAllWonGamesFromUserCount.. the count is ${countallwongamesfromuser}`);
//         const allwongames = countallwongamesfromuser;
//         calculatePercentageWonGames(allgames, allwongames, (ratio) => {
//             console.log(`callback from function calculatePercentageWonGames..`);
//             console.log(`the percentage of won games for user Schwiddi is: ${ratio}`);
//         });
//     });
// });

// after switch to promises
getAllGamesFromUserCount('schwiddi')
    .then(count => getAllWonGamesFromUserCount('schwiddi'))
    .then(countwon => calculatePercentageWonGames(72,countwon)) // setting 1. arg manualy / my example is not the best to display this
    .then(ratio => console.log('end of then chain'))
    .catch(err => console.log('Arrived in .catch', err));



console.log('Echo: After DB Querry in Code..');