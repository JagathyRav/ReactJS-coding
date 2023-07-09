const Box = props => {
  //  Write your code here.
  const { className, content} = props;
  return ( 
      <div className = {className}>
          <p>{content}</p>
      </div>
  )

}

const element = (
  //  Write your code here. 
  <div className="bgContainer">
    <h1 className="heading">Boxes</h1>
    <div className="BoxesContainer" >
        <Box className = "box1" content ="Small"}/>
        <Box className =  "box2" content ="Medium"}/>
        <Box className = "box3" content ="Large"}/>
        
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById("root"));
