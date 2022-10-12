import axios from "./customAxios";
import {
  fetchMaintenanceScheduleForUser,
  receiveMaintenanceSchedule,
  setErrorStatus,
} from "../internals/Actions";
import { HTTP_METHODS } from "../utils/constants";

const fetchMaintenanceSchedule = (userType) => async (dispatch) => {
  const config = {
    url: `/api/maintenance-work/schedule`,
    params: { userType },
    method: HTTP_METHODS.GET,
  };

  try {
    dispatch(fetchMaintenanceScheduleForUser());
    const response = await axios(config);
    return dispatch(receiveMaintenanceSchedule(response.data));
  } catch (e) {
    return dispatch(setErrorStatus(true));
  }
};

const fetchChartHeaders = async () => {
  const config = {
    url: `/api/charts/headers`,
    method: HTTP_METHODS.GET,
  };
  const response = await axios(config);
  return response.data;
};

export { fetchMaintenanceSchedule, fetchChartHeaders };
