import i18n from '../i18n/nav/index.json'

const getPathRoutes = (language, routeName) => {
	const filteredResult = i18n[language].filter((e)=>e[routeName])
	const result = filteredResult.length === 0 ? false : filteredResult[0][routeName].route

    return result
}

export default getPathRoutes