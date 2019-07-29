import axios from "axios"

axios.get().then((res) => console.log("res", res)).catch((err) => console.log("err", err))