const urlBase = "https://deploy-justina-production.up.railway.app/api/v1"
const endpoints = {
    signin: `${urlBase}/users-login`,
    signup: `${urlBase}/users`,
    checkRoleAndToken: `${urlBase}/token/authenticate`,
    getPatientInfo: `${urlBase}/patients`,

    getAllDoctors: `${urlBase}/doctors`,
}

export default endpoints