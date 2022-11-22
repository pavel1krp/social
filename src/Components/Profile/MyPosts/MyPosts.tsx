import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    const postData =[
        {id:1, message: 'Hi', name:'Dasha'},
        {id:1, message: 'My', name:'Vova'},
        {id:1, message: 'Why',name:'Sova'},
    ]
    return (
        <div className={s.postsBlock}>
            <div className={`${s.item} ${s.active}`}>
                My Posts
            </div>
            <div className={s.item}>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>

            </div>
            <Post title={'Vasya'} src={'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'} text={'Hi'}/>
            <Post title={'Vlad'} src={'https://klike.net/uploads/posts/2019-03/1551511804_3.jpg'} text={'By'}/>
            <Post title={'Pudge'} src={'https://klike.net/uploads/posts/2019-03/1551511808_5.jpg'}
                  text={'We a the champions'}/>
            <Post title={postData[0].name} src={'https://klike.net/uploads/posts/2019-03/1551511808_5.jpg'}
                  text={postData[0].message}/>
        </div>
    );
};

export default MyPosts;