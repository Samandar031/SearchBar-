import React from "react";
import SearchBar from "./SearchBar";

const ImageList = () => {
  return (
    <button
      onChange={function () {
        console.log(
          <div>
            <SearchBar />
          </div>
        );
      }}
    >
      Click
    </button>
  );
};

export default ImageList;
