import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import articleReducer from './articleReducer';
import userDetailsReducer from './userDetailsReducer';
import uploadImageReducer from './uploadImageReducer';
import getLikesReducer from './getLikesReducer';
import searchUsersReducer from './searchUsersReducer';
import saveProfileChangesReducer from './saveProfileChangesReducer';
const rootReducer = combineReducers({
  userState: userReducer,
  articleState: articleReducer,
  userDetailsState: userDetailsReducer,
  uploadImageState: uploadImageReducer,
  likesState: getLikesReducer,
  searchState: searchUsersReducer,
  saveProfileChangesState: saveProfileChangesReducer,
});
export { rootReducer };
