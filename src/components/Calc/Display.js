import React from 'react';
import './Calculator.css';

function Display(props){
    return(<div className='display'>
        {props.result}
    </div>);
}

export default Display;