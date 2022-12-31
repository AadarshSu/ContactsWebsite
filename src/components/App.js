import React, { useState, useEffect } from "react";
import {BrowserRouter, BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { v4 as uuid } from "uuid";
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  // contacts array manipulated by addNewContacts method
  const [contacts, addNewContacts] = useState(
    !localStorage.getItem(LOCAL_STORAGE_KEY)
      ? []
      : JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  );
  // get contacts and add them from the AddContact component using handler
  const addContactHandler = (contact) => {
    console.log(contact);
    addNewContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    addNewContacts(newContactList);
  }

  // gets contacts from local storage everytime page is refreshed
  useEffect(() => {
    const getContactsFromLocalStorage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    addNewContacts(getContactsFromLocalStorage);
  }, []);

  // store contacts in local storage so they don't disappear on refresh
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Routes>
          <Route path="/add" element={<AddContact addContactHandler={addContactHandler}/>} />
          <Route path="/" element={<ContactList contacts={contacts} getContactID={removeContactHandler}/>} />
        </Routes>

        {/*<AddContact addContactHandler={addContactHandler}/>
        <ContactList contacts={contacts} getContactID={removeContactHandler}/>*/}
      </Router>
    </div>
  );
}

export default App;
