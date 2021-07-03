import React from "react";

const Button = ({buttonDisplayName, clickHandler, id}) => (
    <button id={id} onClick={clickHandler}>{buttonDisplayName}</button>
);

export default Button;