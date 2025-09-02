import axios from "axios";
import { useEffect, useState } from "react";
import CardPersonaggio from "./cardPersonaggio";


const Main = () => {
    const [personaggi, setPersonaggi] = useState([]);
    const [genere, setGenere] = useState("");

    const fetchPersonaggi = (tipo) => {
        if (tipo === "uomini") {
            axios.get("https://lanciweb.github.io/demo/api/actors/").then((resp) => {
                setPersonaggi(resp.data);
            });
        } 
        else if (tipo === "donne") {
            axios.get("https://lanciweb.github.io/demo/api/actresses/").then((resp) => {
                setPersonaggi(resp.data);
            });
        }
    };

    useEffect(() => {
        if (genere) {
            fetchPersonaggi(genere);
        }
    }, [genere]);


    return(
        <main>
            <div className="container">
                <div className="row margin-bottom-40px">
                    <button className="button-maschi" onClick={() => setGenere("uomini")}>Uomini</button>
                    <button className="button-donne" onClick={() => setGenere("donne")}>Donne</button>
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