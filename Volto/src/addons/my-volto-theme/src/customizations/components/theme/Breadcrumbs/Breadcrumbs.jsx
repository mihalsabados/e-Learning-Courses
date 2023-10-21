import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container, Segment } from 'semantic-ui-react';
import { defineMessages, useIntl } from 'react-intl';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { getBreadcrumbs } from '@plone/volto/actions';
import { getBaseUrl, hasApiExpander } from '@plone/volto/helpers';

const messages = defineMessages({
  home: {
    id: 'Home',
    defaultMessage: 'Home',
  },
  breadcrumbs: {
    id: 'Breadcrumbs',
    defaultMessage: 'Breadcrumbs',
  },
});

const BreadcrumbsComponent = ({ pathname }) => {
  const intl = useIntl();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!hasApiExpander('breadcrumbs', getBaseUrl(pathname))) {
      dispatch(getBreadcrumbs(getBaseUrl(pathname)));
    }
  }, [dispatch, pathname]);

  return (
    <Segment
      role="navigation"
      aria-label={intl.formatMessage(messages.breadcrumbs)}
      className="breadcrumbs"
      secondary
      vertical
    >
      <Container>
        <div className="breadcrumb-holder">
          <p>Home Page &nbsp; {'>'} &nbsp; e-Learning Courses</p>
        </div>
        <div className="user-role">
          <p>admin</p>
        </div>
      </Container>
    </Segment>
  );
};

BreadcrumbsComponent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default BreadcrumbsComponent;
