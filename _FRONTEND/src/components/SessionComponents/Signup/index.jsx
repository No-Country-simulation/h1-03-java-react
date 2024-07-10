import React from "react";
import Input from "../../Resources/FormElements/InputLabel/Input";
import Button from "../../Resources/FormElements/Button";

export default function Signup() {
	return (
		<section className="grid justify-center gap-5">
			<p>SIGN-UP</p>

			<Input
				id={"nameSignup"}
				type={"text"}
				placeholder={"NOMBRE"}
				title={"Ingrese su nombre"}
				isRequired={true}
				autoFocus={true}
				value=""
				onChangeHandler={() => {}}
			/>

			<Input
				id={"emailSignup"}
				type={"email"}
				placeholder={"E-MAIL"}
				title={"Ingrese su email"}
				isRequired={true}
				value=""
				onChangeHandler={() => {}}
			/>

			<Input
				id={"passwordSignup"}
				type={"password"}
				placeholder={"CONTRASEÑA"}
				title={"Ingrese su contraseña"}
				isRequired={true}
				value=""
				onChangeHandler={() => {}}
			/>

            <Input
				id={"passwordRepeatSignup"}
				type={"password"}
				placeholder={"REPETIR CONTRASEÑA"}
				title={"Ingrese nuevamente su contraseña"}
				isRequired={true}
				value=""
				onChangeHandler={() => {}}
			/>

            <p className="text-center">&nbsp;</p>

			<Button
				text={"REGISTRARSE"}
				title={"Registrarse"}
				onClickHandler={() => {}}
			/>

			<p className="text-center">
				Ya tiene una cuenta?&nbsp;
				<span
					className="underline"
					role="button"
					title="Click para registrarse"
					onClick={() => navigate()}
				>
					Iniciar sesión.
				</span>
			</p>
		</section>
	);
}
