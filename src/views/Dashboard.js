import PropTypes from "prop-types";
import { Col, Row } from "reactstrap";
import ReactApexChart from "react-apexcharts";

const Dashboard = (props) => (
  <>
    <Row
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginTop: "2rem",
        height: "30vh",
      }}
    >
      <Col xs="6" md="6" lg="6">
        <h2>{props.chartHeaders.pieChartHeader}</h2>
        <ReactApexChart
          key="pie_chart"
          options={props.pieChartOptions}
          series={props.pieChartData}
          type="pie"
          width="100%"
          height="90%"
        />
      </Col>
      <Col xs="6" md="6" lg="6">
        <h2>{props.chartHeaders.bubbleChartHeader}</h2>
        <ReactApexChart
          key="bubble_chart"
          options={props.bubbleChartOptions}
          series={props.bubbleChartData}
          type="bubble"
          width="100%"
          height="80%"
        />
      </Col>
    </Row>
    <Row
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginTop: "5rem",
      }}
    >
      <Col xs="6" md="6" lg="6">
        <h2>{props.chartHeaders.barChartHeader}</h2>
        <ReactApexChart
          key="bar_chart"
          options={props.barChartOptions}
          series={props.barChartData}
          type="bar"
          width="100%"
          height="80%"
        />
      </Col>
      <Col xs="6" md="6" lg="6">
        <h2>{props.chartHeaders.donutChartHeader}</h2>
        <ReactApexChart
          key="donut_chart"
          options={props.donutChartOptions}
          series={props.donutChartData}
          type="donut"
          width="100%"
          height="90%"
        />
      </Col>
    </Row>
  </>
);

Dashboard.propTypes = {
  chartHeaders: PropTypes.any,
  barChartData: PropTypes.array,
  barChartOptions: PropTypes.object,
  pieChartData: PropTypes.array,
  pieChartOptions: PropTypes.object,
  bubbleChartData: PropTypes.array,
  bubbleChartOptions: PropTypes.object,
  donutChartData: PropTypes.array,
  donutChartOptions: PropTypes.object,
};

export default Dashboard;
