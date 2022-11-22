import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    const postData =[
        {id:1, message: 'Hi', name:'Dasha', lilesCount:11,src:'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'},
        {id:2, message: 'My', name:'Vova',lilesCount:12,src:'https://klike.net/uploads/posts/2019-03/1551511804_3.jpg'},
        {id:3, message: 'Why',name:'Sova',lilesCount:10,src:'https://klike.net/uploads/posts/2019-03/1551511808_5.jpg'},
    ]
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
            {postData.map(el=>{
                return(
                    <Post title={el.name} src={el.src} text={el.message} likesCount={el.lilesCount}/>
                )
            })}
            {/*<Post title={'Vasya'} src={'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'} text={'Hi'} likesCount={pr}/>*/}
            {/*<Post title={'Vlad'} src={'https://klike.net/uploads/posts/2019-03/1551511804_3.jpg'} text={'By'}/>*/}
            {/*<Post title={'Pudge'} src={'https://klike.net/uploads/posts/2019-03/1551511808_5.jpg'}*/}
            {/*      text={'We a the champions'}/>*/}
            {/*<Post title={postData[0].name} src={'https://klike.net/uploads/posts/2019-03/1551511808_5.jpg'} text={'das'} likesCount={11}/>*/}
        </div>
    );
};

export default MyPosts;