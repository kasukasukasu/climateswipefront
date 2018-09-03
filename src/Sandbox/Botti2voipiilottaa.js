import React,{Component} from "react";
import "../components/Botti/Botti";
import {Image} from "react-bootstrap"
import ClimateChoice from "../../ClimateChoice.png";

// const Botti = () => (


class Botti extends Component {
    constructor() {
        super();
        this.state = {
            shown: true
        };
    }

    toggle() {
        this.setState({
            shown: !this.state.shown
        });
    }

    render() {
        let shown = {
            display: this.state.shown ? "block" : "none"
        };
        return (
            <div>
                <a className="toggle-a" onClick={this.toggle.bind(this)}>
                    <img
                        className="toggleimage"
                        alt="botti"
                        Image src={ClimateChoice} circle width="200" height="200"/>
                </a>
                <p>Show/Hide</p>
                <div style={shown}>
                    <div class="container-fluid tausta-4 text-center">
                        <h3>Juttele kanssani</h3><br/>
                        <div>
                            <iframe title="botti" className="container text-center my-auto"
                                    allow="microphone;"
                                    width="350"
                                    height="430"
                                    src="https://console.dialogflow.com/api-client/demo/embedded/36f27c67-ae72-4f1f-b3ea-6cb5bb2533e9">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Botti;

