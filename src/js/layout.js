import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import SearchBar from "./component/searchBar";
import { Navbar } from "./component/navbar";
import { Starwars } from "./component/starwars";
import { Queue } from "./component/queue";
import { Contact } from "./component/contact";
import AddContact from "./component/addContact";
import EditContact from "./component/editContact";
import { Footer } from "./component/footer";
import { Todo } from "./component/todo";
import Calculator from "./component/calculator";
import Person from "./component/person";

//create your first component
export class Layout extends React.Component {
	render() {
		//the basename is used when your project is published in a subdirectory and not in the root of the domain
		// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
		const basename = process.env.BASENAME || "";

		return (
			<div className="d-flex flex-column h-100">
				<BrowserRouter basename={basename}>
					<ScrollToTop>
						<Navbar />
						<SearchBar />
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/calculator" component={Calculator} />
							<Route exact path="/todo" component={Todo} />
							<Route exact path="/form" component={Person} />
							<Route exact path="/startwars" component={Starwars} />
							<Route exact path="/queue" component={Queue} />
							<Route exact path="/contact" component={Contact} />

							<Route exact path="/add-contact" component={AddContact} />
							<Route exact path="/edit-contact/:theid" component={EditContact} />
							<Route path="/demo" component={Demo} />
							<Route path="/single/:theid" component={Single} />
							<Route render={() => <h1>Not found!</h1>} />
						</Switch>
						<Footer />
					</ScrollToTop>
				</BrowserRouter>
			</div>
		);
	}
}

export default injectContext(Layout);
