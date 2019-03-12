import React from "react";
import Popup from "reactjs-popup";

const Modal = () => (
  <Popup
    trigger={<button className="button"> Open Modal </button>}
    modal
    closeOnDocumentClick
  >
    <span> Modal content </span>
  </Popup>
);

render(<Modal />);

export default Login;
