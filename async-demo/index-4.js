/*jshint esversion: 6 */

const games = [
  {
    id: 1,
    playerA: 'Schwiddi',
    playerB: 'Basil',
    scorePlayerA: 1,
    scorePlayerB: 0
  },
  {
    id: 2,
    playerA: 'Schwiddi',
    playerB: 'Basil',
    scorePlayerA: 0,
    scorePlayerB: 1
  },
  {
    id: 3,
    playerA: 'Mani',
    playerB: 'Basil',
    scorePlayerA: 0,
    scorePlayerB: 1
  },
  {
    id: 4,
    playerA: 'Hazem',
    playerB: 'Schwiddi',
    scorePlayerA: 1,
    scorePlayerB: 0
  },
  {
    id: 5,
    playerA: 'Schwiddi',
    playerB: 'Hazem',
    scorePlayerA: 0,
    scorePlayerB: 1
  }
];

// here is the same code as in index-3 bur made better with
// Named functions umbau

console.log('Echo: Before DB Querry in Code..');

function getAllGamesFromUserCount(user, callback) {
  setTimeout(() => {
    let count = 72;
    console.log(
      `Got Result for getCountAllGamesFromUser from User: ${user} Games: ${count}`
    );
    callback(count);
  }, 3000);
}

function getAllWonGamesFromUserCount(user, givenwongames, callback) {
  const overgivenwongames = givenwongames;
  console.log(overgivenwongames);
  setTimeout(() => {
    let count = 51;
    console.log(
      `Got Result for getAllWonGamesFromUserCount from User: ${user} WonGames: ${count}`
    );
    callback(overgivenwongames, count);
  }, 2000);
}

function calculatePercentageWonGames(all, won, callback) {
  console.log(all, won);
  setTimeout(() => {
    const ratio = (won / all) * 100;
    console.log(
      `Got Result for calculatePercentageWonGames from User: Schwiddi Ratio is: ${ratio}`
    );
    callback(ratio);
  }, 2000);
}

getAllGamesFromUserCount('schwiddi', getAllPlayedGamesOfUser);
// raplacing this anonymous callback functions with named function

function displayRatioOfUser(ratio) {
  console.log(`callback from function calculatePercentageWonGames..`);
  console.log(`the percentage of won games for user Schwiddi is: ${ratio}`);
}

function getOutWonGamesOfUser(allgames, countallwongamesfromuser) {
  console.log(
    `callback from function getAllWonGamesFromUserCount.. the count is ${countallwongamesfromuser}`
  );
  const allwongames = countallwongamesfromuser;
  console.log(allwongames);
  calculatePercentageWonGames(allgames, allwongames, displayRatioOfUser);
}

function getAllPlayedGamesOfUser(countallgamesfromuser) {
  console.log(
    `callback from function getAllGamesFromUserCount.. the count is ${countallgamesfromuser}`
  );
  const allgames = countallgamesfromuser;
  console.log(`allgames is: ${allgames}`);

  getAllWonGamesFromUserCount('schwiddi', allgames, getOutWonGamesOfUser);
}

// see index-5 for promises

console.log('Echo: After DB Querry in Code..');
