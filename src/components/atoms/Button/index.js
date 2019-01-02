import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './Button.scss';

class Button extends Component {
  render() {
    const { children, style, palette, type } = this.props;

    return (
      <button
        type={type}
        className={classnames(
          styles.wrapper,
          styles[style],
          styles[palette]
        )}
      >
        {children}
      </button>
    );
  }
}

Button.defaultProps = {
  floating: false,
  palette: 'default',
  style: 'default',
  type: 'button'
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  floating: PropTypes.bool,
  palette: PropTypes.string,
  type: PropTypes.string
};

export default Button;
