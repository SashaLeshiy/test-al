import React from 'react';

function Profile({ childForm, parentForm }) {

  return (
    (<div className="login__container">
      <div className="login__parent">
      <h3 className="login__heading login__heading_preview">Персональные данные</h3>
      {parentForm.nameParent ?
      <span className="login__parent_name">{parentForm.nameParent}, {parentForm.ageParent}</span>
      :
      null
      }
      </div>
      <div className="login__children">
      <h3 className="login__heading login__heading_child">Дети</h3>
      {childForm.map((elem, i) => {
        return (
      elem.firstName ?
      (<span className="login__parent login__parent_child" key={i}>
        {elem.firstName}, {elem.age}
        </span>)
        :
        null
       )
      })
      }
      </div>
    </div>
    )
  );
}

export default Profile;