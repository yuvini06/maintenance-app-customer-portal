import React from "react";
import Dashboard from "./Dashboard";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchChartHeaders } from "../externals/Api";
import { setErrorStatus } from "../internals/Actions";
import {
  barChartData,
  barChartOptions,
  pieChartData,
  pieChartOptions,
  bubbleChartData,
  bubbleChartOptions,
  donutChartData,
  donutChartOptions,
} from "../utils/chartData";

/**
 * Customer landing page with market stats
 */

class LandingPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chartHeaders: [],
    };
  }

  async componentDidMount() {
    try {
      const results = await fetchChartHeaders();
      let chartHeaders = {};

      // Generate chart headers
      results.forEach((header) => {
        chartHeaders = { ...chartHeaders, ...header };
      });
      this.setState({ chartHeaders });
    } catch (e) {
      this.props.setErrorStatus(true);
    }
  }

  render() {
    return (
      <>
        <header className="page-header">
          <h1>Customer Dashboard</h1>
        </header>
        {!this.props.isError && (
          <Dashboard
            className="container"
            chartHeaders={this.state.chartHeaders}
            barChartData={barChartData}
            barChartOptions={barChartOptions}
            pieChartData={pieChartData}
            pieChartOptions={pieChartOptions}
            bubbleChartData={bubbleChartData}
            bubbleChartOptions={bubbleChartOptions}
            donutChartData={donutChartData}
            donutChartOptions={donutChartOptions}
          />
        )}
      </>
    );
  }
}

LandingPage.propTypes = {
  maintenanceData: PropTypes.array,
  setErrorStatus: PropTypes.func,
  isError: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  maintenanceData: state.maintenanceData,
  isError: state.isError,
});

export default connect(mapStateToProps, { setErrorStatus })(LandingPage);
