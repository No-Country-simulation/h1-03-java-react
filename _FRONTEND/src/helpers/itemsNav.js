import i18n from '../i18n/nav/index.json'

const getItemsNav = (language, role) => {
    
    const result = i18n[language].filter(
        (e) => {
            if(role === null) {
                return Object.values(e)[0].role === 'loggedout'
            }   
            if(role === 'PATIENT') {
                return Object.values(e)[0].role === 'patient' || Object.values(e)[0].role === 'both' || Object.values(e)[0].role === 'loggedout'
            }  
            if(role === 'DOCTOR') {
                return Object.values(e)[0].role === 'doctor' || Object.values(e)[0].role === 'both' || Object.values(e)[0].role === 'loggedout'
            }        
            return Object.values(e)[0].role === 'none'
        }
    )
    
    return result.map((e)=>Object.values(e)).flat()
}

export default getItemsNav