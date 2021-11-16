import styled from 'styled-components';
import { device } from "../../lib/CSS/device.js";


export const SearchInputs = styled.div`
    display: flex;
    align-items: center;
    position: relative;
`;

export const Search = styled.div`

    & input {
        background-color: rgba(16,21,34,1);
        border: 1px solid rgba(68,76,86,.5);
        border-radius: 1rem;
        font-size: 1.2rem;
        padding: .75rem;
        margin-right: 1rem;
        height: 1.9rem;
        width: 20rem;
        color: #f5f5f5 !important;
    }

    & input:focus {
        outline: none;
    }

    & input:hover {
        transition: 350ms;
        border: #1a83ff 1px solid;
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

    /* Mobiles - Extra Small <425dp - Portrait*/
    @media ${device.mobileMMax}{
        display: none;
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
        transition: 350ms;
        color: #1a83ff !important;
        cursor: pointer;
    }
`;

export const DataResult = styled.div`
    position: absolute;
    top: 2.5rem;
    right: 4.75rem;  
    width: 15rem;
    height: 15rem;
    border-radius: 1rem;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    overflow: hidden;
    overflow-y: auto;

    &::-webkit-scrollbar { 
        width: 0 !important 
    }

    & .dataItem{
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