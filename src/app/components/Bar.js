import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import CircularProgress from "@material-ui/core/CircularProgress";

import { getBar, changeBar } from "../actions/bar";
import ProgressBar from "./Progressbar";

const Bar = props => {
  const { getBar, loading, bars, buttons, changeBar } = props;
  const [barPosition, setBarPosition] = useState(0);

  useEffect(() => {
    getBar();
  }, [getBar]);

  const renderBars = () => {
    return bars.map((bar, _i) => (
      <ProgressBar key={_i} bar={bar} active={barPosition === _i} />
    ));
  };

  const changeBarValue = value => changeBar({ value, barPosition });

  const changeBarPosition = e =>
    setBarPosition(e.target.value && parseInt(e.target.value));

  const renderButtons = () => {
    return buttons.map((button, _i) => (
      <button className="mr-12" key={_i} onClick={() => changeBarValue(button)}>
        {button}
      </button>
    ));
  };

  return (
    <>
      {loading ? (
        <div className="center-flex">
          <CircularProgress />
        </div>
      ) : (
        <div className="container">
          {renderBars()}
          <div>
            <select
              className="mr-12"
              value={barPosition}
              onChange={changeBarPosition}
            >
              {bars.length &&
                bars.map((bar, _i) => (
                  <option key={_i} value={_i}>
                    #Position {_i + 1}
                  </option>
                ))}
            </select>
            {renderButtons()}
          </div>
        </div>
      )}
    </>
  );
};
Bar.propTypes = {
  buttons: PropTypes.array,
  bars: PropTypes.array,
  loading: PropTypes.bool,
  changeBar: PropTypes.func
};

export const mapDispatchToProps = dispatch => {
  return {
    getBar: () => dispatch(getBar()),
    changeBar: e => dispatch(changeBar(e))
  };
};

const mapStateToProps = state => {
  const { buttons, bars, loading } = state.bar;
  return {
    buttons,
    bars,
    loading
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bar);
