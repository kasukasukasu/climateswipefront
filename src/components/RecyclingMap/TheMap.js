import React,{Component} from "react";
import './TheMap.css';
import blueph from "./mapphBlue.png";
import greenph from "./mapphGreen.png";
import yellowph from "./mapphYellow.png";
import redph from "./mapphRed.png";

class TheMap extends Component {

    render() {
        return (
            <div>
                <div className="container-fluid tausta-4 text-center">
                    <h2>Kartassa vain pääkaupunkiseutu katettu.</h2><br/>
                    <p><img className="map-placeholder" src={blueph} width="25" height="25"/>Kirpputorit</p>
                    <p><img className="map-placeholder" src={redph} width="25" height="25"/>Kontit</p>
                    <p><img className="map-placeholder" src={yellowph} width="25" height="25"/>Sortti-asemat</p>
                    <p><img className="map-placeholder" src={greenph} width="25" height="25"/>Kierrätyskeskukset</p>
                        <div>
                            <iframe title= "recyclingmap" className="map-component" src="https://www.google.com/maps/d/embed?mid=1Ad3ThL2WNF6NgCMawXBaFSNvLjx992er"></iframe>
                        </div><br></br><br></br><br></br><br></br><br/>
                </div>
            </div>
        );
    }
}

export default TheMap;