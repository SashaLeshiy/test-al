import React from 'react';
import { useSelector } from "react-redux";

function Profile() {



  return (
    (<div className="login__container">
      <div className="login__parent">
      <h3 className="login__heading login__heading_preview">Персональные данные</h3>
      <span className="login__parent_name">Василий, 31</span>
      </div>
      <div className="login__children">
      <h3 className="login__heading login__heading_child">Дети</h3>
      <span className="login__parent login__parent_child">Василий, 14</span>
      <span className="login__parent login__parent_child">Глеб, 8</span>
      </div>
    </div>
    )
  );
}

export default Profile;