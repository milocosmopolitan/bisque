'use strict';

import store from '../store';

import {
  SET_WORK_DURATION,
  SET_LUNCH_DURATION,
  SET_BREAK_DURATION,
  SET_START_TIME,
  RECEIVE_SETTINGS,
  TAB_ALIAS_SAVE_SETTINGS
} from '../constants';

export const receiveSettings = settings => ({
  type: RECEIVE_SETTINGS, settings
});

export const setWorkDuration = workDuration => ({
  type: SET_WORK_DURATION, workDuration
});

export const setBreakDuration = breakDuration => ({
  type: SET_BREAK_DURATION, breakDuration
});

export const setLunchDuration = lunchDuration => ({
  type: SET_LUNCH_DURATION, lunchDuration
});

export const setStartTime = startTime => ({
  type: SET_START_TIME, startTime
});

export const tabSaveSettings = () => ({
  type: TAB_ALIAS_SAVE_SETTINGS
});

export const receive_settings = settings => dispatch => {

  return new Promise((resolve, reject) => {
      firebaseDb.ref(`${this._path}/${key}`)
        .remove(error => error ? reject(error) : resolve());
    });
}

export const setSettings = () => dispatch => {
  // why having scope issue??
  const User = require('../controllers/user');
  // console.log(User, User.settings)
  const userId = store.getState().auth.uid;
  let settings = Object.assign({}, store.getState().settings);
      settings.greylist = store.getState().greylist;

  User.settings.set(userId, settings)
    .then(() => User.settings.getById(userId));
};
