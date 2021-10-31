import React, { useState } from 'react';
import { Route, useHistory, Switch } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Preview from './Preview';
import Error404 from './Error404';

function App() {

  const history = useHistory()
  const [parentForm, setParentForm] = useState([{parentName: "", ageParent: ""}]);
  const [childForm, setChildForm] = useState([]);

  const handleInputChange = (e, i) => {
    const { name, value } = e.target;
    const list = [...childForm];
    list[i][name] = value;
    setChildForm(list);
  }

  const handleParentChange = (e) => {
    const { name, value } = e.target;
    setParentForm({...parentForm, [name]: value});
  }

  const addChildForm = (e) => {
    e.preventDefault();
      setChildForm([...childForm, {firstName: "", age: ""} ]);
  }

  const deleteChildForm = (index) => {
    const list = [...childForm];
    list.splice(index, 1);
    setChildForm(list);
  }

  const submitForm = (e) => {
    e.preventDefault();
    history.push('/preview');
  }

  function goForm() {
    history.push('/');
  }

  function goPreview() {
    history.push('/preview');
  }

  return (
    <div className="page">
      <div className="page__container">
        <Header goForm={goForm} goPreview={goPreview} />
        <Switch >
          <Route exact path="/preview">
            <Preview childForm={childForm} parentForm={parentForm} />
          </Route>
          <Route exact path="/">
            <Main
              childForm={childForm}
              setChildForm={setChildForm}
              addChildForm={addChildForm}
              deleteChildForm={deleteChildForm}
              handleInputChange={handleInputChange}
              handleParentChange={handleParentChange}
              parentForm={parentForm}
              submitForm={submitForm}
            />
          </Route>
          <Route path="/*" >
            <Error404 />
          </Route>
        </Switch>
        <Footer />
      </div>
    </div>
  );
}

export default App;