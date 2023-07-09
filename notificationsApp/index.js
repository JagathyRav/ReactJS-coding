const Notification = props => {
  //  Write your code here.
  const {className,url,content} =props;
  return  ( <div >
                <img src = {url}/>
                <p className = {`${className[0]} ${className[1]}`}>{content}</p> 
            </div> );
}

const element = (
  //  Write your code here.   
  <div className="bgContainer">
    <h1 className="heading">Notifications</h1>
    <div className="NotificationContainer" >
        <Notification className = {["notifyBar","notifyBar1"] url = "https://assets.ccbp.in/frontend/react-js/primary-icon-img.png" content ="Information Message"}/>
        <Notification className = {["notifyBar","notifyBar2"] url = "https://assets.ccbp.in/frontend/react-js/success-icon-img.png" content ="Success Message"}/>
        <Notification className = {["notifyBar","notifyBar3"] url = "https://assets.ccbp.in/frontend/react-js/warning-icon-img.png" content ="Warning Message"}/>
        <Notification className = {["notifyBar","notifyBar4"] url = "https://assets.ccbp.in/frontend/react-js/danger-icon-img.png" content ="Error Message"}/>
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
