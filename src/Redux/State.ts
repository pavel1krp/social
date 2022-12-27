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
export type StoreType = {
    _state: StatePropsType
    _callSubscriber:(state: StatePropsType)=>void
    getState:()=> StatePropsType
    subscribe:(observer:(state: StatePropsType)=>void)=>void
    addMessage:()=>void
    updateMessageText:(messageText:string)=>void
    dispatch:(action:any)=>void
}


export const store:StoreType = {
    _state:{
        ProfilePage: {
            postData: [
                {
                    id: v1(),
                    message: 'Вкусно',
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
    _callSubscriber (state: StatePropsType){
        console.dir('state')
    },
    getState(){
        return this._state
    },
    subscribe(observer:(state: StatePropsType)=>void){
         this._callSubscriber= observer
    },
    addMessage(){
        const newMessage = {
            id:v1(),
            message: this._state.DialogPage.newMessageText
        }
        this._state.DialogPage.messagesData.push(newMessage)
        this._state.DialogPage.newMessageText = '';
         this._callSubscriber(this._state)
    },
    updateMessageText (messageText:string){
        this._state.DialogPage.newMessageText = messageText;
         this._callSubscriber(this._state)
    },
    dispatch(action:any){
        switch (action.type) {
            case "ADD-POST":{
                const newPost ={
                    id:v1(),
                    message: this._state.ProfilePage.newPostText,
                    name: 'LLLLova',
                    likesCount: 15,
                    src: 'https://klike.net/uploads/posts/2019-03/1551511808_5.jpg'}
                this._state.ProfilePage.postData.push(newPost)
                this._state.ProfilePage.newPostText =''
                this._callSubscriber(this._state)
                break
            }
            case "UPDATE-NEW-POST-TEXT":{
                this._state.ProfilePage.newPostText =action.newText
                this._callSubscriber(this._state)
                break
            }
            default: throw new Error("Wrong case")
        }

    }
}
