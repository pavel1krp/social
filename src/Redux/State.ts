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
    newMessageText:string
}
export type DialogDataType = {
    id: string
    name: string
}

export type ProfilePageType = {
    postData: postDatapropsType[],
    newPostText: string
}
export type StatePropsType = {
    ProfilePage: ProfilePageType
    DialogPage: DialogPageType
}



export const store = {
    _state:{
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
            newPostText:'',
        },
        DialogPage: {
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
            ],
            newMessageText: '',
        }
    },
    rerenderTree (state: StatePropsType){
        console.dir('state')
    },
    subscribe(observer:(state: StatePropsType)=>void){
         this.rerenderTree= observer
    }
    ,
    addPost() {
        const newPost ={
            id:v1(),
            message: this._state.ProfilePage.newPostText,
            name: 'LLLLova',
            likesCount: 15,
            src: 'https://klike.net/uploads/posts/2019-03/1551511808_5.jpg'}
        this._state.ProfilePage.postData.push(newPost)
        this._state.ProfilePage.newPostText =''
         this.rerenderTree(this._state)
    },
    updateNewPostText (newText:string){
       this._state.ProfilePage.newPostText =newText
     this.rerenderTree(this._state)
 },
    addMessage(){
        const newMessage = {
            id:v1(),
            message: this._state.DialogPage.newMessageText
        }
        this._state.DialogPage.messagesData.push(newMessage)
        this._state.DialogPage.newMessageText = '';
         this.rerenderTree(this._state)
    },
    updateMessageText (messageText:string){
        this._state.DialogPage.newMessageText = messageText;
         this.rerenderTree(this._state)
    }
}