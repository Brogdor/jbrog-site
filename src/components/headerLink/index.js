import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from '../core/link';

import './headerLink.scss';

export function HeaderLink(props) {
    let title;
    if (props.page === "") {
        title = "Home";
    } else {
        title = props.page.charAt(0).toUpperCase() + props.page.slice(1);
    }

    console.log(props.page.slice(1))

    return (
        <Link className={classnames(props.className, 'core-link')} to={`/${props.page}`}>{title}</Link>
    );
}

HeaderLink.propTypes = {
    className: propTypes.string,
    page: propTypes.string.isRequired
};