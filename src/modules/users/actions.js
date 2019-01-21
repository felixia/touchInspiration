
import usersApi from '../.././api/usersApi';
import * as action from './actionCreators';

export function getUsers() {
	return function(dispatch) {

		return usersApi.getUsers().then(response => {

			dispatch(action.getUsersSuccess(response));

		}).catch(error => {


			dispatch(action.dispatchGeneralError(error));
		});
	};
}

export function updateUser(user) {  
  return function (dispatch) {
    return usersApi.updateUser(user).then(responseUser => {
      dispatch(action.updateUserSuccess(responseUser));
    }).catch(error => {
      dispatch(action.dispatchGeneralError(error));
    });
  };
}