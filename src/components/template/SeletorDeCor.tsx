import useTema from "../../data/hooks/useTema";
import Botao from "./Botao";
import Flex from "./Flex";

export default function SeletorDeCor(){
    let {cores, setCorDestaque} = useTema();

    let listaCores = cores.map(cor=>{
        return <Botao key={cor} cor={`bg-${cor}`} 
        onClick={()=>{setCorDestaque(cor)}}/>
    })

    return (<Flex center gap={4} className={`absolute right-3 top-20`}>
        {listaCores}
    </Flex>)
}