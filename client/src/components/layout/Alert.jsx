import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// mapping through all the alerts and displaying them
const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <div
      key={alert.id}
      className={`alert alert-${alert.alertType}`}
      role='alert'
      style={{
        width: '40%',
        margin: '50px auto 0 auto',
        textAlign: 'center',
      }}>
      {alert.msg}
    </div>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStatetoProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStatetoProps)(Alert);
