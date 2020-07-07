import { Tarjeta } from "./tarea/Tarea1.js";
import { BlogPost } from "./tarea/Tarea1.js";
import { MatchNombre, PasswordInput, ValidationInput } from "./tarea/Tarea2.js";
import { UncontrolledCheckbox, CheckboxList } from "./tarea/Tarea3.js";
import { ControlledCheckbox, CheckboxListWithState } from "./tarea/Tarea4.js";

//TAREA 1

ReactDOM.render(
    <Tarjeta
        nombre="Leandro Cepeda"
        titulo="Programador Web Full Stack"
        imagen="https://avatars2.githubusercontent.com/u/14203988?s=460&v=4"
    />,
    document.getElementById('react-app'));



ReactDOM.render(
    <BlogPost
        titulo="Ardillas"
        parrafos={`Hoy vi una ardilla.
La ardilla era negra, era más grande que otras ardillas, tenía muchos dientes grandes y encima andaba siempre en cuatro patas, moviendo la cola.
Creo que puede haber sido un perro, dado que en Argentina no hay ardillas.`}
        autor={{
            nombre: "Leandro Cepeda",
            titulo: "My Blog",
            imagen: "https://avatars2.githubusercontent.com/u/14203988?s=460&v=4"
        }}
    />,
    document.getElementById('react-app'));

// TAREA 2

ReactDOM.render(
    <MatchNombre
        nombre="Leandro"
    />,
    document.getElementById('react-app'));

ReactDOM.render(
    <PasswordInput
        minLength="8"
    />,
    document.getElementById('react-app'));

ReactDOM.render(
    <ValidationInput
        validation={(value) => value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)}
        isPassword={true}
    />,
    document.getElementById('react-app'));

//TAREA 3

ReactDOM.render(
    <UncontrolledCheckbox
        name="React"
        initialValue={false}
    />,
    document.getElementById('react-app'));

ReactDOM.render(
    <CheckboxList
        items={{
            uno: false,
            dos: true,
            tres: false,
        }} />,
    document.getElementById('react-app'));

//TAREA 4

ReactDOM.render(
    <ControlledCheckbox
        name="React"
        value={false}
        onChange={(event) => alert("Seleccionado")}
    />,
    document.getElementById('react-app'));

ReactDOM.render(
    <CheckboxListWithState
        items={{
            uno: false,
            dos: true,
            tres: false,
        }} />,
    document.getElementById('react-app'));

