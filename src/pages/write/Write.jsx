import React, { useState } from "react";
import "./write.css";

export default function Write() {
  const [imageFile, setImageFile] = useState(null);

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    setImageFile(URL.createObjectURL(file));
  };

  return (
    <div className="write">
      <img
        src={
          imageFile ||
          "https://images.pexels.com/photos/5926389/pexels-photo-5926389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
        alt=""
        className="writeImg"
      />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
          </label>
          <input
            type="text"
            id="title"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell Your Story..."
            type="text"
            id="desc"
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
}
