import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const PeopleCard = props => {
	return (
		<div className="card m-2">
			<div className="card-body p-0">
				<img src="http://placehold.it/600x300" alt="" className="img-fluid" />
				<h4 className="card-title">{props.item.name}</h4>
				<p className="card-text">{props.item.gender}</p>
			</div>
			<div className="card-footer">
				<Link className="btn btn-info btn-block" to="/">
					Ver Mas
				</Link>
			</div>
		</div>
	);
};

PeopleCard.propTypes = {
	item: PropTypes.object
};
