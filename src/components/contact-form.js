import React from 'react';
import OptForm from "./contact";

function Contactform() {
    return (
        <div>
            <OptForm>
            <OptForm.Input placeholder="Email address"  />
            <OptForm.Button><a href="#">Contact us</a></OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>Let's work together</OptForm.Text>
          </OptForm>
        </div>
    )
}

export default Contactform
