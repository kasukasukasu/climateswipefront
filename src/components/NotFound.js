import React, {Component} from "react";

class NotFound extends Component {
    render() {
        return (
            <div>
                <h2>
                    Valitettavasti hakemaasi sivua ei löytynyt.
                </h2>
                <br/>
                <br/>
                <a className="button-header" href="/">Palaa etusivulle</a>
            </div>
        )
    }
 }

 export default NotFound;