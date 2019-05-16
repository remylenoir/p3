/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Redux actions
import { getCurrentProfile_ACTION } from '../../actions/profile';

// App components
import Subtitle from '../layout/Headings/Subtitle';
import BookmarkedAlertPrev from './BookmarkedAlertPrev';
import BookmarkedEventPrev from './BookmarkedEventPrev';

// Bootstrap components
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const Bookmarks = ({ user, getCurrentProfile_ACTION, profile }) => {
  useEffect(() => {
    getCurrentProfile_ACTION(user._id);
  }, []);
  return (
    <Container className='inner-view py-3' fluid>
      <Row>
        <Container>
          <h1>My bookmarks</h1>
          <hr />
        </Container>
      </Row>
      <Row className='my-2'>
        <Container fluid>
          <Subtitle title={'Alerts'} />
          <Row>
            <div className='horizontal-scroll'>
              <div className='horizontal-scroll-wrapper'>
                <BookmarkedAlertPrev />
              </div>
            </div>
          </Row>
        </Container>
      </Row>
      <Row className='my-2'>
        <Container fluid>
          <Subtitle title={'Events'} />
          <Row>
            <div className='horizontal-scroll'>
              <div className='horizontal-scroll-wrapper'>
                <BookmarkedEventPrev />
              </div>
            </div>
          </Row>
        </Container>
      </Row>
    </Container>
  );
};

Bookmarks.propTypes = {
  getCurrentProfile_ACTION: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(
  mapStateToProps,
  { getCurrentProfile_ACTION }
)(Bookmarks);