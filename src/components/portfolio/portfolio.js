import React, { useEffect, useState } from "react";
import "./PFolio.css";
import images from "./data";
import styled from "styled-components";

let newDate = new Date();
let date = newDate.getDate();
let month = newDate.getMonth() + 1;
let year = newDate.getFullYear();

const ImageCard = styled.div`
  position: relative;
  z-index: 100;
  margin: 1.5vw;
  border-radius: 5px;
  background: white;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 3px 2px;
`;

function PFolio() {
  const [tag, setTag] = useState("Show all");
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    tag === "Show all"
      ? setFilteredImages(images)
      : setFilteredImages(images.filter((image) => image.tag.includes(tag)));
  }, [tag]);

  return (
    <div id="big__section">
      <div className="tags">
        <div className="tagcont">
          <TagButton
            className="tagbtn"
            name="React Project"
            tagActive={tag === "React" ? true : false}
            handleSetTag={setTag}
          />
          <TagButton
            className="tagbtn"
            name="React-Redux"
            tagActive={tag === "React-Native" ? true : false}
            handleSetTag={setTag}
          />
          <TagButton
            className="tagbtn"
            name="Show all"
            tagActive={tag === "Show all" ? true : false}
            handleSetTag={setTag}
          />
          <TagButton
            className="tagbtn"
            name="FireBase"
            tagActive={tag === "FireBase" ? true : false}
            handleSetTag={setTag}
          />
          <TagButton
            className="tagbtn"
            name="Latest Job"
            tagActive={tag === "Latest Job" ? true : false}
            handleSetTag={setTag}
          />
        </div>
      </div>
      <div className="PFcontainer">
        {filteredImages.map((image) => (
          <>
            <a href={`${image.imageLink}`}>
              <ImageCard className="imageCard">
                <img
                  className="image"
                  src={`/images/${image.imageName}`}
                  alt=""
                />
                <div
                  style={{
                    color: "red",
                  }}
                >{`${image.imageText}`}</div>
              </ImageCard>
            </a>
          </>
        ))}
      </div>
    </div>
  );
}

const TagButton = ({ name, handleSetTag, tagActive }) => {
  return (
    <button
      className={`tag ${tagActive ? "active" : null}`}
      onClick={() => handleSetTag(name)}
    >
      {name.toUpperCase()}
    </button>
  );
};

export default PFolio;
