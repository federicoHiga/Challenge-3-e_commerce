export const validarEmail = (email)=>{
    const length = email.length;
    if (length >= 5 && length <= 40 && email.includes('@')){
        return true
    }else{
        return false
    }
};

export const validarPassword = (password)=>{
    const length = password.length;
    if (length >= 8 && length <= 40){
        return true
    }else{
        return false
    }
};