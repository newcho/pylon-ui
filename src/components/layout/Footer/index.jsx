import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faChevronDown } from "@fortawesome/free-solid-svg-icons";

import MailchimpSubscribe from "react-mailchimp-subscribe";

import "./styles.scss";

// const url = process.env.REACT_APP_MAILCHIMP_URL;

// const CustomForm = ({ onValidated }) => {
//   let email;
//   const submit = () =>
//     email &&
//     email.value.indexOf("@") > -1 &&
//     onValidated({
//       EMAIL: email.value
//     });

//   return (
//     <div className="subscription-sender-wrapper">
//       <input
//         ref={node => (email = node)}
//         type="text" />
//       <div className="subscribe-send" role="button" onClick={submit}>
//         <FontAwesomeIcon icon={faPaperPlane}/>
//       </div>
//       {/* {status === "success" && (<p>Success!</p>)} */}
//     </div>
//   );
// };

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <hr className="line" />
        <div className="footer-wrapper">
          <a
            href="https://t.me/pylonfinance"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={require("../../../assets/images/telegram.png")} alt="" />
          </a>
          <a
            href="https://twitter.com/Pylonfinance"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={require("../../../assets/images/twitter.png")} alt="" />
          </a>
          <a
            href="https://discord.gg/m5zSFsA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={require("../../../assets/images/discord.png")} alt="" />
          </a>
          {/* <div className="logo-wrapper">
            <Link className="footer-logo" to="/home">
              <img
                className="footer-logo-img"
                src={require("../../../assets/images/pylon.png")}
                alt="pylon - new"
              />
              <span>
                PYLON
                <br />
                FINANCE
              </span>
            </Link>
          </div>
          <div className="link-wrapper">
            <h3 className="caption">Links</h3>
            <Link className="link" to="/">
              Home
            </Link>
            <Link className="link" to="/">
              Services
            </Link>
            <Link className="link" to="/">
              About Us
            </Link>
            <Link className="link" to="/">
              News
            </Link>
            <Link className="link" to="/">
              Career
            </Link>
            <Link className="link" to="/">
              Blog
            </Link>
            <Link className="link" to="/">
              Team
            </Link>
            <Link className="link" to="/">
              Contact Us
            </Link>
          </div>
          <div className="subscription-wrapper">
            <h3>Subscribe Us</h3>
            <span>Enter Email</span>
              <MailchimpSubscribe
                url={url}
                render={({ subscribe }) => (
                  <CustomForm
                    onValidated={formData => subscribe(formData)}
                  />
                )}
              />
          </div> */}
        </div>
        <div className="social-wrapper"></div>
        <div className="footer-address">
          {/* <span className="address">
            456 California Street, San Francisco, CA 75395
          </span> */}
          <div>©2020 Pylon Finance, Inc.</div>
        </div>
      </footer>
    </>
  );
}
