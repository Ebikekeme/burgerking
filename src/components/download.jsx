import React from "react";
import phone from "../assets/phone.png";
import Playstore from "../assets/PlayStore.jpg";
import Appstore from "../assets/AppStore.jpg";

export const Download = () => {
return(
    <>
    <div className="download-container">
        <div className="download-content">
            <img src={phone}alt="a phone showing the bk advert" 
            width={"100%"}
            />
               

        </div>
        <div className="download-content-2">
          <div className="download-content-2a">
            <h2>
              Download our app and discover the incredible offers we have for
              you!
            </h2>
          </div>

          <div className="download-content-3">
            <img
              src={Playstore}
              alt="PlayStore"
              width={"30%"}
              style={{ marginRight: "2rem" }}
            />
            <img src={Appstore} alt="AppStore" width={"30%"} />
          </div>

          <p>
            Apple and the Apple logo are trademarks of Apple Inc., registered in
            the US and other countries. App Store is a service mark of Apple
            Inc. Google Play is a trademark of Google Inc. Terms and Conditions
            apply.
          </p>
        </div>
      </div>
      </>
    
)
}
