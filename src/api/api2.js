///// ------- A --------------
// fileWithConstants.js:

export const ACTION_INVALID = "This action is invalid!"
export const CONSTANT_NUMBER_1 = 'hello I am a constant';
export const CONSTANT_NUMBER_2 = 'hello I am also a constant';


/**
 * 
 // fileThatUsesConstants.js:

 import * as myConstClass from 'path/to/fileWithConstants';

const errorMsg = myConstClass.ACTION_INVALID;



import { ACTION_INVALID } from 'path/to/fileWithConstants';

const errorMsg = ACTION_INVALID
 */


 ///// ------- B --------------

///You can simply create an object for your constants:

const myConstClass = {
    ACTION_INVALID: "This action is invalid!"
}

/* And then use it.

If you are bundling, you can export this object and then import for each component file. */

///// ------- C --------------
//ITEM
export const ITEM_FETCHING = "ITEM_FETCHING";
export const ITEM_SUCCESS = "ITEM_SUCCESS";
export const ITEM_FAILED = "ITEM_FAILED";
//Login
export const LOGIN_FETCHING = "LOGIN_FETCHING";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
// Register Page
export const REGISTER_FETCHING = "REGISTER_FETCHING";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILED = "REGISTER_FAILED";

/////// ------- D --------------

//Product app
export const product = {
    CHANGE_USER_EMAIL: "CHANGE_USER_EMAIL",
    ADD_PRODUCT: "ADD_PRODUCT"
}

// Comments
export const ADD_COMMENT = 'ADD_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const COMMENT__MARK_FAVORITE = 'COMMENT__MARK_FAVORITE';

export const app = {
    ERROR: 'letters-social/app/error',
    LOADED: 'letters-social/app/loaded',
    LOADING: 'letters-social/app/loading'
};

export const auth = {
    LOGIN_SUCCESS: 'letters-social/auth/login/success',
    LOGOUT_SUCCESS: 'letters-social/auth/logout/success'
};

export const posts = {
    CREATE: 'letters-social/post/create',
    GET: 'letters-social/post/get',
    LIKE: 'letters-social/post/like',
    NEXT: 'letters-social/post/paginate/next',
    UNLIKE: 'letters-social/post/unlike',
    UPDATE_LINKS: 'letters-social/post/paginate/update'
};

export const comments = {
    CREATE: 'letters-social/comments/create',
    GET: 'letters-social/comments/get',
    SHOW: 'letters-social/comments/show',
    TOGGLE: 'letters-social/comments/toggle'
};