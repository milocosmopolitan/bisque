'use strict';

import {
  SET_WORK_DURATION,
  SET_LUNCH_DURATION,
  SET_BREAK_DURATION,
  SET_START_TIME,
  ADD_URL,
  REMOVE_URL,
  EDIT_URL,
  RECEIVE_SETTINGS
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

export const addUrl = url => ({
  type: ADD_URL, url
});

export const removeUrl = index => ({
  type: REMOVE_URL, index
});

export const editUrl = (url, index) => ({  
  type: EDIT_URL, url, index  
});
