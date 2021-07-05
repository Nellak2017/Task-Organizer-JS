import { useState } from "react";
import {
    SearchInputs,
    Search,
    SearchIconClassContainer,
    DataResult,
    DataItem,
} from './SearchBar.elements.js';
import { IconContext } from 'react-icons/lib';
import * as BiIcons from 'react-icons/bi';
import CloseIcon from "@material-ui/icons/Close";

// TODO: Fix the Search result box Style Errors
// TODO: Fix the bug where you can't X out if the search is not in the DB
// TODO: Get rid of the small x in the right side of the search result

const SearchBar = ({ placeholder, data }) => {

    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
        });
        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    };

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    };

    return (
        <IconContext.Provider value={{ color: '#fff', size: '2rem' }}>
            <Search>
                <SearchInputs>
                    <SearchIconClassContainer className="searchicon" >
                        {filteredData.length === 0 ? (
                            <BiIcons.BiSearch className="searchicon" />
                        ) : (
                            <CloseIcon onClick={clearInput} className="clearBtn" />
                        )}
                    </SearchIconClassContainer>
                    <input
                        type="search"
                        placeholder={placeholder}
                        value={wordEntered}
                        onChange={handleFilter}
                    />
                    {filteredData.length !== 0 && (
                        <DataResult>
                            {filteredData.slice(0, 15).map((value, key) => {
                                return (
                                    <DataItem className="dataItem" href={value.link} target="_blank">
                                        <p>{value.title}</p>
                                    </DataItem>
                                );
                            }
                            )}
                        </DataResult>
                    )}
                </SearchInputs>
            </Search>
        </IconContext.Provider>
    );
}

export default SearchBar;