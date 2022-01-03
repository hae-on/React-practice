import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import Youtube from "./service/youtube";
import CardRepository from "../../card-maker/src/service/card_repository";

const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY);
const cardRepository = new CardRepository();

ReactDOM.render(
  <React.StrictMode>
    <App youtube={youtube} cardRepository={cardRepository} />
  </React.StrictMode>,
  document.getElementById("root")
);
