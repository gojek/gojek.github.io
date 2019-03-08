import React, { Component } from 'react';
import Link from 'gatsby-link';

import Menu from './menu.jsx';

class Header extends Component {
    render() {
        const { data } = this.props;
        
        return (
            <nav className="navbar fixed-top bg-white navbar-expand-lg navbar-light raleway-bold text-uppercase px-4 py-2">
                <a className="navbar-brand" href="/">
                    <img className="header-logo-width" src="../../images/gojek-logo.png" alt="GOJEK Logo" title="GOJEK" />
                </a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarToggler">
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        {data.map((menuItem, key) => <Menu data={menuItem} currentPage= { this.props.currentPage } key={key} />)}
                    </ul>
                </div>
            </nav>
        );
    }

}

export default Header;