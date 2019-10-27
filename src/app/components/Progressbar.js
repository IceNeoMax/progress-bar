import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const ProgressBar = ({ bar, limit, active }) => {
  const temp = Math.ceil((bar / limit) * 100) || 0;
  const percentage = temp > 100 ? 100 : temp;
  const limitExceed = classnames(temp > 100 && "progress-bar-danger");
  const currentBar = classnames(active && "progress-bar-primary");
  return (
    <div className="progressbar-container">
      <span>
        {bar} / {limit}
        {active && <span className="active-brand"> (active)</span>}
      </span>
      <div className="progress progress-striped active">
        <div
          style={{ width: `${percentage}%` }}
          className={`progress-bar progress-bar-success ${currentBar} ${limitExceed} `}
        >
          <span>{temp}%</span>
        </div>
      </div>
    </div>
  );
};
ProgressBar.propTypes = {
  bar: PropTypes.number,
  limit: PropTypes.number,
  active: PropTypes.bool
};

ProgressBar.defaultProps = {
  active: false
};
const mapStateToProps = state => {
  const { limit } = state.bar;
  return {
    limit
  };
};
export default connect(mapStateToProps)(ProgressBar);
