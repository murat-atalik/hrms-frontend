import axios from "axios";

export default class JobAdvertisementService {
  getJobAdvert() {
    return axios.get("http://localhost:8080/api/jobadvertisement/getAll");
  }
  add(values) {
    return axios.post("http://localhost:8080/api/jobadvertisement/add", values);
  }
  getByCompanyId(id) {
    return axios.get(
      "http://localhost:8080/api/jobadvertisement/getByCompany?id=" + id
    );
  }
  getByEmployerId(id) {
    return axios.get(
      "http://localhost:8080/api/jobadvertisement/getByEmployer?id=" + id
    );
  }
  getFilteredJobs(filterOption) {
    return axios.post(
      "http://localhost:8080/api/jobadvertisement/getAllFiltered",
      filterOption
    );
  }
}
