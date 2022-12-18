import {v1} from "uuid";
import {MessagesDataType} from "../App";

export type postDatapropsType = {
    id: string
    message: string
    name: string
    likesCount: number
    src: string
}
export type DialogPageType = {
    dialogsData: DialogDataType[]
    messagesData: MessagesDataType[]
}
export type DialogDataType = {
    id: string
    name: string
}

export type ProfilePageType = {
    postData: postDatapropsType[]
    newPostText: string

}
export type StatePropsType = {
    ProfilePage: ProfilePageType
    DialogPage: DialogPageType
}

export type AddPOstActionType = {
    type: "ADD-POST"
}

export type ChangeNewTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}

export type AddMessageActionType = {
    type: "ADD-MESSAGE"
}

export type ChangeNewMessageActionType = {
    type: 'UPDATE-NEW-MESSAGE-TEXT'
    newMessage: string
}



export type StoreType = {
    _state: StatePropsType
    _rerenderTree: () => void
    subscribe: (observer: () => void) => void
    getState: () => StatePropsType
    dispatch: (action: ActionsType) => void
}

export type ActionsType = AddPOstActionType | ChangeNewTextActionType|AddMessageActionType| ChangeNewMessageActionType

const ADD_POSt = "ADD-POST"
const UPDATE_NEW_POST_TEXT ="UPDATE-NEW-POST-TEXT"

let store: StoreType = {
    _state: {
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
            newPostText: 'Hello It',

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
    },
    _rerenderTree() {
        console.log(222)
    },
    subscribe(observer: () => void) {
        this._rerenderTree = observer
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        if (action.type === "ADD-POST") {
            let newPost = {
                id: v1(),
                message: this._state.ProfilePage.newPostText,
                name: 'LLIova',
                likesCount: 0,
                src: 'https://klike.net/uploads/posts/2019-03/1551511808_5.jpg'
            }
            this._state.ProfilePage.postData.push(newPost)
            this._state.ProfilePage.newPostText = ''
            this._rerenderTree()
        }
        else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.ProfilePage.newPostText = action.newText
            this._rerenderTree()
        }
        // else if (action.type === "ADD-MESSAGE") {
        //     let newMessage = {
        //         id: v1(),
        //         message: this._state.DialogPage.messagesData .newPostText,
        //     }
        //     this._state.DialogPage.messagesData.push(newMessage)
        //     this._state.DialogPage.messagesData .newPostText = ''
        //     this._rerenderTree()
        // }
        // else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
        //     this._state.DialogPage.messagesData =action.newMessage
        //     this._rerenderTree()
        // }
    }
}

export const addPostActionCreator = ():ActionsType=>({ type:ADD_POSt});
export const onPostChangeActionCreator = (newText:string):ActionsType=>({type:UPDATE_NEW_POST_TEXT , newText});
export default store

