import React from 'react';
import ChildForm from './ChildForm';

function Main({
  handleChange,
  formData,
  validData,
  handleSubmit
}) {

  return (
    (<main className="content section">
      <div className="login__container">
        <h3 className="login__heading">Персональные данные</h3>
        <form name="auth__form" className="login__form"
          onSubmit={handleSubmit}
          noValidate>
          <p className="login__pole">Имя</p>
          <input type="text"
            name="name"
            // onChange={handleChange}
            // value={formData.name}
            className="login__input login__input_email"
            minLength="2" maxLength="30" required />
          <p className="login__pole">Возраст</p>
          <input type="text"
            name="age"
            // onChange={handleChange}
            // value={formData.password}
            className="login__input login__input_password"
            minLength="2" required />
          {/* {validData ?
                  <button type="submit" className="login__save_active" >Войти</button>
                      :
                  <button type="submit" className="login__save" disabled>Войти</button>
                  } */}
          <div className="children__container section">
            <div className="children__heading">
              <h3 className="children__title">Дети (макс. 5)</h3>
              <button className="children__add" >&#10010; Добавить ребенка</button>
            </div>
          </div>
          <ChildForm />
        </form>
        <button className="login__save" >Сохранить</button>
      </div>
    </main >
    )
  );
}

export default Main;