import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/contacts";

const EditContact = ({ contacts, updateContactHandler, getContactById }) => {
  console.log("contacts", contacts);
  const { id1 } = useParams();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    id: "",
    name: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const contactData = await getContactById(id1);
        setFormData(contactData);
      } catch (error) {
        console.error("Error while fetching the data", error);
      }
    };

    fetchData();
  }, [getContactById, id1]);

  const { name, email } = formData;

  const update = async (e) => {
    e.preventDefault();
    updateContactHandler(formData);

    setFormData({
      email: "",
      id: "",
      name: "",
    });
    navigate("/");
  };

  const hadnleInputChange = (e) => {
    const { value, id } = e.target;
    console.log("VALUE", value, "id", id);
    setFormData({ ...formData, [id]: value });
    // the[id] is dynamic it may be name, or email depending on the user what he is changing
  };

  return (
    <div className="ui main">
      <h2>Update your contact details</h2>

      <form className="ui form" onSubmit={update}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
            value={name}
            onChange={hadnleInputChange}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="abc@gmail.com"
            required
            value={email}
            onChange={hadnleInputChange}
          />
        </div>
        <button type="submit" className="ui button blue">
          Update
        </button>
      </form>
    </div>
  );
};

export default EditContact;
