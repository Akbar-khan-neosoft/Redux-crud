import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditPost from './EditPost';

class AllPost extends Component {
	constructor(props) {
		super(props);

		this.state = {
			flag: true,
			key: '',
		};
	}

	onDeleteHandle = key => {
		this.props.deletePost(key);
	};

	onEditHandle = id => {
		this.setState({ key: id });
		this.setState({ flag: false });
	};

	render() {
		const style = {
			width: '50%',
			height: 'auto',
			border: '2px solid black',
			marginLeft: '25%',
			marginRight: '25%',
		};

		const {
			postReducer: { postList },
		} = this.props;

		let list;

		if (postList !== []) {
			{
				list = postList.map(item => (
					<tr key={item.id}>
						<td>{item.title}</td>
						<td>{item.post}</td>
						<td>
							<button
								onClick={() => {
									this.onEditHandle(item.id);
								}}
							>
								Edit
							</button>
						</td>
						<td>
							<button
								onClick={() => {
									this.onDeleteHandle(item.id);
								}}
							>
								Delete
							</button>
						</td>
					</tr>
				));
			}
		}

		return this.state.flag ? (
			<div>
				<h1>All Post</h1>
				<table style={style}>
					<thead>
						<tr>
							<th>Title</th>
							<th>Post</th>
						</tr>
					</thead>
					<tbody>{list}</tbody>
				</table>
			</div>
		) : (
			<EditPost
				id={this.state.key}
				displayData={() => {
					this.setState({ flag: true });
				}}
			/>
		);
	}
}

const mapStateToProps = state => {
	return {
		postReducer: state,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		deletePost: key => dispatch({ type: 'DELETE_POST', payload: key }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AllPost);
