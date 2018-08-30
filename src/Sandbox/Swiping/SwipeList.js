// import React, { Component } from "react";
//
// class SwipeList extends Component {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             counter: 1,
//             items: {
//                 [0]: 'http://lorempixel.com/350/65/'
//             }
//         };
//     }
//
//     addImage() {
//         this.setState({
//             counter: this.state.counter + 1,
//             items: {...this.state.items, [this.state.counter]: 'http://lorempixel.com/350/65/'}
//         });
//     }
//
//     removeItem(keyOfItemToRemove) {
//         let nextItems = {};
//         Object.keys(this.state.items).forEach(itemKey => {
//             if (itemKey !== keyOfItemToRemove) {
//                 nextItems[itemKey] = this.state.items[itemKey];
//             }
//         });
//
//         this.setState({items: nextItems});
//     }
//
//     render() {
//         return (
//             <ul className="swipeList">
//                 {Object.keys(this.state.items).map(itemKey =>
//                     <TheSwipe key={`TheSwipe-${itemKey}`} onRemoval={() => this.removeItem(itemKey)}>
//                         <img src={this.state.items[itemKey]}/>
//                     </TheSwipe>
//                 )}
//                 <button
//                     className="swipeList-addButton"
//                     onClick={() => this.addImage()}
//                 >
//                     Add image...
//                 </button>
//             </ul>
//         );
//     }
// }