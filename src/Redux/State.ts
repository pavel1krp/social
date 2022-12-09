import {v1} from "uuid";
import { MessagesDataType} from "../App";
export type postDatapropsType = {
    id: string
    message: string
    name: string
    likesCount: number
    src: string
}
export type DialogPageType = {
    dialogsData:DialogDataType[]
    messagesData:MessagesDataType[]
}
export type DialogDataType = {
    id: string
    name: string
}

export type ProfilePageType = {
    postData: postDatapropsType[]
    newPostText:string

}
export type StatePropsType = {
    ProfilePage: ProfilePageType
    DialogPage: DialogPageType
}


export let state = {
    ProfilePage: {
        postData: [
            {
                id: v1(),
                message: 'Игорь,спасибо,вкусно',
                name: 'Dasha',
                likesCount: 11111,
                src: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'
            },
            {
                id: v1(),
                message: 'My',
                name: 'Vova',
                likesCount: 12,
                src: 'https://klike.net/uploads/posts/2019-03/1551511804_3.jpg'
            },
            {
                id: v1(),
                message: 'Why ME????',
                name: 'Solyara',
                likesCount: 10,
                src: 'https://klike.net/uploads/posts/2019-03/1551511808_5.jpg'
            },
            {
                id: v1(),
                message: 'Why',
                name: 'Sova',
                likesCount: 15,
                src: 'https://klike.net/uploads/posts/2019-03/1551511808_5.jpg'
            },
        ],
        newPostText:'Hello It'
    }, DialogPage: {
        dialogsData: [
            {id: v1(), name: 'Pasha'},
            {id: v1(), name: 'Dasha'},
            {id: v1(), name: 'Sasha'},
            {id: v1(), name: 'Masha'},
            {id: v1(), name: 'Nasha'},
            {id: v1(), name: 'Glasha'},
            {id: v1(), name: 'Gosha'},
        ],
        messagesData: [
            {id: v1(), message: 'Hi'},
            {id: v1(), message: 'Hi chel'},
            {id: v1(), message: 'Hi body'},
            {id: v1(), message: 'Hi bye'},
            {id: v1(), message: 'Hiushki'},
            {id: v1(), message: 'Bye'},
        ]
    }
}
let rerenderTree = ()=>{
    console.log(222)
}
export const updateNewPostText =(newText:string)=>{
    state.ProfilePage.newPostText =newText
    rerenderTree()
}

export const addPost = ()=>{
    const newPost ={
        id:v1(),
        message: state.ProfilePage.newPostText,
        name: 'LLLLova',
        likesCount: 0,
        src: 'https://klike.net/uploads/posts/2019-03/1551511808_5.jpg'}
    state.ProfilePage.postData.push(newPost)
    state.ProfilePage.newPostText =''
    rerenderTree()
}
export const subscribe = (observer:()=>void)=>{
    rerenderTree = observer
}