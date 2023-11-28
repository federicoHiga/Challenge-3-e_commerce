export const validarAddress = (address)=>{
    const length = address.length
    return length > 3 && length < 30 ? true : false
}

export const validarCity = (city)=>{
    const length = city.length
    return length > 3 && length < 30 ? true : false
}

export const validarState = (state)=>{
    const length = state.length
    return length > 3 && length < 30 ? true : false
}