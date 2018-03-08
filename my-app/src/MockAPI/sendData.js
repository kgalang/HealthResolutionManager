import { dummyHealthRequests } from "./dummyData";

export default ({ errorRate, waitTime, numberOfHealthRequests }) =>
  new Promise((resolve, reject) => {
    const rollDice = Math.random();
    setTimeout(function() {
      if (rollDice > errorRate) {
        console.log({json: dummyHealthRequests(numberOfHealthRequests)});
        resolve({ json: () => dummyHealthRequests(numberOfHealthRequests) });
      } else {
        const message = "there was an error fetching health requests";
        reject(new Error(message));
      }
    }, waitTime);
  });