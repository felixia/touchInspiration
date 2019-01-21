import React, { Component } from 'react';
import TextInput from './TextInput';
import '../index.css';



class UserForm extends Component {
  render(){
    return (
      <div> 
          <form>
            <TextInput
            name="name"
            label="Name"
            value={this.props.user.name}
            onChange={this.props.onChange}/>

             <TextInput
            name="email"
            label="Email"
            value={this.props.user.email}
            onChange={this.props.onChange}/>

             <TextInput
            name="bio"
            label="Bio"
            value={this.props.user.bio}
            onChange={this.props.onChange}/>

             <TextInput
            name="role"
            label="Role"
            value={this.props.user.occupation}
            onChange={this.props.onChange}/>

            <input
            type="submit"
            value="Save"
          
            className="btn btn-primary"
            onClick={this.props.onSave}/>

                
                 
            </form>
      </div>

      );
  }

}
export default UserForm;