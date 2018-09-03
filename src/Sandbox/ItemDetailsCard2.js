import React, {Component} from "react";
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
// import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import '../components/SwipeGame/ItemDetailCards.css'


class ItemDetailsCard extends Component {
    state = {expanded: false};

    handleExpandClick = () => {
        this.setState(state => ({expanded: !state.expanded}));
    };

    render() {
        const task = this.props.item;
        return (
            <Card className="stack-container">
                <CardContent>
                    <h1>{task.title}</h1>
                    <p>{task.content1}</p>
                </CardContent>
                {/*<CardMedia*/}
                {/*className={classes.media}*/}
                {/*image=""*/}
                {/*title="Ilmastokuva"*/}
                {/*/>*/}
                <CardActions className='text' disableActionSpacing>
                    <IconButton className='expand' onClick={this.handleExpandClick}
                                aria-expanded={this.state.expanded}
                                aria-label="Show more"><ExpandMoreIcon/></IconButton>
                </CardActions>
                <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <p>{task.content2}</p>
                        <p>{task.rating}</p>
                    </CardContent>
                </Collapse>
            </Card>
        );
    }
}


export default (ItemDetailsCard);

