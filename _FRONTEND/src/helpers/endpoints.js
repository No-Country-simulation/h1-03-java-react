const urlBase = "https://justinah1-03.up.railway.app/api/v1"
const endpoints = {
    signin: `${urlBase}/users-login`,
    signup: `${urlBase}/users`,
    checkRoleAndToken: `${urlBase}/token/authenticate`,
    patients: `${urlBase}/patients`,
    doctors: `${urlBase}/doctors`,

    getUserAndDoctorInfo: `${urlBase}/users-doctors`,
    getUserAndPatientInfo: `${urlBase}/users-patients`,

    getAllDoctors: `${urlBase}/doctors`,
    getAllDoctorsBySpecialty: `${urlBase}/doctors/specialty`,

    getAppointmentsCurrentUser: `${urlBase}/appointments/current-user`,
    getAppointmentsCurrentUserRecentOne: `${urlBase}/appointments/current-user/close`,

    getFilteredAvailableAppointments: `${urlBase}/shifts/filter`,
    postScheduleAppointment: `${urlBase}/appointments`
}

export default endpoints