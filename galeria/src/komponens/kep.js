import "./Kep.css"

function Kep(props) {
    function kattintasKezelo(){
        console.log(props.adat.id);
        console.log(props.adat.nagyKepCsere);
        props.nagyKepCsere(props.adat.id)
    }
    return (
        <div className="kep">
            <img src={props.adat.src} alt={props.adat.src} onClick={kattintasKezelo}/>
        </div>
    )
}

export default Kep;