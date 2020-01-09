const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			vehicles: {},
			planets: {},
			people: {},
			favorites: []
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
			},
			getFetch: url => {
				return fetch(url);
			},
			toFavorites: (name, opt) => {
				const store = getStore();
				if (opt == "") {
					store.favorites.push(name);
					setStore({
						favorites: store.favorites
					});
				} else {
					store.favorites.splice(store.favorites.indexOf(name), 1);
					setStore({
						favorites: store.favorites
					});
				}
			},
			contains: name => {
				const store = getStore();
				for (var i = 0; i < store.favorites.length; i++) {
					if (store.favorites[i] === name) {
						return true;
					}
				}
				return false;
			}
		}
	};
};

export default getState;
