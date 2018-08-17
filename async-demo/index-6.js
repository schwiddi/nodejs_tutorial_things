/*jshint esversion: 6 */

// now made shiny with real promises paralel
// more suited to your example

console.log('Echo: Before DB Querry in Code..');

function getAllGamesFromUserCount(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let count = 72;
      console.log(
        `Got Result for getCountAllGamesFromUser from User: ${user} Games: ${count}`
      );
      resolve(count);
    }, 2000);
  });
}

function getAllWonGamesFromUserCount(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let count = 51;
      console.log(
        `Got Result for getAllWonGamesFromUserCount from User: ${user} WonGames: ${count}`
      );
      resolve(count);
    }, 1000);
  });
}

function calculatePercentageWonGames(all, won) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // reject(new Error('bla'))
      // return
      const ratio = (won / all) * 100;
      console.log(
        `Got Result for calculatePercentageWonGames from User: Schwiddi Ratio is: ${ratio}`
      );
      resolve(ratio);
    }, 1000);
  });
}

const allgamespromise = getAllGamesFromUserCount('schwiddi');
const wongamespromise = getAllWonGamesFromUserCount('schwiddi');

// get promise from both async readings
// and then give the returns to the calculate function
Promise.all([allgamespromise, wongamespromise])
  .then(resultfrompromisearraycauseofallmethod =>
    calculatePercentageWonGames(
      resultfrompromisearraycauseofallmethod[0],
      resultfrompromisearraycauseofallmethod[1]
    )
  )
  .catch(err => console.log('something went wrong here', err));

console.log('Echo: After DB Querry in Code..');
