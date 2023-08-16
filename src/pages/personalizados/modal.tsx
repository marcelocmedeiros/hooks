import Botao from "../../components/template/Botao";
import Pagina from "../../components/template/Pagina";
import Flex from "../../components/template/Flex";
import { IconX } from "@tabler/icons";
import useToggle from "../../data/hooks/useToggle";

export default function () {
    const [mostrar, toggleMostrar] = useToggle(false);
    return (
        <Pagina titulo="Modal" subtitulo="Usando um hook personalizado para abrir e fechar uma modal">
            <Botao texto="Abrir" cor="bg-cyan-500" onClick={toggleMostrar} />
            {mostrar ? (
                <Flex center col
                    className={` w-80 h-80 bg-gray-500 text-white 
                                text-2xl p-4 m-4 rounded-md`}>
                    <Botao cor="bg-red-700" tamanho="xl" onClick={toggleMostrar} icone={<IconX />} />
                    <h1 className="mt-5">Clique em X para sair</h1>
                </Flex>
            ) : (
                ""
            )}
        </Pagina>
    );
}