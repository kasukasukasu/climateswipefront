import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        maxWidth: 20,
    },
    media: {
        // ⚠️ object-fit is not supported by IE11.
        objectFit: 'cover',
    },
};

function TheSwipe (props) {
    // const { classes } = props;
    return (
        <Card className="container text-center my-auto">
        {/*<Card className={classes.card}>*/}
            <CardActionArea>
                {/*<CardMedia*/}
                    {/*component="img"*/}
                    {/*className={classes.media}*/}
                    {/*height="140"*/}
                    {/*image="./scss/img/bg-callout.jpg"*/}
                    {/*title="joku ilmastokuva"*/}
                {/*/>*/}

                <CardContent className="container text-center my-auto">
                    <Typography gutterBottom variant="headline" component="h2">Päivä kasvissyöjänä</Typography>
                    <Typography component="p"></Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className="container text-center my-auto">
                <Button className="container text-center my-auto" size="small" color="primary">
                    Jaa
                </Button>
                <Button className="container text-center my-auto" size="small" color="primary">
                    Lisätietoja tästä haasteesta
                </Button>
            </CardActions>
        </Card>
    );
}

TheSwipe.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TheSwipe);