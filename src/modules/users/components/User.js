import React, {Component} from 'react';  
import {connect} from 'react-redux';
import UserForm from './UserForm';

import {bindActionCreators} from 'redux';
import * as UserActions from '../actions';

class User extends Component {
	constructor(props,context){
		super(props,context);
		this.state = {
			editing: false,
			user: Object.assign({}, this.props.user),
		}
		this.updateUserState = this.updateUserState.bind(this);
		this.saveUser = this.saveUser.bind(this);
	}

	 toggleEdit() {
    this.setState({editing: !this.state.editing}) 
}

  	componentWillReceiveProps(nextProps){
  	 if (this.props.user.id != nextProps.user.id) {
      this.setState({user: nextProps.user});
    }
  }
   updateUserState(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;
    return this.setState({user: user});
  }

    saveUser(event) {
    event.preventDefault();
   UserActions.updateUser(this.state.user);
   this.setState({editing: !this.state.editing});
  }



	render(){
		//const { user } = this.props;
		if(this.state.editing){
			return (
				<div>
					<h2>Edit User</h2>
					<UserForm 
					user={this.state.user} 
					onChange={this.updateUserState} 
					onSave={this.saveUser}
					/>
				</div>

				)
		}

		return(
			<div className='col-md-12 col-md-offset-2'>
			<h4>Full Name:{this.props.user.name}</h4>
        	<p>Email: {this.props.user.email}</p>
        	<p>Bio: {this.props.user.bio}</p>
        	<p>Role: {this.props.user.occupation}</p>

        	<button className="btn btn-default" onClick={() => this.toggleEdit()}>edit</button>
        	<button className="btn btn-default" >delete</button>
        
			</div>

			);
	}
}

function getUserById(users, id) {
  return users.filter(user => user.id == id)[0]
}

function mapStateToProps(state, ownProps) {
	//console.log(state.users.list);
	let user = {};
	const userId = ownProps.params.id;
	if(userId && state.users.list.length > 0){
		//user = Object.assign({},state.users.list.find(user => user.id === userId));
		user = getUserById(state.users.list, userId);
	}

	return {
		user: user,
	};
}

function mapDispatchToProps(dispatch) {  
  return {
    actions: bindActionCreators(UserActions, dispatch)
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(User);