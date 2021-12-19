import { TextField } from "@mui/material";
import React, { useState } from "react";

const InputForm = (props) => {

    const { title, type, setDoubleValues } = props;

    const [ text, setText ] = useState();

    const handleOnChange = (event) => {
        const val = event.target.value;
        setText(val)
        const valArr = val.split(",");
        setDoubleValues(valArr)
    }

    return <div className="form-page">
        <h3>{title}</h3>
        <h5>{type}</h5>
        <div className="textfield-container">
            <TextField
                className="text-field"
                variant="outlined"
                value={text}
                onChange={handleOnChange}
            />
        </div>
    </div>
}

export default InputForm;