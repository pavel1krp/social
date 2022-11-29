import {v1} from "uuid";

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

export const addPost = (post:string)=>{
    const newPost ={
        id:v1(),
        message: post!==null? post: '',
        name: 'LLLLova',
        likesCount: 15,
        src: 'https://klike.net/uploads/posts/2019-03/1551511808_5.jpg'}
    state.ProfilePage.postData.push(newPost)
    console.dir(state.ProfilePage.postData)
}