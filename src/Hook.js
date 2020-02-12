import React, { useState } from 'react';

export default function Hook() {
    const [variable, functionThatEffectsVariable] = useState([]);
    return (
        <div className="main-hook">
            <div className="smile-button">

                <p>
                    Here are smiles
                    <p> :) {variable}</p>
                </p>
                <button className="add-smile" onClick={() => {
                    functionThatEffectsVariable([...variable, ' :)'])
                }}>
                    Add smile
            </button>
            </div>
            <div className="explanation">
                <p>
                    Using React Hooks useState method, I've created a small onClick function to add a smile every time the button is pressed.
            </p>
            </div>
        </div>
    )
}