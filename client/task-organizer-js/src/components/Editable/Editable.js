import { useState, useEffect } from "react";
import {
    StyledEditableCell
} from "./Editable.elements"

// This does not work with react-table as intended for unknown reasons..
// All I know is that value is supposed to be value: initialValue, but wtf is initalValue??
// If you can ever figure out where it is pulling "initialValue" from, then you can make this into a component
const Editable = ({
    value,
    row: { index },
    column: {id},
    updateMyData
}) => {
    // keep tabs on the state of the cell
    const [initialValue, setValue] = useState(value);
    const onChange = e => { setValue(e.target.value) }
    // only update external data when input blurred
    const onBlur = e => { updateMyData(index, id, value) }
    // if initialValue is changed externally, update our state
    useEffect(() => {
        setValue(initialValue)
    }, [initialValue])
    return ( <StyledEditableCell value={initialValue} onChange={onChange} onBlur={onBlur} /> );
}
/*
const Editable = () => {
    return(
        <></>
    )
}
*/
export default Editable;