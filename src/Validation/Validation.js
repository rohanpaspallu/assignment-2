import React from 'react';

const validation  = (props) =>{

    let validationMessage = 'Text Long Enough';

    if(props.inputLength<=5){
        validationMessage = 'Text Too Short';
    }
    return(
        <div>

            <p>{validationMessage} {props.inputLength}</p>
            {/* {
                props.inputLength > 5 ?
                <p>Text Long Enough!! The length is {props.inputLength}</p> :
                <p><p>Text too short!! The length is {props.inputLength}</p></p>
            } */}
        </div>
    );
}

export default validation;
