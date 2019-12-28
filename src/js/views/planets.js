import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { PeopleCard } from "./../component/people-card";
import { Context } from "./../store/appContext";

export const Planets = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="row">
				{!!store.planets.results &&
					store.planets.results.map((item, i) => {
						return (
							<div className="col-md-4" key={i}>
								<PeopleCard item={item} />
							</div>
						);
					})}
			</div>
			<div className="row">
				<div className="col-md-12 d-flex justify-content-between">
					<button
						disabled={store.planets.previous === null ? true : false}
						className="btn btn-info btn-md"
						onClick={() => actions.getPlanets(store.planets.previous)}>
						Previus
					</button>
					<button
						disabled={store.planets.next === null ? true : false}
						className="btn btn-info btn-md"
						onClick={() => actions.getPlanets(store.planets.next)}>
						Next
					</button>
				</div>
			</div>
		</div>
	);
};
