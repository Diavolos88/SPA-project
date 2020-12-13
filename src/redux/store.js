import inputFilmReducer from "./inputFilmReducer";
import inputMessageReducer from "./InputMessageReducer";
import dialogReducer from "./dialogReducer";
import postsReducer from "./postsReducer";
import filmReducer from "./FilmReducer";

let store = {
    _state: {
        dialogsData: {
            inputValue: {
                messageValue: ''
            },
            friendData: [
                {
                    name: 'Petr',
                    id: 1,
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBoOxv-DbMlA1aiqJ0-xnHSL8sPh8JH2rp3w&usqp=CAU'
                },
                {
                    name: 'Vadman',
                    id: 2,
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjW5FEN8CzVwaFZVtoEWBESeiux8Bhe4_aYQ&usqp=CAU'
                },
                {
                    name: 'Mimimishka',
                    id: 3,
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZbRF9k7M6T4obdeM6921Hkok9wAuuwx56_Q&usqp=CAU'
                },
                {
                    name: 'Bat man',
                    id: 4,
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_uC8SZrYWsKIpVQRd1M5sa9WdQ5jewb1aFQ&usqp=CAU'
                }
            ],
            mesData: [
                {
                    name: 'Petr',
                    id: 1,
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBoOxv-DbMlA1aiqJ0-xnHSL8sPh8JH2rp3w&usqp=CAU',
                    mes: 'Hi'
                },
                {
                    name: 'Petr',
                    id: 1,
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBoOxv-DbMlA1aiqJ0-xnHSL8sPh8JH2rp3w&usqp=CAU',
                    mes: 'Hei'
                },
                {
                    name: 'Petr',
                    id: 1,
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBoOxv-DbMlA1aiqJ0-xnHSL8sPh8JH2rp3w&usqp=CAU',
                    mes: 'Bonjour'
                }
            ]
        },
        postsData: {
            cards: [
                {
                    name: 'Petr',
                    id: 1,
                    ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBoOxv-DbMlA1aiqJ0-xnHSL8sPh8JH2rp3w&usqp=CAU',
                    title: 'about 1917',
                    mes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim ',
                    likes: 8300
                },
                {
                    name: 'Mimimishka',
                    id: 2,
                    ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZbRF9k7M6T4obdeM6921Hkok9wAuuwx56_Q&usqp=CAU',
                    title: 'Lord of the ring',
                    mes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis t laborum',
                    likes: 123456
                }
            ],
            inputValue: {
                name: '',
                id: 0,
                ava: '',
                title: '',
                mes: '',
                likes: 0
            }
        },
        reccomendData: {
            inputValue: {
                titleValue: '',
                descriptionValue: '',
                yearValue: '',
                imgValue: '',
            },
            cards: [{
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGIDWc3Xd5iKgvlQX5ADC2ng5PA7eJGIYV_w&usqp=CAU',
                description: 'it is description',
                title: 1917,
                year: 2019
            },
                {
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGIDWc3Xd5iKgvlQX5ADC2ng5PA7eJGIYV_w&usqp=CAU',
                    description: 'sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ',
                    title: 1917,
                    year: 2019
                },
                {
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGIDWc3Xd5iKgvlQX5ADC2ng5PA7eJGIYV_w&usqp=CAU',
                    description: 'it isit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip s description',
                    title: 1917,
                    year: 2019
                },
                {
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGIDWc3Xd5iKgvlQX5ADC2ng5PA7eJGIYV_w&usqp=CAU',
                    description: 'it is description',
                    title: 1917,
                    year: 2019
                }
            ]
        },
    },
    _rerenderEntireTree() {
        console.log("example");
    },
    getState() {
        return this._state
    },
    addObserver(observer) {
        this._rerenderEntireTree = observer;
    },
    dispatch(action) {
        this._state.reccomendData.inputValue = inputFilmReducer(this._state.reccomendData.inputValue, action)
        this._state.dialogsData.inputValue = inputMessageReducer(this._state.dialogsData.inputValue, action)
        this._state.dialogsData = dialogReducer(this._state.dialogsData, action)
        this._state.reccomendData = filmReducer(this._state.reccomendData, action)
        this._state.postsData = postsReducer(this._state.postsData, action)
        this._rerenderEntireTree()
    }
}

export default store
window.store = store