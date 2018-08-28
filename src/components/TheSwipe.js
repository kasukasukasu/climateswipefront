import React, {Component} from 'react';
import Swipe from 'react-easy-swipe';

class TheSwipe extends Component {
    onSwipeStart(event) {
        console.log('Start swiping...', event);
    }

    onSwipeMove(position, event) {
        console.log(`Moved ${position.x} pixels horizontally`, event);
        console.log(`Moved ${position.y} pixels vertically`, event);
    }

    onSwipeEnd(event) {
        console.log('End swiping...', event);
    }

    render() {
        const boxStyle = {

            width: '30%',
            height: '300px',
            border: '1px solid black',
            background: '#ccc',
            padding: '20px',
            fontSize: '2em'
        };

        return (
            <Swipe
                onSwipeStart={this.onSwipeStart}
                onSwipeMove={this.onSwipeMove}
                onSwipeEnd={this.onSwipeEnd}>
                <div style={boxStyle}>Tehtävät</div>
            </Swipe>
        );
    }
}

export default TheSwipe;