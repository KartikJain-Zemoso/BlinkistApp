import React from "react";

const NavItems = (props) => {
  return (
    <React.Fragment>
      <div className="nav-items">
        {props.title}

        {props.icon}

        {/* <ButtonComponent title={props.title}/> */}
      </div>
    </React.Fragment>
  );
};
export default NavItems;
