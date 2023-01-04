export const formatDateNumber = (date) => {
    if(!date) return 
    return new Intl.DateTimeFormat('pt-BR').format(date)
}

export const formatDate = (date) => {
    if(!date) return 
    return new Intl.DateTimeFormat('pt-BR', { day: 'numeric', month: 'short', year: 'numeric'} ).format(date)
}