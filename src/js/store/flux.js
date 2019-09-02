const getState = ({ getStore, setStore }) => {
	return {
		store: {
			projects: [
				{
					title: "Calculator",
					description: "Easy Calculator",
					link: "calculator"
				},
				{
					title: "Form",
					description: "Form with Redux",
					link: "form"
				},
				{
					title: "Todo",
					description: "Todo List with Fetch",
					link: "todo"
				},
				{
					title: "Contact",
					description: "Contact Manager with Fetch",
					link: "contact"
				},
				{
					title: "Starwars",
					description: "Starwars with Fetch",
					link: "starwars"
				},
				{
					title: "Queue",
					description: "Queue with Twilio",
					link: "queue"
				}
			],
			todos: [],
			contacts: [],
			token: null,
      currentUser: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			data: () => {
				fetch("https://api.github.com/users/plucodev")
					.then(response => response.json())
					.then(data => {
						setStore({ test: data });
					});
			},
			login: credentials => {
				console.log("Credentials:", credentials);
			},
			addContact: (name, email, address, phone, props) => {
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						full_name: name,
						email: email,
						address: address,
						phone: phone,
						agenda_slug: "pluco"
					})
				}).then(() => {
					fetch("https://assets.breatheco.de/apis/fake/contact/agenda/pluco")
						.then(response => response.json())
						.then(data => {
							setStore({ contacts: data });
						});
				});
				props.history.push("/contact");
			},
			deleteContact: id => {
				fetch("https://assets.breatheco.de/apis/fake/contact/" + id, {
					method: "DELETE",
					headers: { "Content-Type": "application/json" }
				}).then(() => {
					fetch("https://assets.breatheco.de/apis/fake/contact/agenda/pluco")
						.then(response => response.json())
						.then(data => {
							setStore({ contacts: data });
						});
				});
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};
// getState.propTypes = {
// 	history: PropTypes.object
// };
export default getState;
