import React from 'react';
import classnames from 'classnames';

import './paragraph.scss';

export function Paragraph(props) {
    return (
        <p className={classnames('core-paragraph', props.className)}>{props.children}</p>
    )
};
