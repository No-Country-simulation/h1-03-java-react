const urlBase = "https://justinah1-03.up.railway.app/api/v1"
const endpoints = {
    signin: `${urlBase}/users-login`,
    signup: `${urlBase}/users`,
    checkRoleAndToken: `${urlBase}/token/authenticate`,
    patients: `${urlBase}/patients`,
    doctors: `${urlBase}/doctors`,

    getUserAndDoctorInfo: `${urlBase}/users-doctors`,
    getUserAndPatientInfo: `${urlBase}/users-patients`,
}

export default endpoints