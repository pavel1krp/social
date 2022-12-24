import {v1} from "uuid";
import {MessagesDataType} from "../App";
import {profileReducer} from "./profile-reducer.js";
import {dialogReducer} from "./dialogs-reducer.js";

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
    newMessageBody:string
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
    body: string
}



export type StoreType = {
    _state: StatePropsType
    _rerenderTree: () => void
    subscribe: (observer: () => void) => void
    getState: () => StatePropsType
    dispatch: (action: ActionsType) => void
}

export type ActionsType = AddPOstActionType | ChangeNewTextActionType|AddMessageActionType| ChangeNewMessageActionType

// const ADD_POSt = "ADD-POST";
// const UPDATE_NEW_POST_TEXT ="UPDATE-NEW-POST-TEXT";
// const ADD_MESSAGE = 'ADD-MESSAGE';
// const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const store: StoreType = {
    _state: {
        ProfilePage: {
            postData: [
                {
                    id: v1(),
                    message: 'VKus',
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
            newMessageBody: '',
        }
    },
    _rerenderTree() {
    },
    subscribe(observer: () => void) {
        this._rerenderTree = observer
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        console.log(action.type)
        this._state.ProfilePage = profileReducer(this._state.ProfilePage,action);
        this._rerenderTree();
        this._state.DialogPage= dialogReducer(this._state.DialogPage ,action);
        this._rerenderTree();
    }
}

export default store

