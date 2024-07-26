import i18nNav from '../i18n/nav/index.json'
import i18nOtherRoutes from '../i18n/nav/otherRoutes.json'

const getPathRoutes = (language, routeName, isForNavBar, returnNameInstead=false) => {
	let filteredResult = null

	if (Object.values(isForNavBar)[0] || isForNavBar===true) {
		filteredResult = i18nNav[language].filter((e) => e[routeName])
	} else {
		filteredResult = i18nOtherRoutes[language].filter((e) => e[routeName])
	}

	if (returnNameInstead) {
		return filteredResult.length === 0 ? false : filteredResult[0][routeName].name
	} else {
		return filteredResult.length === 0 ? false : filteredResult[0][routeName].route
	}
}

export default getPathRoutes