const ADD_FILM_CARD = 'ADD_FILM_CARD'
const UPDATE_IMG_VALUE = 'UPDATE_IMG_VALUE'
const UPDATE_TITLE_VALUE = 'UPDATE_TITLE_VALUE'
const UPDATE_DESCRIPTION_VALUE = 'UPDATE_DESCRIPTION_VALUE'
const UPDATE_YEAR_VALUE = 'UPDATE_YEAR_VALUE'

let initialState = {
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
}

const filmReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FILM_CARD: {
            let stateCopy = {...state}
            stateCopy.cards = [...state.cards]
            stateCopy.inputValue = {...state.inputValue}
            let film = {
                img: stateCopy.inputValue.imgValue,
                description: stateCopy.inputValue.descriptionValue,
                title: stateCopy.inputValue.titleValue,
                year: stateCopy.inputValue.yearValue,
            }
            stateCopy.cards.push(film)
            stateCopy.inputValue.titleValue = ''
            stateCopy.inputValue.descriptionValue = ''
            stateCopy.inputValue.yearValue = ''
            stateCopy.inputValue.imgValue = ''
            return stateCopy
        }
        case UPDATE_IMG_VALUE: {
            let stateCopy = {...state}
            stateCopy.inputValue = {...state.inputValue}
            stateCopy.inputValue.imgValue = action.imgValue
            return stateCopy
        }
        case UPDATE_YEAR_VALUE: {
            let stateCopy = {...state}
            stateCopy.inputValue = {...state.inputValue}
            stateCopy.inputValue.yearValue = action.yearValue
            return stateCopy
        }
        case UPDATE_DESCRIPTION_VALUE: {
            let stateCopy = {...state}
            stateCopy.inputValue = {...state.inputValue}
            stateCopy.inputValue.descriptionValue = action.descriptionValue
            return stateCopy
        }
        case UPDATE_TITLE_VALUE: {
            let stateCopy = {...state}
            stateCopy.inputValue = {...state.inputValue}
            stateCopy.inputValue.titleValue = action.titleValue
            return stateCopy
        }
        default:
            return state
    }
}

export const addFilmCardActionCreator = () => {
    return {type: ADD_FILM_CARD}
}

export const changeImgActionCreator = img => {
    return {type: UPDATE_IMG_VALUE, imgValue: img}
}

export const changeTitleActionCreator = (title) => {
    return {type: UPDATE_TITLE_VALUE, titleValue: title}
}

export const changeDescriptionActionCreator = (description) => {
    return {type: UPDATE_DESCRIPTION_VALUE, descriptionValue: description}
}

export const changeYearActionCreator = (year) => {
    return {type: UPDATE_YEAR_VALUE, yearValue: year}
}

export default filmReducer