import { toggleAc, usersReducer} from "./usersReduser";

test('must return correct followed', ()=>{
    const startState =  {
        users:[
            {id: '0',urlPhoto:'https://s0.rbk.ru/v6_top_pics/media/img/9/84/756629270710849.jpg', fullName: 'Dmitry K.', status:'I am batman', location:{city:'Minsk', county:'Belarus'}, followed: true },
            {id: '1',urlPhoto:'https://s0.rbk.ru/v6_top_pics/media/img/9/84/756629270710849.jpg', fullName: 'Dartonyan T.', status:'I am spider man', location:{city:'Moscow', county:'Russia'}, followed: false },
            {id: '2',urlPhoto:'https://s0.rbk.ru/v6_top_pics/media/img/9/84/756629270710849.jpg', fullName: 'Demian T.', status:'I man', location:{city:'Kiev', county:'Ukraine'}, followed: true },
            {id: '3',urlPhoto:'https://s0.rbk.ru/v6_top_pics/media/img/9/84/756629270710849.jpg', fullName: 'Dementi B.', status:'I man in Black', location:{city:'Kiev', county:'Ukraine'}, followed: true },
        ]
    }
    const endState = usersReducer(startState, toggleAc('1'))

    expect(endState.users[2].followed).toBe(true)
    expect(endState.users[0].followed).toBe(true)
    expect(endState.users[3].followed).toBe(true)
})