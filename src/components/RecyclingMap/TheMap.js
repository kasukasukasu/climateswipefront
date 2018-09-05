import React,{Component} from "react";
import './TheMap.css';
import blueplaceh from "./mapphBlue.png";
import greenplaceh from "./mapphGreen.png";
import yellowplaceh from "./mapphYellow.png";
import redplaceh from "./mapphRed.png";

class TheMap extends Component {

    render() {
        return (
            <div>
                <div className="container-fluid tausta-4 text-center">
                    <h2>Kartassa vain pääkaupunkiseutu katettu.</h2><br/>
                    <p><img className="map-placeholder1" src={blueplaceh} width="25" height="25" alt="my bluedot"/>Kirpputorit</p>
                    <p><img className="map-placeholder2" src={redplaceh} width="25" height="25" alt="red dot"/>Kontit</p>
                    <p><img className="map-placeholder3" src={yellowplaceh} width="25" height="25" alt="this is blue dot"/>Sortti-asemat</p>
                    <p><img className="map-placeholder4" src={greenplaceh} width="25" height="25" alt="this is stupid"/>Kierrätyskeskukset</p>
                        <div>
                            <iframe title= "recyclingmap" className="map-component" src="https://www.google.com/maps/d/embed?mid=1Ad3ThL2WNF6NgCMawXBaFSNvLjx992er"></iframe>
                        </div><br></br><br></br><br></br><br></br><br/>
                </div>
            </div>
        );
    }
}

export default TheMap;