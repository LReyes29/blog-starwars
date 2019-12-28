const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			vehicles: {},
			planets: {},
			people: {}
		},
		actions: {
			getVehicles: url => {
				fetch(url)
					.then(resp => resp.json())
					.then(data => setStore({ vehicles: data }));
			},
			getPlanets: url => {
				fetch(url)
					.then(resp => resp.json())
					.then(data => setStore({ planets: data }));
			},
			getPeople: url => {
				fetch(url)
					.then(resp => resp.json())
					.then(data => setStore({ people: data }));
			}
		}
	};
};

export default getState;
