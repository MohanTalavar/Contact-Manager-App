import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddContact = ({ addContactHandler }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const navigate = useNavigate();

  const add = (e) => {
    e.preventDefault();

    addContactHandler(formData);
    setFormData({
      name: "",
      email: "",
    });
    navigate("/");
  };

  const handleInputChange = (e) => {
    const { value, id } = e.target;
    console.log("Value : ", value, " id : ", id);
    setFormData({ ...formData, [id]: value });
    // the[id] is dynamic it may be name, or email depending on the user what he is changing
  };

  return (
    <div className="ui main">
      <h2>Add Contact</h2>
      <form className="ui form" onSubmit={add}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
            value={formData?.name}
            onChange={handleInputChange}
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
            value={formData?.email}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="ui button blue">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddContact;
