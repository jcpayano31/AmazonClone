import axios from "axios";

const instance = axios.create({
  // The API (cloud function ) URL
  baseURL: "https://us-central1-clone-e2c5f.cloudfunctions.net/api",
});

export default instance;
//hosting wedside
//https://us-central1-clone-e2c5f.cloudfunctions.net/api
//local 
//http://localhost:5001/clone-e2c5f/us-central1/api
// 