import React, { useEffect, useState } from 'react';
import { useUser } from '../../../..';
import './styles.css';

import Overlay from '../../../../../../components/Overlay';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

function ProfileSidebar() {
  const userData = useUser();
  const { coins, email, name } = userData.user;

  const [imgSrc, setImgSrc] = useState('');
  const [togglePopup, setTogglePopup] = useState(false);

  const handleAddingImage = (src) => {
    setImgSrc(src);
    setTogglePopup(false);
  };

  const handleTogglePopup = () => {
    setTogglePopup(!togglePopup);
  };

  return (
    <div className="profile_sidebar">
      <div className="profile_img_container">
        {imgSrc ? <img className="profile_img" src={imgSrc} alt="" /> : <AddAPhotoIcon className="custom_add_img_icon" onClick={handleTogglePopup} />}

        {togglePopup && (
          <div>
            <Popup onTogglePopup={handleTogglePopup} onAddImage={handleAddingImage} />
            <Overlay />
          </div>
        )}
      </div>

      <div className="user_data_container">
        <UserInfos name={name} email={email} />
        <UserCoins coins={coins} />
      </div>
    </div>
  );
}

function UserCoins({ coins }) {
  return (
    <>
      <div className=" total_coins_container">
        <span>Total Coins</span>
        <span>{coins}</span>
      </div>

      <div className="flex request_coin_container">
        <input type="number" placeholder="Request Coins" min={0} />
        <span className="request_coin_arrow">&rarr;</span>
      </div>
    </>
  );
}

function UserInfos({ name, email }) {
  return (
    <div className="user_infos_container">
      <fieldset className="flex justfiy-between">
        <label>Name: </label>
        <p>{name}</p>
      </fieldset>

      <fieldset className="flex justfiy-between">
        <label>email: </label>
        <p>{email}</p>
      </fieldset>
    </div>
  );
}

function Popup({ onTogglePopup, onAddImage }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddImage(inputValue);
  };

  return (
    <form className="popup_img flex column" onSubmit={handleSubmit}>
      <h4>Add Image src:</h4>
      <input type="text" required value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
      <div className="flex popup_btns">
        <button className="img_btn img_btn_submit" type="submit">
          Submit
        </button>
        <button onClick={onTogglePopup} className="img_btn img_btn_cancel" type="button">
          Cancel
        </button>
      </div>
    </form>
  );
}

export default ProfileSidebar;
