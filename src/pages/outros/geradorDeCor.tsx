import Botao from "../../components/template/Botao";
import Pagina from "../../components/template/Pagina";
import Flex from "../../components/template/Flex";
import Display from "../../components/template/Display";
import useBoolean from "../../data/hooks/useBoolean";
import { useLayoutEffect, useRef, useState } from "react";

export default function () {
    // 1 - Mostrar a div condicionalmente, a div deve aparecer quando clicar
    // em sortear cor e desaparecer quando clicar em apagar cor
    // 2 - Exibir um texto no nosso display: "Clique em sortear", ou uma cor aleatoria
    // 3 - Alterar a cor da div de acordo com a cor aleatória gerada
    const [mostrar, toggleMostrar, mostrarTrue, mostrarFalse] = useBoolean();
    const [texto, setTexto] = useState("Clique em Sortear");
    const ref = useRef<any>();

    function geraCorAleatoria() {
        const numeroAleatorioHexadecimal = Math.floor(Math.random() * 0xffffff);
        const cor = numeroAleatorioHexadecimal.toString(16);
        return cor;
    }

    useLayoutEffect(() => {
        if (mostrar) {
            const cor = geraCorAleatoria();
            setTexto(`#${cor}`);
            ref.current.style.backgroundColor = `#${cor}`;
        } else {
            setTexto("Clique em Sortear");
        }
    }, [mostrar]);

    return (
        <Pagina titulo="Gerador de Cor" subtitulo="Criando exemplos mais complexos com useLayoutEffect">
            <Flex>
                <Botao texto="Sortear Cor" onClick={mostrarTrue} />
                <Botao texto="Apagar Cor" onClick={mostrarFalse} />
            </Flex>
            <Display texto={texto} />
            {mostrar ? <div ref={ref} className="h-32 w-32"></div> : ""}
        </Pagina>
    );
}