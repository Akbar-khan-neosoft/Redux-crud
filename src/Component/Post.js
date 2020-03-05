import React, { Component } from 'react';
import { connect } from 'react-redux';

class Post extends Component {
	state = {
		title: '',
		post: '',
	};

	onSubmitHandle = e => {
		e.preventDefault();
		const { title, post } = this.state;
		var d = new Date();
		const data = {
			id: d.getTime(),
			title,
			post,
		};
		this.props.addPost(data);
	};

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		const { title, post } = this.state;
		return (
			<div>
				<h1>Create Post</h1>
				<hr></hr>
				<form>
					<label>Title : </label>

					<input
						type="text"
						placeholder="Enter Title"
						value={title}
						name="title"
						onChange={this.handleChange}
					></input>
					<br></br>
					<br></br>
					<label>Post : </label>
					<textarea
						rows="4"
						cols="20"
						placeholder="Enter Post"
						value={post}
						name="post"
						onChange={this.handleChange}
					></textarea>
					<br></br>
					<br></br>
					<button
						style={{
							width: '100px',
							height: '20px',
							backgroundColor: 'black',
							color: 'white',
							fontWeight: 'bold',
							border: '1px solid grey',
						}}
						onClick={this.onSubmitHandle}
					>
						Post
					</button>
				</form>
				<hr></hr>
			</div>
		);
	}
}

// const mapStateToProps = state => {
// 	return {
// 		data: this.state
// 	};
// };

const mapDispatchToProps = dispatch => {
	return {
		addPost: data => dispatch({ type: 'ADD_POST', payload: data }),
	};
};

export default connect(null, mapDispatchToProps)(Post);
