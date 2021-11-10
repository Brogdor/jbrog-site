import React from 'react';
import classnames from 'classnames';
import propTypes from 'prop-types';
import { buildModifiers } from '../../../lib/helpers';

import './paragraph.scss';

const modifiers = ['size'];

export function Paragraph(props) {
    return (
        <p className={classnames('core-paragraph', props.className, ...buildModifiers(modifiers, props))}>{props.children}</p>
    )
};

Paragraph.propTypes = {
    size: propTypes.oneOf(['regular'])
};

Paragraph.defaultProps = {
    size: 'regular'
};

