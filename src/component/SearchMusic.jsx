import Search from "antd/es/input/Search";
import React from "react";
const SearchMusic = () => {
  return (
    <div>
      <Search
        placeholder="input search text"
        enterButton="Search"
        size="large"
        // suffix={suffix}
        // onSearch={onSearch}
      />
    </div>
  );
};

export default SearchMusic;
