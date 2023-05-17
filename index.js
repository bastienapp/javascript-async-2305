import axios from "axios";
import { getRandomValuePromise, getRandomValueAsync } from "./async.js";

async function onStart() {
  console.log("before getRandomValueAsync");
  try {
    const value = await getRandomValueAsync();
    console.log("success getRandomValueAsync: " + value);
  } catch (errorMsg) {
    console.error("error getRandomValueAsync: " + errorMsg);
  }
  console.log("after getRandomValueAsync");

  console.log("before getRandomValuePromise");
  const promise = getRandomValuePromise();
  promise
    .then((result) => {
      // call to resolve
      console.log("success getRandomValuePromise: " + result);
      // ici je suis sûr d'avoir le résultat
    })
    .catch((errorMsg) => {
      // call to reject
      console.error("error getRandomValuePromise: " + errorMsg);
    });
  console.log("after getRandomValuePromise");

  console.log("before await axios");
  try {
    const result = await axios.get(
      "https://hp-api.onrender.com/api/characters"
    );
    console.log("success await axios");
  } catch (error) {
    console.error("error await axios");
  }
  console.log("after await axios");

  console.log("before promise axios");
  const axiosCall = axios.get("https://hp-api.onrender.com/api/characters");
  axiosCall
    .then((result) => {
      console.log("success promise axios");
    })
    .catch((errorMsg) => console.error("error promise axios"));
  console.log("after promise axios");
}

onStart();
