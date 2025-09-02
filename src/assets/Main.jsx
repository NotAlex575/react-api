import axios from "axios";
import { useEffect, useState } from "react";
import CardPersonaggio from "./cardPersonaggio";


const Main = () => {
    const [personaggi, setPersonaggi] = useState([]);
    const [genere, setGenere] = useState("");
    const [searchPersonaggi, setSearchPersonaggi] = useState("")
    const [filteredPersonaggi, setFilteredPersonaggi] = useState([])

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

    useEffect(() => {
        const filtered = personaggi.filter((attore) => {
            return attore.name.toLowerCase().includes(searchPersonaggi.toLowerCase())
        })

        setFilteredPersonaggi(filtered);
    }, [searchPersonaggi, personaggi]); 


    return(
        <main>
            <div className="container">
                <div className="row margin-bottom-40px">
                    <button className="button-maschi" onClick={() => setGenere("uomini")}>Uomini</button>
                    <button className="button-donne" onClick={() => setGenere("donne")}>Donne</button>
                </div>
                <input 
                    type="text" 
                    placeholder="Cerca attore per nome" 
                    className="w-bar-100per"
                    value={searchPersonaggi}
                    onChange={(event) => setSearchPersonaggi(event.target.value)}
                    //ogni volta che si inserisce un contenuto qui (che si trovi o non si trovi nella lista),
                    //la lista si aggiorna
                />
                <div className="row">
                    {filteredPersonaggi.map((personaggio) =>{
                        return <CardPersonaggio key={personaggio.id} personaggio={personaggio}></CardPersonaggio>
                    })}
                </div>
            </div>
            <br /><br />
        </main>
    )
}

export default Main;