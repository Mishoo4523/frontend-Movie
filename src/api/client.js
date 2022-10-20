import axios from "axios";


const client = axios.create({ baseURL: "http://localhost:8000/api" });
//const client = axios.create({ baseURL: "http://admin:1qaz2wsx3edc@movieapp.gul7hz0.mongodb.net/?retryWrites=true&w=majority/movieapp" });


export default client;
