import React, { Component } from "react";

class Menu extends Component {
	render() {
		const { data, currentPage } = this.props;
		return(
			<li className={"mx-3 nav-item " + ((currentPage === data.link || (~currentPage.indexOf("/careers/") && data.name === 'Careers') || (currentPage === '/gojek-expansion' && data.name === 'News'))? 'active' : '')}>
				<a 
					className={data.type === 'button' ? "btn btn-success rounded-1 raleway-bold green-apply-btn" : "nav-link"} 
					href = { data.link }
				>
					{data.name}
					 { currentPage === data.link ? <span className="sr-only">(current)</span> : '' } 
				</a>
			</li>
		);
	}
}

export default Menu;