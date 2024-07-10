import React, { useEffect, useState } from "react";

import user from "../images/man.png";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ContactDetail = ({ getContactById }) => {
  const { id } = useParams();

  const [contact, setContact] = useState({
    name: " loading name...",
    email: "loading email...",
  });

  console.log("id through params :", id);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 750));
        const contactData = await getContactById(id);
        setContact(contactData);
        console.log("contact : ", contact);
      } catch (error) {
        console.error("Error while fetching the contact data", error);
      }
    };
    fetchContact();
  }, [getContactById, id]);

  if (!contact) {
    return <div>Loading...</div>; // or some other loading indicator
  }

  const { name, email } = contact;

  return (
    <div style={{ marginTop: "30px" }} className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">Name: {name}</div>
          <div className="desc">Email: {email}</div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Link to="/">
          <button className="ui button blue">Back to Contact List</button>
        </Link>
      </div>
    </div>
  );
};

export default ContactDetail;
