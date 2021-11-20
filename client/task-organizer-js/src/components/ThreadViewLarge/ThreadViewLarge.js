import React, { useState, useMemo, useEffect, useRef } from 'react';
import { IconContext } from 'react-icons/lib';
import * as BiIcons from 'react-icons/bi'; // BiCheckbox
import {
    ThreadInfoContainer,
    PageDisplay,
    SeeAllButton,
    ThreadContainer,
    ThreadTitle,
    TaskNameContainer,
    PaginationButton
} from './ThreadViewLarge.elements.js';


export const ThreadViewLarge = ({tasks}) => {
    return ( 
        <>
            <div style={{color:"white"}}>Hello World! This works</div>
        </>
     );
}
 
export default ThreadViewLarge;