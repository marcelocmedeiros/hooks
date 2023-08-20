import Flex from "../template/Flex";
import { useId } from "react";
export default function InputComId(props) {
    const id = useId();
    return (
        <Flex center>
            <label className="m-1" htmlFor={id}>
                {props.label}
            </label>
            <input id={id} className="m-2 text-gray-600 p-2 rounded-md" type="text"></input>
        </Flex>
    );
}