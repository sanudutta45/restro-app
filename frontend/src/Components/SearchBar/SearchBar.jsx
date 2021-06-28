import React, { useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//scss
import SearchBarStyle from "./SearchBar.module.scss";

const SearchBar = ({ onChange }) => {
  const [focused, setFocused] = useState(false);
  const [text, setText] = useState("");

  return (
    <div
      className={`${SearchBarStyle.inputOuterWrapper} ${
        focused && SearchBarStyle.focus
      }`}
    >
      <div className={SearchBarStyle.iconWrapper}>
        <FontAwesomeIcon
          icon={faSearch}
          size="2x"
          className={SearchBarStyle.icon}
        />
      </div>
      <div className={SearchBarStyle.inputWrapper}>
        <input
          className={SearchBarStyle.ssInput}
          type="text"
          name="search_bar"
          placeholder="Seach Restaurent"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            onChange(e.target.value);
          }}
          onFocus={() => setFocused(true)}
          onBlur={() => text === "" && setFocused(false)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
