import React from 'react';
import ChildForm from './ChildForm';

function Main({
  handleSubmit,
  childForm,
  setChildForm,
  addChildForm,
  deleteChildForm,
  handleInputChange,
  handleParentChange,
  parentForm,
  submitForm
}) {

  
  return (
    (<main className="content section">
      <div className="login__container">
        <h3 className="login__heading">Персональные данные</h3>
        <form name="auth__form" className="login__form"
          onSubmit={handleSubmit}>
          <p className="login__pole">Имя</p>
          <input type="text"
            name="nameParent"
            onChange={handleParentChange}
            value={parentForm.nameParent || ''}
            className="login__input login__input_email"
            minLength="2" maxLength="30" required />
          <p className="login__pole">Возраст</p>
          <input type="number" min="1" max="200"
            name="ageParent"
            onChange={handleParentChange}
            value={parentForm.ageParent || ''}
            className="login__input login__input_password"
            minLength="2" maxLength="200" required />
          <div className="children__container section">
            <div className="children__heading">
              <h3 className="children__title">Дети (макс. 5)</h3>
              {childForm.length < 5 ?
                <button onClick={addChildForm} className="children__add" >&#10010; Добавить ребенка</button>
               :
                <span></span>
              } 
            </div>
          </div>
          {childForm ? 
            (childForm.map((elem, i) =>
              <ChildForm key={i}
                i={i}
                elem={elem}
                setChildForm={setChildForm}
                childForm={childForm}
                deleteChildForm={deleteChildForm}
                handleInputChange={handleInputChange}
                />
            ))
            :
            <p></p>
          }
        </form>
        <button onClick={submitForm} className="login__save" >Сохранить</button>
      </div>
    </main >
    )
  );
}

export default Main;