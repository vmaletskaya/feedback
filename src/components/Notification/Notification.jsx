import PropTypes from 'prop-types';
import css from './Notification.module.css'

export default function Notification({ message }){
    return (
      <div className={css.container}>
        <h2 className={css.notification}>{message}</h2>
      </div>
    );
};
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};