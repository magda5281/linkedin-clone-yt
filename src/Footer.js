import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <small>
        This project is coded by{" "}
        <a
          href="https://www.linkedin.com/in/magdalena-gozdalik/"
          rel="noreferrer"
        >
          Magda Gozdalik{" "}
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/magda5281/linkedin-clone"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          open-sourced on GitHub{" "}
        </a>
        and hosted on{" "}
        <a
          href="https://linkedin-clone-yt-3da92.web.app"
          target="_blank"
          rel="noreferrer"
        >
          Firebase
        </a>
        .
      </small>
    </div>
  );
}

export default Footer;
