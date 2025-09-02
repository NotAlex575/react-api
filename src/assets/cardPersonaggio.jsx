const CardPersonaggio = () =>{
    return(
        <div className="col-4 bg-darkBlue">
            <h2 className="color-white margin-bootm-10px">Nome</h2>
            <img src="../public/vite.svg" className="margin-bootm-10px" alt="" />
            <div className="row color-white margin-bootm-10px">
                <p>anno di nascita</p>
                <p>nazionalità</p>
            </div>
            <p className="color-white margin-bootm-10px">Biografia</p>
            <p className="color-red">riconoscimenti</p>
        </div>
    )
}

export default CardPersonaggio;