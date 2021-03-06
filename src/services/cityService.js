import axios from "axios";
import { endpoints } from "../endpoints";

export default class CityService {
  apiUrl = endpoints.apiUrl;
  getCities() {
    return axios.get(this.apiUrl + "/cities/getall");
  }
  add(values) {
    return axios.post(this.apiUrl + "/cities/add", values);
  }
  update(values) {
    return axios.post(this.apiUrl + "/cities/update", values);
  }
}
