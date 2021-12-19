import React, { useState } from "react";
import InputForm from "../InputForm/InputForm";
import OutputForm from "../OutputForm/OutputForm";
import { formTexts, homePageTexts } from "./Constants";

const Home = () => {

    const { title, description } = homePageTexts;
    const { input, output } = formTexts

    const [ doubleValue, setDoubleValue ] = useState();

    const setDouble = (values) => {
        setDoubleValue(values.map((value) => {
            const formattedValue = value && parseInt(value) * 2;
            return formattedValue;
        }));
    }

    return <div class="home-page">
        <h1>{title}</h1>
        <h2>{description}</h2>
        <div className="forms-container">
            <div className="input-form">
                <InputForm
                    title={input.title}
                    type={input.type}
                    setDoubleValues={setDouble}
                />
            </div>
            <div className="output-form">
                <OutputForm
                    title={output.title}
                    type={output.type}
                    textValue={doubleValue}
                />
            </div>
        </div>
    </div>
}

export default Home;