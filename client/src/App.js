import React, { useState } from "react";

const App = () => {
  const [bgColor1, setBgColor1] = useState("#023047");
  const [txtColor1, setTxtColor1] = useState("#fff");
  document.body.style.background = bgColor1;
  document.body.style.color = txtColor1;
  return (
    <div
      style={{
        height: "100vh",
        width: "100wh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      App
    </div>
  );
};

export default App;
