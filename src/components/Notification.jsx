import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeNotication } from '../store/features/notification/notificationSlice';

const Notification = () => {
  const dispatch = useDispatch();
  const notification = useSelector(state => state.notification);
  const typeNot = useSelector(state => state.type);

  const notificationClass = () => {
    if (typeNot.success) {
      return 'notification is-success'
    } else if (typeNot.error) {
      return 'notification is-danger'
    } else {
      return 'notification is-warn'
    }
  }
  const closeNot = () => dispatch(closeNotication());

  return (
    <>
      <div className="is-flex is-justify-content-center">
        <div className={notificationClass()}>
          <button className="delete" onClick={closeNot}></button>
          { notification.msg }
        </div>
      </div>
    </>
  )
};

export default Notification;
