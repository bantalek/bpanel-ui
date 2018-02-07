import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite';

import { TEXT_CONSTANTS } from '../../constants';
import { connectTheme } from '../../utils';

const getText = type => TEXT_CONSTANTS.TEXT_ELEMENTS[type];

class Text extends PureComponent {
  static get propTypes() {
    return {
      type: PropTypes.string
    };
  }

  render() {
    const { type = 'span', theme, style, ...otherProps } = this.props;
    const TextElement = getText(type);
    const textStyle = theme.text[type] || {};
    return (
      <TextElement
        className={`${css(textStyle)} ${css(style)}`}
        {...otherProps}
      />
    );
  }
}

export default connectTheme(Text);
