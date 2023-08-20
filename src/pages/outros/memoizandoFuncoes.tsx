import Display from "../../components/template/Display";
import Flex from "../../components/template/Flex";
import Pagina from "../../components/template/Pagina";
import InputFormatado from "../../components/formulario/InputFormatado";
import BotaoMemoizado from "../../components/template/BotaoMemoizado";
import { useState, useCallback } from "react";

export default function(){
    const [quantidade, setQuantidade] = useState(0);

    const finalizar = useCallback(function(e){
        e.preventDefault();
        window.alert("Compra finalizada!");
        // window.alert(`${quantidade} produtos`);
        setQuantidade(0);
    },[]);

    return <Pagina titulo="Memoizando Funções" subtitulo="Entendendo o hook useCallback">
        <Display texto="Quantos produtos você quer?"/>
        <form>
            <Flex col center>
                <InputFormatado valor={quantidade} tipo="number"
                onInput={(e)=>setQuantidade(+e.target.value)}></InputFormatado>
                <BotaoMemoizado texto="Confirmar" onClick={finalizar}/>
            </Flex>
        </form>
    </Pagina>
}