import React, { useContext } from "react";
import "../../styles/home.scss";
import { PlanetsCard } from "./../component/planets-card";
import { Context } from "./../store/appContext";

export const Planets = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid bg-dark pt-3">
			<div className="row">
				{!!store.planets.results &&
					store.planets.results.map((item, i) => {
						return (
							<div className="col-md-4" key={i}>
								<PlanetsCard item={item} id={item.name} />
							</div>
						);
					})}
			</div>
			<div className="row">
				<div className="col-md-12 d-flex justify-content-between">
					<button
						disabled={store.planets.previous === null ? true : false}
						className="btn btn-info btn-md my-3"
						onClick={() => actions.getPlanets(store.planets.previous)}>
						Previous
					</button>
					<button
						disabled={store.planets.next === null ? true : false}
						className="btn btn-info btn-md my-3"
						onClick={() => actions.getPlanets(store.planets.next)}>
						Next
					</button>
				</div>
			</div>
		</div>
	);
};
