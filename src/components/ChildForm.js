import React from 'react';

function ChildForm({ elem, deleteChildForm, handleInputChange, i }) {

    const handleDelete = (e) => {
        e.preventDefault();
        deleteChildForm(i);
      }
      
    return (
        (
            <div className="children__form" id={elem}>
                <div className="children__name">
                    <p className="login__pole">Имя</p>
                    <input type="text"
                        name="firstName"
                        onChange={e => handleInputChange(e, i)}
                        value={elem.firstName}
                        className="login__input login__input_email"
                        minLength="2" maxLength="30" required />
                </div>
                <div className="children__age">
                    <p className="login__pole">Возраст</p>
                    <input type="number" min="1" max="200"
                        name="age"
                        onChange={e => handleInputChange(e, i)}
                        value={elem.age}
                        className="login__input login__input_password"
                        minLength="2" required />
                </div>
                <button onClick={handleDelete} className="children__delete">Удалить</button>
            </div>)
          );
}
export default ChildForm;