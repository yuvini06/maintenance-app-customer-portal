import HttpStatus from "http-status-codes";
import axios from "axios";
import { stringify } from "qs";
import store from "../internals/Store";
import {
  setRedirectionFlagForMaintenance,
  receiveMaintenanceSchedule,
} from "../internals/Actions";

const customAxios = axios.create();
customAxios.defaults.paramsSerializer = (params) => stringify(params);
customAxios.defaults.validateStatus = (status) =>
  (status >= HttpStatus.OK && status < HttpStatus.MULTIPLE_CHOICES) ||
  status === HttpStatus.TEMPORARY_REDIRECT;

customAxios.interceptors.response.use(async (response) => {
  if (response.status === HttpStatus.TEMPORARY_REDIRECT) {
    store.dispatch(setRedirectionFlagForMaintenance(true));
    if (window.location.pathname === "/maintenance-schedule") {
      store.dispatch(receiveMaintenanceSchedule(response.data));
    }
  } else {
    store.dispatch(setRedirectionFlagForMaintenance(false));
  }
  return response;
});

export default customAxios;
