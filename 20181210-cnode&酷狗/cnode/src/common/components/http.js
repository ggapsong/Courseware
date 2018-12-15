import axios from "axios";
import qs from "querystring";
const HTTP = axios.create({
    baseURL:"https://cnodejs.org/api/v1",
    transformRequest:(res)=>{
        return qs.stringify(res);
    }
});
export default HTTP;