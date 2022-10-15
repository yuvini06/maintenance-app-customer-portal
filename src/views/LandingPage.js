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
      chartHeaders: {},
      barChart: { data: [], options: {} },
      pieChart: { data: [], options: {} },
      bubbleChart: { data: [], options: {} },
      donutChart: { data: [], options: {} },
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
      this.setState({
        chartHeaders,
        barChart: { data: barChartData, options: barChartOptions },
        pieChart: { data: pieChartData, options: pieChartOptions },
        bubbleChart: { data: bubbleChartData, options: bubbleChartOptions },
        donutChart: { data: donutChartData, options: donutChartOptions },
      });
    } catch (e) {
      this.props.setErrorStatus(true);
    }
  }

  render() {
    const { chartHeaders, barChart, bubbleChart, pieChart, donutChart } =
      this.state;
    return (
      <>
        <header className="page-header">
          <h1>Customer Dashboard</h1>
        </header>
        {!this.props.isError && Object.keys(chartHeaders).length > 0 && (
          <Dashboard
            className="container"
            chartHeaders={chartHeaders}
            barChartData={barChart.data}
            barChartOptions={barChart.options}
            pieChartData={pieChart.data}
            pieChartOptions={pieChart.options}
            bubbleChartData={bubbleChart.data}
            bubbleChartOptions={bubbleChart.options}
            donutChartData={donutChart.data}
            donutChartOptions={donutChart.options}
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
