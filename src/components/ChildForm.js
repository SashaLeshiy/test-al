import React from 'react';
import { useSelector } from "react-redux";

function ChildForm() {

    return (
        (
            <div className="children__form">
                <div className="children__name">
                    <p className="login__pole">Имя</p>
                    <input type="text"
                        name="name"
                        // onChange={handleChange}
                        // value={formData.name}
                        className="login__input login__input_email"
                        minLength="2" maxLength="30" required />
                </div>
                <div className="children__age">
                    <p className="login__pole">Возраст</p>
                    <input type="text"
                        name="age"
                        // onChange={handleChange}
                        // value={formData.password}
                        className="login__input login__input_password"
                        minLength="2" required />
                </div>
                <button className="children__delete">Удалить</button>
            </div>)
    );
}
export default ChildForm;