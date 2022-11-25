import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import { ProfileProps} from "../Profile";
import {postDatapropsType} from "../../../App";

type MyPostType ={
    post: Array<postDatapropsType>
}

const MyPosts = (props:MyPostType) => {
    console.log(props)
    const posts = props.post.map(el=>{
        return(
            <Post title={el.name} src={el.src} text={el.message} likesCount={el.likesCount}/>
        )
    })
    return (
        <div className={s.postsBlock}>
            <div className={`${s.item}`}>
                My Posts
            </div>
            <div className={s.item}>
                <div>
                    <textarea className={s.textArea} ></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>

            </div>
            {posts}
        </div>
    );
};

export default MyPosts;