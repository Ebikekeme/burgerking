import React from "react";



export const footer = () =>{
    return(
        <div className="footer-container">
            <footer>
      <p>&copy; 2023 Burger King. All Rights Reserved.</p>
      <ul>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms of Service</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
      <div   
 className="social-media">
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
      </div>   

    </footer>
        </div>
    )
}