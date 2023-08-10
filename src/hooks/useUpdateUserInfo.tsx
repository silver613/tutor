import { Auth } from 'aws-amplify';
import { useDispatch } from 'react-redux';
import { setUser } from '~/slices/userSlice';

const useUpdateUserInfo = () => {
	const dispatch = useDispatch();
	const updateUser = () => {
		Auth.currentAuthenticatedUser().then((user) => {
			dispatch(setUser(user.attributes));
		});
	};

	return updateUser;
};

export default useUpdateUserInfo;
