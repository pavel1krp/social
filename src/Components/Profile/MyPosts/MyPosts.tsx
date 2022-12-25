import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {postDatapropsType} from "../../../Redux/State";

type MyPostType ={
    post: Array<postDatapropsType>
    addPost:(post:string) =>void
}

const MyPosts = (props:MyPostType) => {
    console.log(props)
    const posts = props.post.map(el=>{
        return(
            <Post title={el.name} src={el.src} text={el.message} likesCount={el.likesCount}/>
        )
    })
    let newPostElement = React.createRef<HTMLTextAreaElement>()
    const  addPostHandler = ()=>{
        props.addPost(newPostElement.current? newPostElement.current.value : '')
       if(newPostElement.current){
           newPostElement.current.value = ''
       }
    }
    return (
        <div className={s.postsBlock}>
            <div className={`${s.item}`}>
                My Posts
            </div>
            <div className={s.item}>
                <div>
                    <textarea ref={newPostElement} className={s.textArea} ></textarea>
                </div>
                <div>
                    <button onClick={addPostHandler}>Add post</button>
                </div>
                {/*<InputButton buttonName={'Send message'}/>*/}
            </div>
            {posts}
        </div>
    );
};

export default MyPosts;