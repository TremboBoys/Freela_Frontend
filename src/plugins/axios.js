import axios from "axios";
import { getToken } from "@/services/auth2/auth";

axios.post('http://127.0.0.1:8000/api/user/login/ ', {
    token: getToken,
})
.then((res) => {
    console.log(res)
})
.catch((error) => {
    console.log(error)
});