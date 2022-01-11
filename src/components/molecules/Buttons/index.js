import React from 'react';
import ButtonComponent from '../../atoms/Buttons';

const Button = (props) => {
    return(
        <>
            <ButtonComponent color={props.color} textColor={props.textColor} icon={props.icon} title={props.title} disabled={props.disabled}>
                
            </ButtonComponent>
        </>
    );
}

export default Button;