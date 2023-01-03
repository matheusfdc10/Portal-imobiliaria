export const formatDateNumber = (date) => {
    return new Intl.DateTimeFormat('pt-BR').format(date)
}

export const formatDate = (date) => {
    return new Intl.DateTimeFormat('pt-BR', { day: 'numeric', month: 'short', year: 'numeric'} ).format(date)
}