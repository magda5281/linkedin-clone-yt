import React from "react";
import InfoIcon from "@material-ui/icons/Info";
import "./Widgets.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
  const newsArticles = (heading, subtitle) => {
    return (
      <div className="widgets__newsArticle ">
        <div className="widgets__ArticleLeft">
          <FiberManualRecordIcon />
        </div>
        <div className="widgets__ArticleRight">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticles("Magda is learning Redux", "It is coming on nicely...")}
      {newsArticles("Magda is learnign React", "It is awsome...")}
      {newsArticles(
        "Magda is learning Javascript",
        "It is base for everything ..."
      )}
      {newsArticles("Flip Move is outdated", "Need to look for alternative...")}
      {newsArticles("Refactor CSS", "Need to look at responsive design...")}
      {newsArticles("dotenv in react ", "It is giving trouble ...")}
      {newsArticles("Tomorrow's a new day", "Let's see what it brings...")}
    </div>
  );
}

export default Widgets;
