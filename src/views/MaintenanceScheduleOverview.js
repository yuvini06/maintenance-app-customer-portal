import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { USER_TYPE } from "../utils/constants";
import DataTable from "../components/DataTable";
import { fetchMaintenanceSchedule } from "../externals/Api";

/**
 * View maintenance schedule - Customer Mode
 *
 * @author: Yuvini Sumanasekera
 */
class MaintenanceScheduleOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showUpdateModal: false,
      showInsertModal: false,
      selectedTask: {},
    };
  }

  componentDidMount() {
    this.props.fetchMaintenanceSchedule(USER_TYPE.CUSTOMER);
  }

  render() {
    return (
      <>
        <header className="page-header">
          <h1>Upcoming Maintenance Windows</h1>
        </header>
        <DataTable
          tableData={this.props.maintenanceData}
          toggleUpdateModal={this.toggleUpdateModal}
        />
      </>
    );
  }
}

MaintenanceScheduleOverview.propTypes = {
  fetchMaintenanceSchedule: PropTypes.func,
  maintenanceData: PropTypes.array,
};

const mapStateToProps = (state) => ({
  maintenanceData: state.maintenanceData,
});

export default connect(mapStateToProps, { fetchMaintenanceSchedule })(
  MaintenanceScheduleOverview
);
