import React from "react";
import {
  BrowserRouter as AppRouter,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Alert from "@mui/material/Alert";
import { setRedirectionFlagForMaintenance } from "./internals/Actions";
import NavBar from "./components/NavBar";
import LandingPage from "./views/LandingPage";
import MaintenanceScheduleOverview from "./views/MaintenanceScheduleOverview";
import MaintenanceView from "./views/MaintenanceView";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {this.props.isError && (
          <Alert variant="filled" severity="error">
            An unexpected error occurred. Pleae try again.
          </Alert>
        )}
        {!this.props.maintenanceInProgress && (
          <NavBar btnStyle={this.props.isError ? "90px" : "36px"} />
        )}
        <AppRouter>
          <div id="page-wrap">
            <Routes>
              <Route exact path="/maintenance-schedule" element={<MaintenanceScheduleOverview />} ></Route>
              <Route exact path="/maintenance-view" element={<MaintenanceView />} ></Route>
              <Route exact path="/" 
                element={ this.props.maintenanceInProgress ? (<MaintenanceView />) : (<LandingPage />) }
              ></Route>
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </AppRouter>
      </div>
    );
  }
}

App.propTypes = {
  maintenanceInProgress: PropTypes.bool,
  isError: PropTypes.bool,
  setRedirectionFlagForMaintenance: PropTypes.func,
};

const mapStateToProps = (state) => ({
  maintenanceInProgress: state.maintenanceInProgress,
  isError: state.isError,
});

export default connect(mapStateToProps, { setRedirectionFlagForMaintenance })(
  App
);
