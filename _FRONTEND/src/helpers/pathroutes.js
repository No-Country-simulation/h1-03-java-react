import i18nNav from '../i18n/nav/index.json'
import i18nOtherRoutes from '../i18n/nav/otherRoutes.json'

const getPathRoutes = (language, routeName, isForNavBar) => {
	let filteredResult = null

	if (Object.values(isForNavBar)[0]) {
		filteredResult = i18nNav[language].filter((e) => e[routeName])
	} else {
		filteredResult = i18nOtherRoutes[language].filter((e) => e[routeName])
	}

	return filteredResult.length === 0 ? false : filteredResult[0][routeName].route
}

export default getPathRoutes