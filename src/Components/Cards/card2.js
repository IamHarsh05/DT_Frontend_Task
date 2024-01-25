import React from "react";
import "./card.css";

export default function Card2() {
  return (
    <div className="card">
      <div className="cardtitlediv">
        <p className="cardtitle">Technical Project Management</p>
      </div>
      <div className="carddisc">
        <span>Description:</span> Watch the video and threadbuild, and jot out
        key threads while watching the video
      </div>
      <div className="inputs">
        <div className="thread">
          <div className="threadTitle">
            <p>Sub thread 1</p>
          </div>
          <div className="message">
            <textarea placeholder="Enter text here" />
          </div>
        </div>
        <div className="thread">
          <div className="threadTitle">
            <p>Sub thread 1</p>
          </div>
          <div className="message">
            <textarea placeholder="Enter text here" />
          </div>
        </div>
      </div>
      <div className="buttons">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="118"
            height="20"
            viewBox="0 0 118 20"
            fill="none"
          >
            <path
              d="M4.2236 19C4.2236 19.5 4.64596 20 5.2795 20H9.50311C10.1366 20 10.559 19.5 10.559 19V18H4.2236V19ZM7.3913 0C3.27329 0 0 3.1 0 7C0 9.4 1.26708 11.5 3.1677 12.7V15C3.1677 15.5 3.59006 16 4.2236 16H10.559C11.1925 16 11.6149 15.5 11.6149 15V12.7C13.5155 11.4 14.7826 9.3 14.7826 7C14.7826 3.1 11.5093 0 7.3913 0Z"
              fill="#323232"
            />
            <path
              d="M49.7727 2C49.7727 0.9 48.8382 0 47.6832 0H30.8832C29.7282 0 28.7832 0.9 28.7832 2V14C28.7832 15.1 29.7282 16 30.8832 16H45.5832L49.7832 20L49.7727 2ZM45.5832 12H32.9832V10H45.5832V12ZM45.5832 9H32.9832V7H45.5832V9ZM45.5832 6H32.9832V4H45.5832V6Z"
              fill="#323232"
            />
            <path
              d="M82.4499 0H66.1165C64.8215 0 63.7832 0.857143 63.7832 1.90476V15.2381C63.7832 16.2857 64.8215 17.1429 66.1165 17.1429H70.7832L74.2832 20L77.7832 17.1429H82.4499C83.7332 17.1429 84.7832 16.2857 84.7832 15.2381V1.90476C84.7832 0.857143 83.7332 0 82.4499 0ZM75.4499 15.2381H73.1165V13.3333H75.4499V15.2381ZM77.8649 7.85714L76.8148 8.73338C75.9748 9.42861 75.4499 10 75.4499 11.4286H73.1165V10.9524C73.1165 9.90476 73.6414 8.95242 74.4814 8.25718L75.9281 7.05718C76.3598 6.71432 76.6165 6.2381 76.6165 5.71429C76.6165 4.66667 75.5665 3.80952 74.2832 3.80952C72.9999 3.80952 71.9499 4.66667 71.9499 5.71429H69.6165C69.6165 3.60952 71.7049 1.90476 74.2832 1.90476C76.8615 1.90476 78.9499 3.60952 78.9499 5.71429C78.9499 6.55238 78.5299 7.31429 77.8649 7.85714Z"
              fill="#323232"
            />
            <path
              d="M111.404 7.867C111.236 5.356 110.179 2.908 108.195 1C106.193 2.926 105.089 5.374 104.874 7.867C106.071 8.479 107.175 9.27101 108.139 10.234C109.103 9.28001 110.207 8.488 111.404 7.867ZM105.323 10.252C105.192 10.162 105.042 10.081 104.902 9.99099C105.042 10.09 105.192 10.162 105.323 10.252ZM111.329 10.027C111.208 10.108 111.077 10.171 110.955 10.261C111.077 10.171 111.208 10.108 111.329 10.027ZM108.139 13.105C106.128 10.153 102.694 8.2 98.7832 8.2C98.7832 12.988 101.927 17.038 106.296 18.541C106.885 18.748 107.503 18.901 108.139 19C108.775 18.892 109.384 18.739 109.982 18.541C114.351 17.038 117.495 12.988 117.495 8.2C113.584 8.2 110.15 10.153 108.139 13.105Z"
              fill="#323232"
            />
          </svg>
        </div>
        <button className="btn">Select Categ</button>
        <button className="btn">Select Proces</button>
      </div>
      <div className="thread">
        <div className="threadTitle">
          <p>Sub thread 1</p>
        </div>
        <div className="message">
          <textarea placeholder="Enter text here" />
        </div>
      </div>
    </div>
  );
}
