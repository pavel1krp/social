import React from 'react';
import s from "./Post.module.css";

type PostType ={
    title: string,
    src: string,
    text:string,
}
 const users = [
     {src:'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg', title: 'Vasya'},
     {src:'https://klike.net/uploads/posts/2019-03/1551511804_3.jpg', title: 'Vasyanchi'},
     {src:'https://klike.net/uploads/posts/2019-03/1551511804_3.jpg', title: 'Sasya'},
 ]
const Post = (props:PostType) => {
    return (<div>
        <div className={s.divan}>
        <img className={s.img} src={props.src}/>
        <p>{props.title}</p>
    </div>
        <p>{props.text}</p>
    </div>)
};

export default Post;