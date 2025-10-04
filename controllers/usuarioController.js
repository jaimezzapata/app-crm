import { usuarios } from "../models/UsuarioModel.js";

export function registrarUsuario() {
    let formulario = document.getElementById("formulario");
    formulario.addEventListener("submit", (event) => {
        event.preventDefault();
        const datosFormulario = new FormData(formulario);
        let usuario = Object.fromEntries(datosFormulario);
        usuario.hobbies = datosFormulario.getAll("hobbies");
        usuarios.push(usuario);
        console.log(usuarios);

    });
}