//converting file from jQuery/html

import React from 'react';
import './CSSTricks.css';

export default function CSSTricks() {
    //     $('#submit-button').on("click", function (event) {
    //         event.preventDefault();
    //         let email = $("#email").val();
    //         if (email == "") {
    //             alert("Please enter email address")
    //         }
    //         else {
    //             $(".submit-window").show();
    //         }
    //     })
    // }

    return (
        <div className="background">
            <div className="pop-out">
                <h1>Sign Up For Our Mailing List</h1>
                <div className="close" id="window-close">
                    x
          </div>

                <section className="explanation">
                    <div className="diagonal-stripe">   </div>
                    Mailing lists can be obnoxious- but not ours! We'll send you emails about CSS Tricks. You want it- you need it. You can always unsubscribe later.
        </section>

                <form className="email-form" id="gradient-form">
                    <div className="input-wrapper">
                        <label for="email" className="fa fa-envelope" />
                        <input type="text" id="email" name="email address" className="fa" placeholder="email address" />

                    </div>
                    <button onClick="submitForm()" type="submit" id="submit-button">I'll take the risk › </button>
                </form>


                <div className="submit-window" id="submit-window">
                    <p className="thanks"> Thanks, you're on the list!</p>
                    <p>You (probably) won't regret this.</p>
                </div>

            </div>
            <div className="explanation">
                <p>
                  With this project I learned how to create hard lines for a diagonal stripe using background: linear-gradient() with CSS.
                  
            </p>
            </div>
        </div>

    )
}



