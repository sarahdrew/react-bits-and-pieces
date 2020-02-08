import React, { useState } from 'react';

export default function Hook() {
    const [variable, functionThatEffectsVariable] = useState([]);
    return (
        <div className="main-hook">

            <p>
                Here are smiles {variable}
            </p>
            <button onClick={() => {
                functionThatEffectsVariable([...variable, ' :)'])
            }}>
                Add smile
            </button>
        </div>
    )
}