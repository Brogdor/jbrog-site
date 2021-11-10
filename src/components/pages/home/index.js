import React from 'react';
import { Link } from '../../core/link';
import { Text } from '../../core/text';

import './home.scss';

export function Home(props) {
    return (
        <div className="home-page">
            <div>
                <Text>Jon Brogdon, Software Engineer</Text>
            </div>
            <div>
                <Link to="/about">About</Link>
            </div>
        </div>
    );
}