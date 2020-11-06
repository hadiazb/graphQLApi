import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import './style.scss';

const GET_MESSAGE = gql`
	{
		messages {
			_id
			content
			title
			author
		}
	}
`;

const MessageList = () => {
	const { loading, error, data } = useQuery(GET_MESSAGE);

	if (loading) {
		return <h1>Cargando ...</h1>;
	}

	if (error) {
		return <h1>Hay un puto error:{error}</h1>;
	}

	return (
		<div className='content'>
			<ul className='content__list'>
				{data.messages.map((message) => (
					<li className='content__list-item' key={message._id}>
						<div className='container'>
							<h4 className='container__title'>{message.title}</h4>
							<p className='container__content'>{message.content}</p>
							<p className='container__author'>{message.author}</p>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default MessageList;
