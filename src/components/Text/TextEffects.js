import React from 'react';
import PropTypes from 'prop-types';

import keyMirror from 'keymirror';
import { helpers } from '../../utils/';

const TEXT_TAGS = keyMirror({
  condensed: null,
});

const CondensedText = ({
  children,
  className,
  condenseThreshold = 0,
  enableCopyIcon = false,
  style,
  prefix = 4,
  suffix = 4,
  theme: { text: { iconActive, iconInactive }, glyphs: { copyIcon } },
}) => (
  <React.Fragment>
    <span
      className={`
        ${enableCopyIcon ? iconActive : iconInactive}
        ${className} bpanel-ui-text-condensed
      `}
      onClick={() => !enableCopyIcon && helpers.onCopy(children)}
      style={style}
      title={`${children}`}
    >
      {helpers.condenseText(children, prefix, suffix, condenseThreshold)}
    </span>{' '}
    {enableCopyIcon && (
      <i
        className={`fa fa-copy ${copyIcon}`}
        onClick={() => helpers.onCopy(children)}
      />
    )}
  </React.Fragment>
);

CondensedText.propTypes = {
  children: PropTypes.string.isRequired,
  condenseThreshold: PropTypes.number,
  enableCopyIcon: PropTypes.bool,
  prefix: PropTypes.number,
  suffix: PropTypes.number,
};

const TextEffects = {
  [TEXT_TAGS.condensed]: CondensedText,
};

export default TextEffects;
