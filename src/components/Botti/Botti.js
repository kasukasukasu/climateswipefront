import React,{Component} from "react";
import "./Botti";
import ClimateChoice from "../../ClimateChoice.png";


class Botti extends Component {
    constructor() {
        super();
        this.state = {
            shown: true
        };
    }

    toggle() {
        this.setState({
            shown: !this.state.shown,
            hidden : !this.state.hidden
        });
    }

    render() {
        // let shown = {
        //     display: this.state.shown ? "block" : "none"
        // };

        let hidden = {
            display: this.state.hidden ? "block" : "none"
        };

        return (
            <div>
                <a className="toggle-a" onClick={this.toggle.bind(this)}>
                    <img className="botti"  alt="botti"  src={ClimateChoice} circle width="200" height="200"/></a>
                <p>Aloita botille juttelu klikkaamalla logoa</p>
                <div style={hidden}>
                    <div class="container-fluid tausta-4 text-center">
                        <h3>Juttele kanssani asiasta</h3><br/>
                        <div>
                            <iframe title="botti" className="botti"
                                    allow="microphone;"
                                    width="350"
                                    height="430"
                                    src="https://console.dialogflow.com/api-client/demo/embedded/36f27c67-ae72-4f1f-b3ea-6cb5bb2533e9">
                            </iframe>
                        </div>
                        </div>
                    <div className="botti"></div>
                    </div>
                </div>
        );
    }
}


export default Botti;

