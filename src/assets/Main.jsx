import axios from "axios";
import { useEffect, useState } from "react";
import CardPersonaggio from "./cardPersonaggio";


const Main = () => {
    const [personaggi, setPersonaggi] = useState([]);
    const [personaggiUomini, setPersonaggiUomini] = useState("");
    const [personaggiDonne, setPersonaggiDonne] = useState("");

    const fetchPersonaggi = () => {
        axios.get("https://lanciweb.github.io/demo/api/actors/").then((resp) => {
            //console.log(resp);  //MILESTONE 1
            setPersonaggi(resp.data)
        })
    }

    useEffect(() => {
        fetchPersonaggi();
    }, []);

    return(
        <main>
            <div className="container">
                <div className="row margin-bottom-40px">
                    <button className="button-maschi">Uomini</button>
                    <button className="button-donne">Donne</button>
                </div>
                <div className="row">
                    {personaggi.map((personaggio) =>{
                        return <CardPersonaggio key={personaggio.id} personaggio={personaggio}></CardPersonaggio>
                    })}
                </div>
            </div>
            <br /><br />
        </main>
    )
}

export default Main;