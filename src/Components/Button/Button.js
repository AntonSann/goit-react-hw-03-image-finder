import React from 'react';
import Style from './Button.module.css';

const Button = ({onClick}) => {
return <button className={Style.Button} type="button" onClick={onClick}>
Load more
</button>
}
export default Button;