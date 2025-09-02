const CardPersonaggio = ({ personaggio }) => {
    const { name, image, birth_year, nationality, biography, known_for, awards } = personaggio;
    return (
        <div className="col-4 bg-darkBlue">
            <h2 className="color-white margin-bottom-40px margin-top-40px">{name}</h2>
            <img src={image} alt={name} className="margin-bottom-40px img-fit" />
            <div className="row color-white margin-bottom-40px">
                <p>{birth_year}</p>
                <p>{nationality}</p>
            </div>
            <p className="color-white margin-bottom-40px w-80per">{biography}</p>
            <p className="color-red margin-bottom-40px">{known_for}</p>
            <p className="color-yellow margin-bottom-40px">{awards}</p>
        </div>
    );
};
export default CardPersonaggio;