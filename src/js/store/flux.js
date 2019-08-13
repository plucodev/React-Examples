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

export default getState;
