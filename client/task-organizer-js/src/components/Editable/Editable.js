import { useState, useEffect } from "react";
import {
    Styles
} from "./Editable.elements"
/*
const Editable = ({
    value: initalValue,
    row: {index},
    column: {id},
    updateMyData
}) => {

    // keep tabs on the state of the cell
    const [value, setValue] = useState(initialValue);


    const onChange = e => { setValue(e.target.value) }

    // only update external data when input blurred
    const onBlur = e => { updateMyData(index, id, value) }

    // if initialValue is changed externally, update our state
    useEffect(() => {
        setValue(initialValue)
    }, [initialValue])

    return ( <input value={value} onChange={onChange} onBlur={onBlur} /> );
}
*/

const Editable = () =>{
    return (
        <></>
    )
}

export default Editable;