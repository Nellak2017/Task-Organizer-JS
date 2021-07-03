import { useState } from "react";
import {
    SearchInputs,
    Search,
    SearchIconClassContainer,
    SearchIconClass,
    DataResult,
    DataItem,
    ClearBtn
} from './SearchBar.elements.js';
import * as BiIcons from 'react-icons/bi';
import CloseIcon from "@material-ui/icons/Close";


//TODO: Clean up the code 
//TODO: Make the Box appear below
//TODO: Make the icons the correct size
//TODO: Add the icon context 
//TODO: When you get your real DB up and running, connect search to this

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
        <Search>
            <SearchInputs>
                <SearchIconClassContainer className="searchicon" >
                    {filteredData.length === 0 ? (
                        <BiIcons.BiSearch className="searchicon"/>
                    ) : (
                        <CloseIcon onClick={clearInput} className="clearBtn"/>
                    )}
                </SearchIconClassContainer>
                <input
                    type="search"
                    placeholder={placeholder}
                    value={wordEntered}
                    onChange={handleFilter}
                />
                {filteredData.length != 0 && (
                    <DataResult>
                        {filteredData.slice(0,15).map( (value, key) =>{
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
     );
}
 
export default SearchBar;

