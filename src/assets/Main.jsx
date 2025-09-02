import axios from "axios";
import { useEffect, useState } from "react";



const Main = () => {
    const [personaggi, setPersonaggi] = useState([]);

    const fetchPersonaggi = () => {
        axios.get("https://lanciweb.github.io/demo/api/actors/").then((resp) => {
            console.log(resp);
        })
    }

    return(
        <main>
            <button className="" onClick={fetchPersonaggi}>carica personaggi nella console</button>
        </main>
    )
}

export default Main;