import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import api from "../api/contacts";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import Header from "./Header";
import ContactDetail from "./ContactDetail";
import EditContact from "./EditContact";
import Footer from "./Footer";
import { SearchBar } from "./searchBar";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);

  //this is with the help of the json server which we have set up in server-api module
  // and the data is fetching fromt the db.json file
  // we are fetching this data with help of AXIOS
  const retriveContacts = async () => {
    try {
      const response = await api.get("/contacts");
      return response.data;
    } catch (error) {
      console.error("Error in retriveContacts: ", error.message);
    }
  };

  const addContactHandler = async (contact) => {
    try {
      const request = {
        id: uuidv4(),
        ...contact,
      };
      const response = await api.post("/contacts", request);
      console.log("API", api);
      console.log(response);
      setContacts([...contacts, response.data]);
    } catch (error) {
      console.error("Error in addContactHandler: ", error.message);
    }
  };

  const updateContactHandler = async (contact) => {
    try {
      const response = await api.put(`/contacts/${contact.id}`, contact);
      console.log("from api", response.data);

      const updatedContactList = [...contacts].map((e) =>
        e.id === contact.id ? contact : e
      );
      setContacts(updatedContactList);
    } catch (error) {
      console.error("Error updating contact:", error);
    }
  };

  const removeContactHandler = async (id) => {
    try {
      await api.delete(`/contacts/${id}`);
      const newContactList = contacts.filter((contact) => {
        return contact.id !== id;
      });

      setContacts(newContactList);
    } catch (error) {
      console.error("Error in removeContactHandler: ", error.message);
    }
  };

  const getContactById = async (id) => {
    try {
      const resp = await api.get(`/contacts/${id}`);
      console.log("in app.js || returning contact by id : ", resp.data);
      return resp.data;
    } catch (error) {
      console.error("Error while getting the contact by id :", id);
    }
  };

  useEffect(() => {
    console.log("in useEffect getAllContacts");
    const getAllContacts = async () => {
      const allContacts = await retriveContacts();
      if (allContacts) {
        setContacts(allContacts);
        setFilteredContacts(allContacts);
      }
    };
    getAllContacts();
  }, []);

  const handleSearch = (e) => {
    try {
      const searchField = e.target.value.toLowerCase();
      setFilteredContacts(
        contacts.filter((contact) => {
          return contact.name.toLowerCase().includes(searchField);
        })
      );
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="ui container">
      <Router>
        <Header></Header>
        {/* <SearchBar handleSearch={handleSearch} /> */}
        <Routes>
          <Route
            path="/"
            element={
              <ContactList
                contacts={contacts}
                removeContactHandler={removeContactHandler}
              />
            }
          />

          <Route
            path="/add"
            element={<AddContact addContactHandler={addContactHandler} />}
          />
          <Route
            path="/contact/:id"
            element={<ContactDetail getContactById={getContactById} />}
          />

          <Route
            path="/edit/:id1"
            element={
              <EditContact
                updateContactHandler={updateContactHandler}
                contacts={contacts}
                getContactById={getContactById}
              />
            }
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
