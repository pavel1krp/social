import React from 'react';
import s from "./Post.module.css";

type PostType ={
    title: string,
    src: string,
    text:string,
    likesCount:number
}
 // const users = [
 //     {src:'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg', title: 'Vasya', likesCount:14},
 //     {src:'https://klike.net/uploads/posts/2019-03/1551511804_3.jpg', title: 'Vasyanchi',likesCount:15},
 //     {src:'https://klike.net/uploads/posts/2019-03/1551511804_3.jpg', title: 'Sasya',likesCount:17},
 // ]
const Post = (props:PostType) => {
    return (
        <div className={s.divan}>
        <div className={s.comentAndAva}>
        <img className={s.img} src={props.src}/>
        <p>{props.title}</p>
        </div>
            <div className={s.likesAndComent}>
                <p>{props.text}</p>
        <p className={s.likes}>{props.likesCount} likes &#10084;</p>
            </div>
        </div>
   )
};

export default Post;