import * as _ from 'lodash';

export function buildModifiers(modifiers, props) {
    return _.reduce(modifiers, (classes, modifier) => {
        if (props.hasOwnProperty(modifier)) {
            classes.push(`${_.kebabCase(modifier)}-${props[modifier]}`)
        }
        return classes;
    }, []);
}