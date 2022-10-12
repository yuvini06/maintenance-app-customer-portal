import {
  FETCH_MAINTENANCE_SCHEDULE,
  RECEIVE_MAINTENANCE_SCHEDULE,
  SET_REDIRECTION_FLAG_FOR_MAINTENANCE,
  SET_ERROR_STATUS,
} from "./Actions";

export default function RootReducer(state = {}, { type, data }) {
  switch (type) {
    case FETCH_MAINTENANCE_SCHEDULE:
      return { ...state, isError: false };
    case RECEIVE_MAINTENANCE_SCHEDULE:
      return { ...state, maintenanceData: data, refreshGrid: false };
    case SET_REDIRECTION_FLAG_FOR_MAINTENANCE:
      return { ...state, maintenanceInProgress: data };
    case SET_ERROR_STATUS:
      return { ...state, isError: data };
    default:
      return state;
  }
}
