/*jshint esversion: 6 */

// temporar Database :)
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


function getAllGamesFromUserCount(user) {
    setTimeout(() => {
        let count = 100;
        console.log(`Got Result for getCountAllGamesFromUser from User: ${user} Games: ${count}`);
        return(count);
    }, 3000);
}

const countall = getAllGamesFromUserCount('schwiddi');
console.log(`count is: ${countall}`);

// wichtig zu verstehen!!
// das was da an code steht wird undefined ausgeben und erst später dann die callback function auslösen
// wenn du das anschaust, solltest du verstehen was das problem der asynchronität ist
// und in index-3.js is dann das gleiche beispiel umgebaut so dass es funktioniert