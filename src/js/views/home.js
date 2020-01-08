import React, { useContext, useEffect } from "react";
import "../../styles/home.scss";
import { PeopleCard } from "./../component/people-card";
import { Context } from "./../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid bg-dark pt-3">
			<div className="row">
				{!!store.people.results &&
					store.people.results.map((item, i) => {
						return (
							<div className="col-md-4" key={i}>
								<PeopleCard item={item} id={item.name} />
							</div>
						);
					})}
			</div>
			<div className="row">
				<div className="col-md-12 d-flex justify-content-between">
					<button
						disabled={store.people.previous === null ? true : false}
						className="btn btn-info btn-md my-3"
						onClick={() => actions.getPeople(store.people.previous)}>
						Previous
					</button>
					<button
						disabled={store.people.next === null ? true : false}
						className="btn btn-info btn-md my-3"
						onClick={() => actions.getPeople(store.people.next)}>
						Next
					</button>
				</div>
			</div>
		</div>
	);
};
