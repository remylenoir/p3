import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Bootstrap components
import Card from 'react-bootstrap/Card';

const PreviewCard = ({
  type,
  profile: { createdAlerts, createdEvents, favAlerts, favEvents, joinedEvents }
}) => {
  return type === 'createdAlerts' ? (
    <Fragment>
      {/* ----- ALERTS ----- */}
      {createdAlerts.map(alert => (
        <Card key={alert._id} style={{ width: '15rem' }}>
          <Link to={`/alert/${alert._id}`}>
            {alert.imageURL && <Card.Img variant='top' src={alert.imageURL} />}
            <Card.Body>
              <Card.Title>{alert.title}</Card.Title>
              <Card.Text>{alert.description}</Card.Text>
            </Card.Body>
          </Link>
        </Card>
      ))}
    </Fragment>
  ) : type === 'favAlerts' ? (
    <Fragment>
      {favAlerts.map(alert => (
        <Card key={alert._id} style={{ width: '15rem' }}>
          <Link to={`/alert/${alert._id}`}>
            {alert.imageURL && <Card.Img variant='top' src={alert.imageURL} />}
            <Card.Body>
              <Card.Title>{alert.title}</Card.Title>
              <Card.Text>{alert.description}</Card.Text>
            </Card.Body>
          </Link>
        </Card>
      ))}
    </Fragment>
  ) : type === 'createdEvents' ? (
    <Fragment>
      {/* ----- EVENTS ----- */}
      {createdEvents.map(event => (
        <Card key={event._id} style={{ width: '15rem' }}>
          <Link to={`/event/${event._id}`}>
            {event.coverImage && <Card.Img variant='top' src={event.coverImage} />}
            <Card.Body>
              <Card.Title>{event.title}</Card.Title>
              <Card.Text>{event.description}</Card.Text>
            </Card.Body>
          </Link>
        </Card>
      ))}
    </Fragment>
  ) : type === 'joinedEvents' ? (
    <Fragment>
      {joinedEvents.map(event => (
        <Card key={event._id} style={{ width: '15rem' }}>
          <Link to={`/event/${event._id}`}>
            {event.coverImage && <Card.Img variant='top' src={event.coverImage} />}
            <Card.Body>
              <Card.Title>{event.title}</Card.Title>
              <Card.Text>{event.description}</Card.Text>
            </Card.Body>
          </Link>
        </Card>
      ))}
    </Fragment>
  ) : type === 'favEvents' ? (
    <Fragment>
      {favEvents.map(event => (
        <Card key={event._id} style={{ width: '15rem' }}>
          <Link to={`/event/${event._id}`}>
            {event.coverImage && <Card.Img variant='top' src={event.coverImage} />}
            <Card.Body>
              <Card.Title>{event.title}</Card.Title>
              <Card.Text>{event.description}</Card.Text>
            </Card.Body>
          </Link>
        </Card>
      ))}
    </Fragment>
  ) : null;
};

PreviewCard.propTypes = {
  type: PropTypes.string.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile.profile
});

export default connect(mapStateToProps)(PreviewCard);
