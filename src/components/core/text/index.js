import React from 'react';
import classnames from 'classnames';

import './text.scss';

export function Text(props) {
    return (
        <span className={classnames('core-text')}>{props.children}</span>
    )
};
