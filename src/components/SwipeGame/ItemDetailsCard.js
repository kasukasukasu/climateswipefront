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
import './ItemDetailCards.css'
import {createRelation} from "../../RestFunctions";
import ProgressBar from "../ChoiceList/ProgressBar";


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

    handleButtonClick(userid, taskid, choice, rating, e) {
        e.preventDefault();
        this.props.goToNext();
        console.log('The link was clicked.');
        var data = ({choice: choice, user_id: userid, task_id: taskid});
        console.log(data);
        this.props.counting(rating, choice );
        createRelation(data);
    }

    render() {
        const {classes} = this.props;
        const task = this.props.item;
        return (
            <div className="stack-container">
                {this.props.authentication ? (<p></p>) : (
                    <div>
                <a className="button-header" href="/login">
                    Kirjaudu tallentaaksesi valintoja</a><br/><br/><br/>
                    </div>
                )}
                <Card className="card-top">
                    <CardContent>
                        <h2>{task.title}</h2>
                        <p>{task.content1}</p>
                    </CardContent>
                    <CardActions className={classes.actions} disableActionSpacing>
                        <IconButton className={classnames(classes.expand, {
                            [classes.expandOpen]: this.state.expanded,
                        })} onClick={this.handleExpandClick}
                                    aria-expanded={this.state.expanded}
                                    aria-label="Show more"><ExpandMoreIcon/></IconButton>
                    </CardActions>
                    <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <p className="cardContentHeader">Lisätietoja: </p>
                            <p>{task.content2}</p>
                            <p className="cardContentHeader">Haasteen vaikuttavuus: </p>
                            <p>-{task.rating}kg hiilidioksidipäästöjä vuodessa</p>
                        </CardContent>
                    </Collapse>
                </Card>
                <br/>
                <div className="buttons">
                <button className="card-button pass"
                        onClick={this.handleButtonClick.bind(this, this.props.user, task.id, "0", task.rating)}>Ei</button>
                <button className="card-button like"
                        onClick={this.handleButtonClick.bind(this, this.props.user, task.id, "1", task.rating)}>Kyllä</button>
                </div>
                <br/>
                <br/>
                <div>
                    {this.props.authentication ? (
                    <a className="button-header" href="/choices">
                        Siirry tästä katsomaan omia valintojasi
                    </a>
                    ) :( <p></p>) }
                </div>
            </div>
        );
    }
}


ItemDetailsCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ItemDetailsCard);

