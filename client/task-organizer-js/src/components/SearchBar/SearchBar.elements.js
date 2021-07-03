import styled from 'styled-components';

// TODO: Remove extraneous code

export const SearchInputs = styled.div`
    display: flex;
    align-items: center;
`;

export const Search = styled.div`

    & input {
        background-color: white;
        border: 0;
        border-radius: 2px;
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
        font-size: 18px;
        padding: 15px;
        margin-right: 1rem;
        height: 30px;
        width: 300px;
    }

    & input:focus {
        outline: none;
    }

    & a {
        text-decoration: none;
    }

    & a:hover {
        background-color: lightgrey;
    }

    & .clearBtn {
        cursor: pointer;
    }
`;

export const SearchIconClassContainer = styled.div`
    height: 3rem;
    width: 3rem;
    background-color: none;
    display: grid;
    place-items: center;
    color: white;

    &:hover {
        color: #1a83ff !important;
    }
    & .searchicon:hover {
        color: #1a83ff !important;
    }
`;

export const DataResult = styled.div`
    margin-top: 5px;
    width: 300px;
    height: 200px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    overflow: hidden;
    overflow-y: auto;

    &.dataItem{
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        color: black;
    }
`;

export const DataItem = styled.a`
    & p {
        margin-left: 10px;
    }
`;