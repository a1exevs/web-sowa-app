import { configureStore } from '@reduxjs/toolkit';
import authReducer from 'src/store/slices/auth/auth.slice';
import profilesReducer from 'src/store/slices/profiles/profiles.slice';
import messengerReducer from 'src/store/slices/messenger/messenger.slice';
import usersReducer from 'src/store/slices/users/users.slice';
import { reducer as formReducer } from 'redux-form';
import appReducer from 'src/store/slices/app/app.slice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    profilePage: profilesReducer,
    messenger: messengerReducer,
    usersPage: usersReducer,
    form: formReducer,
    app: appReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type RootStory = typeof store;

// @ts-expect-error TS(2339): Property '__store__' does not exist on type 'Windo... Remove this comment to see the full error message
window.__store__ = store;

export default store;