import React, { Fragment } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// App components
import Spinner from '../layout/Spinner';

// Bootstrap components
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

const EventPreview = ({ events: { events, loading } }) => {
  const eventElements =
    events &&
    events.reverse().map(event => {
      return (
        <Card key={event._id} className='mt-1 mb-4 text-left'>
          <Link to={`/event/${event._id}`}>
            <Card.Img variant='top' src={event.coverImage} />
            <Container className='py-2'>
              <span className='card-date text-uppercase'>
                {moment(event.date).format('MMMM Do, h:mm a')}
              </span>
              <Card.Subtitle className='mb-2 text-muted'>{event.categories}</Card.Subtitle>
              <Card.Title className='mt-2'>{event.title}</Card.Title>
            </Container>
          </Link>
        </Card>
      );
    });

  return loading && events === null ? <Spinner /> : <Fragment>{eventElements}</Fragment>;
};

EventPreview.propTypes = {
  events: PropTypes.object
};

const mapStateToProps = state => ({
  events: state.events
});

export default connect(mapStateToProps)(EventPreview);
