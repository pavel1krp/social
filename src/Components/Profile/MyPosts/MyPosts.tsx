import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import { ProfileProps} from "../Profile";
import InputButton from "../../Form/Input_Button";
import {postDatapropsType} from "../../../Redux/State";

type MyPostType ={
    post: Array<postDatapropsType>
    addPost:(post:string) =>void
    newPostText:string
    updateNewPostText: (newText:string)=>void
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
        props.addPost(newPostElement.current? newPostElement.current.value:'')
    }

    const onPostChange =(e:ChangeEvent<HTMLTextAreaElement>)=>{
       props.updateNewPostText(e.currentTarget.value)
    }

    return (
        <div className={s.postsBlock}>
            <div className={`${s.item}`}>
                <h3 className={s.myPost}>My Posts</h3>
            </div>
            <div className={s.item}>
                <div>
                    <textarea ref={newPostElement} className={s.textArea} defaultValue={''} value={props.newPostText} onChange={onPostChange}/>
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