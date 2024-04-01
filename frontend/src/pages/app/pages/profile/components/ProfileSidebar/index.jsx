import React, { useState } from 'react';
import './styles.css';

import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

function ProfileSidebar() {
  const [imgSrc, setImgSrc] = useState('');
  const [togglePopup, setTogglePopup] = useState(false);

  const handleAddingImage = () => {};

  return (
    <div className="profile_sidebar">
      <div className="profile_img_container">
        <img className="profile_img" src={imgSrc} alt="" />

        {!imgSrc && <AddAPhotoIcon className="custom_add_img_icon" onClick={() => setTogglePopup(true)} />}

        <Popup />
      </div>
    </div>
  );
}

function Popup() {
  return (
    <form className="popup_img">
      <h3>Add Image src:</h3>
      <input type="text" required />
      <div>
        <button className="img_btn img_btn_submit" type="submit">
          Submit changes
        </button>
        <button className="img_btn img_btn_cancel" type="cancel">
          Cancel
        </button>
      </div>
    </form>
  );
}

export default ProfileSidebar;
