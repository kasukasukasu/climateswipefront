import React, {Component} from "react";
import {fetchall} from "../RestFunctions"

class TheSwipe extends Component {
    constructor(props) {
        super(props);
        this.state = {tasks: []};
    }

    componentDidMount() {
        this.getAll();
    }

    getAll() {
        fetchall(this.allFetched)
    }

    allFetched = (data) => {
        this.setState({tasks: data});
        console.log(this.state.tasks);
    };

    render() {
        var tasks = this.state.tasks.map(function (task) {
            return (
                <tr>
                    <td>{task.title}</td>
                    <td>{task.content1}</td>
                    <td>{task.content2}</td>
                    <td>{task.rating}</td>
                </tr>
            );
        });
        // var props = this.props;
        return (
            <div>
                <h2>Kaikki ilmastoteot</h2>
                <hr/>

                <table className="allTasks">
                    <thead>
                    <tr>
                        <th>Otsikko</th>
                        <th>Sisältö 1</th>
                        <th>Sisältö 2</th>
                        <th>Vaikuttavuus</th>
                    </tr>
                    {tasks}
                    </thead>
                </table>
            </div>

        )

    }
}

export default TheSwipe;

