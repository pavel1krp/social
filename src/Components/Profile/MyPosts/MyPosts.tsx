import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    const postData =[
        {id:1, message: 'Hi', name:'Dasha', lilesCount:11,src:'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'},
        {id:2, message: 'My', name:'Vova',lilesCount:12,src:'https://klike.net/uploads/posts/2019-03/1551511804_3.jpg'},
        {id:3, message: 'Why ME????',name:'Solyara',lilesCount:10,src:'https://klike.net/uploads/posts/2019-03/1551511808_5.jpg'},
        {id:4, message: 'Why',name:'Sova',lilesCount:15,src:'https://klike.net/uploads/posts/2019-03/1551511808_5.jpg'},
    ]
    const posts = postData.map(el=>{
        return(
            <Post title={el.name} src={el.src} text={el.message} likesCount={el.lilesCount}/>
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