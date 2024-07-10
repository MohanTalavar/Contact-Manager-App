import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

// instead of props and then props.contact & props.removeContactHandler
// Destructure it and directly use the varibles passed from parent component
const ContactList = ({ contacts, removeContactHandler }) => {
  const renderContactList = contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        removeContactHandler={removeContactHandler}
        key={contact.id}
      ></ContactCard>
    );
  });

  return (
    <div className="main">
      <h2>Contact List</h2>
      {/* Add Contact Button */}
      <Link to="/add">
        <button className="ui button blue right floated">Add Contact</button>
      </Link>
      {/* List Rendering */}
      <div className="ui celled list" style={{ clear: "both" }}>
        {renderContactList}
      </div>
    </div>
  );
};

export default ContactList;
