import { IconCheck } from "@tabler/icons";
import { useContext } from "react";
import { Contexto } from "../../pages/contexto/loja";
import Botao from "../template/Botao";
import Janela from "../template/Janela";

export default function FinalizarCompra() {
    const {total, setCarrinho} = useContext(Contexto);

    function finalizar() {
        window.alert("Compra realizada com sucesso!");
        setCarrinho(()=>[]);
    }

    return (
        <Janela titulo="Finalizar" cor="bg-red-600" vertical>
            <span className="text-2xl text-center">
                Total: <strong>{total().toFixed(2)}</strong>
            </span>

            <Botao
                cor="bg-white text-red-600"
                icone={<IconCheck />}
                texto="Finalizar"
                onClick={finalizar}
            />
        </Janela>
    );
}
