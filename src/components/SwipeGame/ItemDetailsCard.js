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
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './ActionCards.css'


const styles = theme => ({
    card: {
        maxWidth: 350,
        textAlign: 'center',
        positionAbsolute:'absolulte',

    },
    // media: {
    //     height: 0,
    //     paddingTop: '56.25%', // 16:9
    // },
    expand: {
        marginLeft: 'auto',
        [theme.breakpoints.up('sm')]: {
        },
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
});


class ItemDetailsCard extends Component {
    state = {expanded: false};

    handleExpandClick = () => {
        this.setState(state => ({expanded: !state.expanded}));
    };

    render() {
        const {classes} = this.props;
        const task = this.props.item;
        return (
            <div className="stack-container">
                <Card className={classes.card}>
                    <CardContent>
                        <h1>{task.title}</h1>
                        <p>{task.content1}</p>
                    </CardContent>
                    {/*<CardMedia*/}
                    {/*className={classes.media}*/}
                    {/*image=""*/}
                    {/*title="Ilmastokuva"*/}
                    {/*/>*/}
                    <CardActions className={classes.actions} disableActionSpacing>
                        <IconButton className={classnames(classes.expand, {
                            [classes.expandOpen]: this.state.expanded,
                        })} onClick={this.handleExpandClick}
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
            </div>
        )

        return (
            <div className="stack-container">
                    <h1>Ei tällä hetkellä enempää haasteita,
                        ehdota meille helppoja arkipäivän ympäristöhaasteita</h1>
            </div>

        );
    }
}


ItemDetailsCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ItemDetailsCard);

