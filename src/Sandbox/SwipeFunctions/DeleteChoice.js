// import React, {Component} from "react";
// import {deleteFromRelations} from "../../RestFunctions";
// import '../../components/ChoiceList/ChoiceList.css';
//
// class DeleteChoice extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {id: ''};
//         console.log(this.state.id, "toimisko HALOO");
//     }
//
//     componentDidMount() {
//         console.log(this.props.id, "ANANAA")
//         this.deleteThisOne();
//     }
//
//     deleteThisOne(deleteThisTask) {
//         console.log(deleteThisTask, " Tämä pitäisi poistaa");
//         deleteFromRelations(deleteThisTask);
//     }
//
//     //sets fetched tasks to this.state
//     relationDeleted = (id) => {
//         this.setState({relations: id});
//         window.location.reload();
//     };
//
//     render() {
//         return (
//             {deleteFromRelations}
//         );
//     }
// }
//
// export default DeleteChoice;