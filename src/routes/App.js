import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';
import Navbar from '../containers/Navbar/index';
import MessageList from '../components/MessageList/index';
import MessageForm from '../components/MessageForm/index';

const App = () => {
	return (
		<Router>
			<Navbar>
				<Switch>
					<Route path='/list' exact component={MessageList} />
					<Route path='/form' exact component={MessageForm} />
				</Switch>
			</Navbar>
		</Router>
	);
};

export default App;
