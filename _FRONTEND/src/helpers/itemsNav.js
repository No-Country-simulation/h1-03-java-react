import i18n from '../i18n/nav/index.json'

const getItemsNav = (language) => {

    return Object.values(i18n[language]).map(
        (e) => Object.values(e)[0]
    )
}

export default getItemsNav