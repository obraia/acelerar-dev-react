import React, { useState, useEffect } from 'react';

import './App.scss';

import Topbar from './components/Topbar';
import Filters from './components/Filters';
import Contacts from './components/Contacts';

function App() {

  const [contactList, setContactList] = useState([]);
  const [defaultContactList, setDefaultContactList] = useState([]);

  useEffect(() => {
    function getContacts() {
      fetch('https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts', { method: 'get' })
        .then(res => {
          res.json().then((data) => {
            setContactList([...data]);
            setDefaultContactList([...data]);
          });
        })
        .catch(err => {
          console.error(err);
        });
    }
    getContacts();
  }, []);

  function handleOrder(by) {
    setContactList([...contactList.sort((c1, c2) => c1[by].localeCompare(c2[by]))]);
  }

  function handleFilter(value) {
    setContactList(defaultContactList.filter(c => c.name.toLowerCase().includes(value.toLowerCase())));
  }

  return (
    <>
      <Topbar />
      <Filters onClickButton={handleOrder} onChangeInput={handleFilter} />
      <Contacts contactList={contactList} />
    </>
  )
}

export default App;
