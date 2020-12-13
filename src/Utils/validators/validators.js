

export const required = (value) => {
    if (value) return undefined
    return "error message";
}


export const maxLenghtCreator = (maxLenght) => (value) => {
    debugger
    if (value && value.length > maxLenght) return  `Max lenght is ${maxLenght} symbols`
    return undefined
}
