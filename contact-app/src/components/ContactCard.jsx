import React from "react";
import user from "../images/user.png";
import { useNavigate } from "react-router-dom";

const ContactCard = ({ contact, removeContactHandler }) => {
  const navigate = useNavigate();
  const { id, name, email } = contact;
  console.log("in contact card || id is : ", id);

  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content ">
        <div
          style={{ cursor: "pointer" }}
          onClick={() => navigate(`contact/${id}`)}
        >
          <div className="header">{name}</div>
          <div>{email}</div>
        </div>
      </div>
      {/* Delete Button */}
      <div>
        <i
          className="trash alternate outline icon right floated"
          style={{
            color: "red",
            marginTop: "7px",
            marginLeft: "15px",
            cursor: "pointer",
          }}
          onClick={() => removeContactHandler(id)}
        />
      </div>
      {/* Update Button */}
      <div onClick={() => navigate(`/edit/${id}`)}>
        <i
          className="edit alternate outline icon right floated"
          style={{ color: "blue", marginTop: "7px", cursor: "pointer" }}
        />
      </div>
    </div>
  );
};

export default ContactCard;
