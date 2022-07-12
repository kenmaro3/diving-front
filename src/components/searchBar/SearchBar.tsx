import React, { FC, useState } from "react";
import "./searchbar.scss";
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import { useNavigate } from "react-router-dom";

interface SearchBarProps {
  placeholder: string;
  isMobile: boolean;
}



const SearchBar: FC<SearchBarProps> = ({ placeholder, isMobile}) => {
  const [filteredData, setFilteredData] = useState([]);
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate()

  const searchClicked = () => {
    console.log('clicked!!!')
    navigate(`/search?q=${keyword}`)

  }



  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchWord = event.target.value;
    setKeyword(searchWord);
    console.log("input", keyword)
    // const newFilter = data.filter((value) => {
    //   return value.title.toLowerCase().includes(searchWord.toLowerCase());
    // });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData([]);
      //   setFilteredData(newFilter);
    }
  };


  return (
      <div className={`${isMobile ? "searchBarContainerMobile" : "searchBarContainer"}`}>
        <input
          type="text"
          placeholder={placeholder}
          value={keyword}
          onChange={handleFilter}
        />

        <button className="searchButton" onClick={() => searchClicked()}>検索</button>
        {/* <IconButton onClick={searchClicked} className="searchIcon">
            <SearchIcon />
        </IconButton> */}
      </div>
  );
}

export default SearchBar;