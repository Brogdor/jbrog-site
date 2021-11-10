import React from 'react';
import * as _ from 'lodash';
import classnames from 'classnames';
import propTypes from 'prop-types';
import { Link as RRLink } from 'react-router-dom';
import { buildModifiers } from '../../../lib/helpers';
import './link.scss';

const modifierProps = ['color', 'display', 'size'];

export function Link(props) {
    const externalLink = props.to.indexOf('/') !== 0;
    const combinedProps = {
        ...props,
        className: classnames('core-link', props.className, ...buildModifiers(modifierProps, props)),
        target: externalLink ? '_blank' : null
    };

    if (externalLink) {
        combinedProps.href = props.to;
        return <a {...combinedProps} />
    } 
    return (
        <RRLink {...combinedProps} />
    );
};

Link.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    display: propTypes.oneOf(['regular']),
    to: propTypes.string.isRequired
};

Link.defaultProps = {
    color: 'regular',
    display: 'regular',
    size: 'regular'
};