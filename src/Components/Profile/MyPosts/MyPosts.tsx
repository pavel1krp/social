import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <div className={`${s.item} ${s.active}`}>
                My Posts
            </div>
            <div className={s.item}>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <Post title = {'Vasya'} src={'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'}  text ={'Hi'}/>
            <Post title = {'Vasya'} src={'https://klike.net/uploads/posts/2019-03/1551511804_3.jpg'} text ={'By'}/>
            <Post title = {'Vasya'} src={'https://klike.net/uploads/posts/2019-03/1551511808_5.jpg'} text ={'We a the champions'}/>
        </div>
    );
};

export default MyPosts;