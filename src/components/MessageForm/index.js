import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { Redirect, Link } from 'react-router-dom';
import { gql } from 'apollo-boost';
import './style.scss';

const CREATE_MESSAGE = gql`
	mutation CreateMessage(
		$title: String!
		$content: String!
		$author: String!
	) {
		createMessage(
			title: $title
			content: $content
			author: $author
		) {
			author
		}
	}
`;

const MessageForm = () => {
	const [content, setContent] = useState('');
	const [title, setTitle] = useState('');
	const [author, setAuthor] = useState('');
	const [createMessage] = useMutation(CREATE_MESSAGE);

	return (
		<div className='container'>
			<form
				className='container__form'
				onSubmit={async (e) => {
					e.preventDefault();
					await createMessage({
						variables: { title, author, content },
          });
          window.location.href = "/list";
				}}
			>
				<input
					type='text'
					placeholder='Author'
					value={author}
					onChange={(e) => setAuthor(e.target.value)}
					className='container__form-author'
				/>
				<input
					type='text'
					placeholder='Write a Title...'
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					className='container__form-title'
				/>
				<textarea
					rows='2'
					placeholder='Content...'
					onChange={(e) => setContent(e.target.value)}
					value={content}
					className='container__form-content'
				></textarea>
				<button className='container__form-button'>Save</button>
			</form>
		</div>
	);
};

export default MessageForm;
