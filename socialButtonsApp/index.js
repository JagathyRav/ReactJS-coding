const Button = (props) => {
  //  Write your code here.
  const { className, btnText } = props;
  return (
    <button className={`${className[0]} ${className[1]}`}>{btnText}</button>
  );
};

const element = (
  //  Write your code here.
  <div className="bgContainer">
    <h1 className="heading">Social Buttons</h1>
    <div className="btnContainer">
      <Button className={["btn1", "btn"]} btnText="Like" />
      <Button className={["btn2", "btn"]} btnText="Comment" />
      <Button className={["btn3", "btn"]} btnText="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
