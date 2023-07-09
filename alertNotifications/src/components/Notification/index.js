import {GrFormClose} from 'react-icons/gr'

import './index.css'

const Notification = props => {
  const {children} = props
  return (
    <>
      <h1 className="alert-heading">{children}</h1>
      <GrFormClose />
    </>
  )
}

export default Notification
