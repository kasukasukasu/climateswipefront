// import React, {Component} from 'react';
//
// class Counter extends Component {
//     render() {
//         var count = 0;
//         console.log(this.props.relations);
//         if (this.props.choice === 1) {
//         for (var i = 0; i < this.props.relations.length; i++) {
//             var relation = this.props.relations[i];
//             count -= parseInt(relation.task.rating);
//             }
//         } else {
//             for (var i = 0; i < this.props.relations.length; i++) {
//                 var relation1 = this.props.relations[i];
//                 count -= parseInt(relation1.task.rating);
//             }
//         }
//         return (
//             <div>
//                 <p>{count}</p>
//             </div>
//         )
//
//     }
// }
//
// export default Counter;