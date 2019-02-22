import React, { Component } from "react";
import { Link } from 'react-scroll';

class Menu extends Component {
    render() {
        const { data, currentPage } = this.props;

        return <li className={'mx-2 header-menu nav-item ' + (currentPage === data.link || (~currentPage.indexOf('/careers/') && data.name === 'Careers') || ((currentPage === '/gojek-expansion/' || currentPage === '/go-viet/') && data.name === 'News') ? 'active' : '')}>
            {data.src !== 'gomakeimpact' && data.src !== 'superapp' && <a className={data.type === 'button' ? 'header-btn btn btn-success rounded-1 raleway-bold green-apply-btn' : 'nav-link'} href={data.link}>
                {data.name}
                {currentPage === data.link ? <span className="sr-only">
                    (current)
              </span> : ''}
            </a>}
            {(data.src === 'gomakeimpact' || data.src === 'superapp') &&
                <Link
                    to={data.link}
                    spy={true}
                    smooth={true}
                    className="nav-link text-success scroll"
                    offset={-50}
                >
                    {data.name}
                </Link>
            }
        </li>
    }
}

export default Menu;