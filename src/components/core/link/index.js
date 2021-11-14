import React from 'react';
import classnames from 'classnames';
import propTypes from 'prop-types';
import { Link as RRLink } from 'react-router-dom';
import './link.scss';


export function Link(props) {
    const externalLink = props.to.indexOf('/') !== 0;

    if (externalLink) {
        return <a {...props} href={props.to} target="_blank" className={classnames(props.className, 'core-link')} />
    } 
    return (
        <RRLink {...props} className={classnames(props.className, 'core-link')} />
    );
};

Link.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    to: propTypes.string.isRequired
};