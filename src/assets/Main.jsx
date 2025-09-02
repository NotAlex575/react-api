import axios from "axios";
import { useEffect, useState } from "react";
import CardPersonaggio from "./cardPersonaggio";


const Main = () => {
    const [personaggi, setPersonaggi] = useState([]);

    const fetchPersonaggi = () => {
        axios.get("https://lanciweb.github.io/demo/api/actors/").then((resp) => {
            console.log(resp);
        })
    }

    return(
        <main>
            <div className="container">
                <div className="row">
                    <CardPersonaggio></CardPersonaggio>
                    <CardPersonaggio></CardPersonaggio>
                    <CardPersonaggio></CardPersonaggio>
                    <CardPersonaggio></CardPersonaggio>
                    <CardPersonaggio></CardPersonaggio>
                    <CardPersonaggio></CardPersonaggio>
                    <CardPersonaggio></CardPersonaggio>
                    <CardPersonaggio></CardPersonaggio>
                    <CardPersonaggio></CardPersonaggio>
                    <CardPersonaggio></CardPersonaggio>
                    <CardPersonaggio></CardPersonaggio>
                    <CardPersonaggio></CardPersonaggio>
                </div>
            </div>
            <br /><br />
        </main>
    )
}

export default Main;