import { Container, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { useSelector, shallowEqual } from 'react-redux';

import { Logo } from '@plone/volto/components';

const Header = ({ pathname }) => {
  const token = useSelector((state) => state.userSession.token, shallowEqual);

  return (
    <Segment basic className="header-wrapper" role="banner">
      <Container>
        <div className="header">
          <div className="logo-nav-wrapper">
            <div className="logo">
              <Logo />
            </div>
          </div>
        </div>
      </Container>
    </Segment>
  );
};

export default Header;

Header.propTypes = {
  token: PropTypes.string,
  pathname: PropTypes.string.isRequired,
  content: PropTypes.objectOf(PropTypes.any),
};

Header.defaultProps = {
  token: null,
  content: null,
};
