import axios from "axios";
import { getRandomValuePromise, getRandomValueAsync } from "./async.js";

console.log("1");

try {
  const value = await getRandomValueAsync();
  console.log(value);
} catch (error) {
  console.log(error);
}

console.log("2");

/*promise
  .then((result) => {
    // call to resolve
    console.log("Result is " + result);
    // ici je suis sûr d'avoir le résultat
  })
  .catch((errorMsg) => {
    // call to reject
    console.error("Error: " + errorMsg);
  });*/

// async / await

try {
  const result = await axios.get("https://hp-api.onrender.com/api/characters");
  console.log("success");
} catch (error) {
  console.error("error");
}

/*axiosCall
  .then((result) => {
    console.log("success");
  })
  .catch((errorMsg) => console.error("error"));
*/
