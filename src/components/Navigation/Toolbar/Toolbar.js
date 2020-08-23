import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import Aux from '../../../hoc/Aux';

const toolbar = (props) => (
    <Aux>
        <NavigationItems link='Art Portfolio'/>
        <NavigationItems link='Web Dev Portfolio'/>
        <NavigationItems link='Blog'/>
        <NavigationItems link='Contact'/>
    </Aux>
)

export default toolbar;