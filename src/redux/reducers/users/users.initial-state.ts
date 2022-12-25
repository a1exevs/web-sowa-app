import {UsersState} from "./users.types";

export const initialState: UsersState = {
  users: [],
  pageSize: 10,
  pagesRange: 11,
  totalUsersCount: 0,
  currentUsersPage: 1,
  isFetching: false,
  usersFollowing: []
};