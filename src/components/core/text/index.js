import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';
import { buildModifiers } from '../../../lib/helpers';
import './text.scss';

const modifierProps = ['display', 'size'];

export function Text(props) {
    return (
        <span className={classnames('core-text', ...buildModifiers(modifierProps, props))}>{props.children}</span>
    )
}

Text.propTypes = {
    display: propTypes.oneOf(['regular']),
    size: propTypes.oneOf(['regular'])
};

Text.defaultProps = {
    display: 'regular',
    size: 'regular'
};