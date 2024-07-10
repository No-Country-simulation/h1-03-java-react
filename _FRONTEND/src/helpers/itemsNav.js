import pathroutes from "./pathroutes"

const itemsNav = [
    { name: "Home", route: pathroutes.home },
    { name: "Pacientes", route: pathroutes.patients },
    { name: "Médicos", route: pathroutes.doctors },
    { name: "Citas", route: pathroutes.appointments },
    { name: "Historia clínica", route: pathroutes.medical_records },
    { name: "Recetas", route: pathroutes.prescriptions },
    { name: "Tratamientos", route: pathroutes.treatments },
    { name: "Signin", route: pathroutes.signin },
    { name: "Signup", route: pathroutes.signup }
]

export default itemsNav