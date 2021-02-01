import axios from "axios";
const instance = axios.create({
    baseURL: "https://word-app-34bb1-default-rtdb.firebaseio.com/"
});
export default instance;