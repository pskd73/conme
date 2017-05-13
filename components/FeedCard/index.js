import React, { Component, PropTypes } from "react";
import {
    Card,
    CardHeader,
    CardText,
    CardMedia,
    CardActions
} from "material-ui";
import moment from "moment";

class FeedCard extends Component {

    render() {
        return (
            <Card>
                <CardHeader
                    title={this.props.author}
                    subtitle={moment(this.props.time).fromNow()}
                    avatar={this.props.avatar} />
                <CardText>
                    { this.props.message }
                </CardText>
            </Card>
        );
    };

}

export const FeedType = {
    author: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    time: PropTypes.instanceOf(Date).isRequired,
    message: PropTypes.string.isRequired
};

FeedCard.propTypes = FeedType;

export default FeedCard;
