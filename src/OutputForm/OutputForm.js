import { TextField } from "@mui/material";
import React from "react";

const OutputForm = (props) => {

    const { title, type, textValue } = props;

    return <div className="form-page">
        <h3>{title}</h3>
        <h5>{type}</h5>
        <div className="textfield-container">
            <TextField
                variant="outlined"
                value={textValue}
            />
        </div>
    </div>
}

export default OutputForm;