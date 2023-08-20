import Pagina from "../../components/template/Pagina";
import Flex from "../../components/template/Flex";
import { useId } from "react";

export default function () {
    let id = useId();
    return (
        <Pagina titulo="Conhecendo o hook useId" subtitulo="usando useId em um formulario">
            <Flex center>
                <label className="m-1" htmlFor={`nome-${id}`}>Nome:</label>
                <input id={`nome-${id}`} className="m-2 text-gray-600 p-2 rounded-md" type="text"></input>
            </Flex>
            <Flex center>
                <label className="m-1" htmlFor={`sobrenome-${id}`}>Sobrenome:</label>
                <input id={`sobrenome-${id}`} className="m-2 text-gray-600 p-2 rounded-md" type="text"></input>
            </Flex>
        </Pagina>
    );
}