import React from "react";

import './Profile.css'

import ProfileIcon from "./avatar.jpg";

const Profile = () => {
  return (
    <div className="profile-icons-container">
      {/* <img src={YouTubeLogo} alt="youtube logo" style={{ width: "100px" }} /> */}
      <img src={ProfileIcon} alt="youtube logo" style={{ width: "50px" }} />
    </div>
  );
};

export default Profile;
