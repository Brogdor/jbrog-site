import React from 'react';
import { Link } from '../../core/link';
import { Text } from '../../core/text';

import './home.scss';

export function Home(props) {
    return (

        <div className="home-page">
            <Text>Jon Brogdon, Software Engineer</Text>
            <div className="link-list">
                <Link to="https://github.com/brogdor">Github</Link>
                <Link to="https://linkedin.com/in/brogdor">LinkedIn</Link>
            </div>
        </div>
    );
}