/*jshint esversion: 6 */

const games = [
    { id: 1, playerA: 'Schwiddi', playerB: 'Basil', scorePlayerA: 1, scorePlayerB: 0 },
    { id: 2, playerA: 'Schwiddi', playerB: 'Basil', scorePlayerA: 0, scorePlayerB: 1 },
    { id: 3, playerA: 'Mani', playerB: 'Basil', scorePlayerA: 0, scorePlayerB: 1 },
    { id: 4, playerA: 'Hazem', playerB: 'Schwiddi', scorePlayerA: 1, scorePlayerB: 0 }, 
    { id: 5, playerA: 'Schwiddi', playerB: 'Hazem', scorePlayerA: 0, scorePlayerB: 1 }
];


// ziel is es das ratio eines players zu holen
// 1. musst du alle spiele eines users X wissen
// 2. die Anzahl der gewonnenen des users X
// 3. die (gewonnen / anzahl alle spiele)*100 um auf Prozent der winns zu kommen



// to deal with this problem
// Callbacks
// Promises
// Async / Await - last is basicly Promies made easier to write the code

// here is the Sample for Callback

console.log('Echo: Before DB Querry in Code..');


// functions
// 1. to get all games from a user
function getAllGamesFromUserCount(user, callback) { // here is a 2 arg a callback
    setTimeout(() => {
        let count = 72;
        console.log(`Got Result for getCountAllGamesFromUser from User: ${user} Games: ${count}`);
        callback(count); // here you call the callback
    }, 3000);
}
// 2. to get all won games from a user
function getAllWonGamesFromUserCount(user, callback) {
    setTimeout(() => {
        let count = 51;
        console.log(`Got Result for getAllWonGamesFromUserCount from User: ${user} WonGames: ${count}`);
        callback(count);
    }, 5000);
}

// 3. to get the won in %
function calculatePercentageWonGames(all, won, callback) {
    setTimeout(() => {
        const ratio = ( won / all ) * 100;
        console.log(`Got Result for calculatePercentageWonGames from User: Schwiddi Ratio is: ${ratio}`);
        callback(ratio);
    }, 10000);
}


// nun um die asynchronität noch besser darzustellen mache ich den funktionsaufruf
// um die anzahl der gewonnen games zu holen erst nachdem ich die anzahl aller games eines users habe
getAllGamesFromUserCount('schwiddi', (countallgamesfromuser) => { // here is the callback function
    console.log(`callback from function getAllGamesFromUserCount.. the count is ${countallgamesfromuser}`);
    const allgames = countallgamesfromuser;
    
    getAllWonGamesFromUserCount('schwiddi', (countallwongamesfromuser) => {
        console.log(`callback from function getAllWonGamesFromUserCount.. the count is ${countallwongamesfromuser}`);
        const allwongames = countallwongamesfromuser;

        calculatePercentageWonGames(allgames, allwongames, (ratio) => {
            console.log(`callback from function calculatePercentageWonGames..`);
            console.log(`the percentage of won games for user Schwiddi is: ${ratio}`);
        });
    });
});


// this above is called CALLBACK HELL
// or Cristmastree Problem

// how to do it better with promises see index-4.js





console.log('Echo: After DB Querry in Code..');