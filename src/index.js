import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.scss';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import App from './routes/App';

const client = new ApolloClient({
	uri: 'http://localhost:3100/',
});

ReactDOM.render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>,
	document.getElementById('app')
);
