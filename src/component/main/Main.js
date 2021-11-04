import React from "react";
import "./Main.css";
import Search from "./search/Search";
import SearchResultSection from "./search/searchResults/SearchResultSection";
import { useSelector } from "react-redux";

const Main = () => {
  const isResultAvaiable = useSelector(
    (state) => state.searchResult.isResultAvaiable
  );

  return (
    <>
      <div className="section-first">
        <div className="background-setter">
          <div className="search-div">
            <Search />
          </div>
        </div>
      </div>
      {isResultAvaiable && (
        <div className="search-result">
          <SearchResultSection />
        </div>
      )}
    </>
  );
};

export default Main;
