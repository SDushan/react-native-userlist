/**
 * Action Creators
 */
import { FETCH_USERS, FETCH_USERS_SUCCESS, FETCH_USERS_FAILED } from "./types";

export const fetchUsers = () => {
  return {
    type: FETCH_USERS
  };
};

export const fetchUsersSuccess = receivedUsers => {
  return {
    type: FETCH_USERS_SUCCESS,
    receivedUsers
  };
};

export const fetchUsersFailed = error => {
  return {
    type: FETCH_USERS_FAILED,
    error
  };
};
