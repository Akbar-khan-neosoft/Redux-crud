import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditPost extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: '',
			title: '',
			post: '',
		};
	}

	onUpdateChangeHandle = e => {
		this.setState({ [e.target.name]: e.target.value });
		this.setState({ id: this.props.id });
	};

	onSubmitHandler = e => {
		e.preventDefault();

		const { id, title, post } = this.state;
		const data = {
			id,
			title,
			post,
		};
		this.props.editPost(data);
		this.props.displayData();
	};

	render() {
		const {
			data: { postList },
		} = this.props;

		let index = postList.find(index => index.id === this.props.id);
		const { id, title, post } = index;

		return (
			<div>
				<h1>Update Post</h1>
				<hr></hr>
				<form>
					<label>Title : </label>

					<input
						type="text"
						defaultValue={title}
						placeholder="Enter Title"
						// value={title}
						name="title"
						onChange={this.onUpdateChangeHandle}
					></input>
					<br></br>
					<br></br>
					<label>Post : </label>
					<textarea
						rows="4"
						cols="20"
						defaultValue={post}
						placeholder="Enter Post"
						// value={post}
						name="post"
						onChange={this.onUpdateChangeHandle}
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
						onClick={this.onSubmitHandler}
					>
						Update
					</button>
				</form>
				<hr></hr>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		data: state,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		editPost: data => dispatch({ type: 'EDIT_POST', payload: data }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);
