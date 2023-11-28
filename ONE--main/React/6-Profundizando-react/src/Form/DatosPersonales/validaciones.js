export const validarName = (name)=>{
    const length = name.length
    if (length >= 3 && length <= 20){
        return true
    }else {
        return false
    }
}

export const validarLastName = (lastName)=>{
    const length = lastName.length
    return length > 3 && length < 30 ? true : false
}

export const validarNumber = (number)=>{
    const length = number.length
    return length >= 8 && length < 15 ? true : false
}
