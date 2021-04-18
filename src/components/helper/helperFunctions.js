export const getCurrentUser =() =>{
    return sessionStorage.getItem("nutshell_user");
}

export const parseDate = (dateString) => {
    let splitDate = dateString.split(/\D/)
    return new Date(splitDate[0], --splitDate[1], splitDate[2])
}