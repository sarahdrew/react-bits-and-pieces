import React, { useState } from 'react';

export default function Valentine() {
    const randomValentine = function () {

        let words = ['nice', 'pretty', 'fun', 'smart', 'creative', 'beautiful', 'unique', 'funny']
        let word = words[Math.floor(Math.random() * words.length)];
        console.log(word);
        return word;
    }
    const [variable, randomValentine] = useState([]);

    return (
        <>
            <div className="valetine">

                <p>
                    Roses are red, violets are blue, you are {variable} !
                </p>
                <button onClick={() => {
                    randomValentine(){

                    }
                }}>
                    Give me a Valentine!
            </button>
            </div>
            <div className="explanation">
                <p>
                    Using React Hooks useState method, I've created a small onClick function to create a random valetine.
            </p>
            </div>
        </>
    )
}