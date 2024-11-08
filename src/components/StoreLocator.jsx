import { FaPaperPlane } from "react-icons/fa";
import React, { useState } from "react";
import bkpicklemask from "../assets/bkpicklemask.png";

const StoreLocator = () => {
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Searching for:", address);
  };
  return (
    <>
      <div className="store-locator">
        <div className="store-locator-container">
          <div className="store-locator-content">
            <h2>Store locator</h2>
            <p>Find a location nearby</p>

            <form onSubmit={handleSubmit} className="search-form">
              <input
                type="text"
                placeholder="Your address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="search-input"
              />
              <button type="submit" className="search-button">
                {/* <Search size={24} /> */}
                <FaPaperPlane size={24} />
              </button>
            </form>
          </div>

          <div className="illustration">
            <div className="character">
              <img src={bkpicklemask} alt="a face someone" width={"50%"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default StoreLocator;