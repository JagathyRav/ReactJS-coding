import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import Notification from '../Notification'

import './index.css'

const alertsList = [
  {
    id: 1,
    alertName: 'Success',
    alertIcon: <AiFillCheckCircle className="success" />,
    description: 'You can access all the files in the folder',
    descriptionClass: 'success-description',
  },

  {
    id: 2,
    alertName: 'Error',
    alertIcon: <RiErrorWarningFill className="error" />,
    description:
      'Sorry, you are not authorized to have access to delete the file',
    descriptionClass: 'error-description',
  },

  {
    id: 3,
    alertName: 'Warning',
    alertIcon: <MdWarning className="warning" />,
    description: 'Viewers of this file can see comments and suggestions',
    descriptionClass: 'warning-description',
  },
  {
    id: 4,
    alertName: 'Info',
    alertIcon: <MdInfo className="info" />,
    description: 'Anyone on the internet can view these files',
    descriptionClass: 'info-description',
  },
]

const AlertNotifications = () => (
  <div className="app-container">
    <h1 className="heading">Alert Notifications</h1>
    <ul className="list-container">
      {alertsList.map(alert => (
        <li key={alert.id} className="list-item">
          <div>{alert.alertIcon}</div>
          <div className="alert-container">
            <Notification>{alert.alertName}</Notification>
            <p className={alert.descriptionClass}>{alert.description}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
)

export default AlertNotifications
