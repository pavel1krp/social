import React from 'react';
import style from './Input_Button.module.css'
type PropsType ={
    buttonName:string

}

const InputButton = (props:PropsType) => {
    let newMessage = React.createRef<HTMLInputElement>()
    const onClickHandler =()=>{
        alert(newMessage.current?.value)
    }
    return (
        <div className={style.formDiv}>
            <input ref={newMessage} type="text"/>
            <button onClick={onClickHandler}>{props.buttonName}</button>
        </div>
    );
};

export default InputButton;