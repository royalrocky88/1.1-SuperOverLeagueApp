const element = (
  //   Write your code here.
  <div className="bg-card">
    <h1 className="header">Super Over League</h1>

    <div className="image-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/rcb-img.png"
        className="logo"
      />

      <img
        src="https://assets.ccbp.in/frontend/react-js/csk-img.png"
        className="logo"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
