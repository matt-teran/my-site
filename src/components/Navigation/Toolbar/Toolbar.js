import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import Aux from '../../../hoc/Aux';
import classes from './Toolbar.module.css';

const toolbar = (props) => (
    <div className={classes.Toolbar}>
        <div className={classes.Logo}>
            Hey!
        </div>
        <div className={classes.NavLinks}>
            <NavigationItems link='Art Portfolio'/>
            <NavigationItems link='Web Dev Portfolio'/>
            <NavigationItems link='Blog'/>
            <NavigationItems link='Contact'/>
        </div>
    </div>
)

export default toolbar;