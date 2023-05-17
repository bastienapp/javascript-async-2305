import axios from "axios";
import { getRandomValue } from "./async.js";

async function onStart() {
  console.log("before await getRandomValue");
  try {
    const value = await getRandomValue();
    console.log("success await getRandomValue: " + value);
  } catch (errorMsg) {
    console.error("error await getRandomValue: " + errorMsg);
  }
  console.log("after await getRandomValue");

  console.log("before promise getRandomValue");
  const promise = getRandomValue();
  promise
    .then((result) => {
      // call to resolve
      console.log("success promise getRandomValue: " + result);
      // ici je suis sûr d'avoir le résultat
    })
    .catch((errorMsg) => {
      // call to reject
      console.error("error promise getRandomValue: " + errorMsg);
    });
  console.log("after promise getRandomValue");

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
