'use strict';
import { setTimeRemaining, togglePause } from '../action-creators/status';
import { fetchWeather } from '../action-creators/weather';
import store from '../store';

const 	Tabs 			= require('./tabs'),
		WebRequest 		= require('./webRequest'),
		Notifications 	= require('./notifications'),
		Idle 			= require('./idle'),
		Auth 			= require('./auth');

class Core {
	constructor() {
		this.tabs = new Tabs();
		// this.webRequest = new WebRequest();
		this.auth = Auth;
		this.notifications = new Notifications();
		this.idle = new Idle();
	}

	_init(){
		const { dispatch } = store;
		dispatch(fetchWeather());

		this.tabs._init(); // <-- for keylogger;
		this.idle._init(); // <-- detects whether user is idle
		this.auth.onAuthStateChanged();

		this.notifications.welcome();
		// dispatch(fetchTasks());
		this.watchMinute();


		WebRequest.visitCounter();
	}

	watchMinute(){
		const { dispatch, getState } = store;
		const minute = 60000;

		setInterval(() => {
			if (!getState().status.isPaused) {
				// Deduct 1 minute from the clock and update the store
				const newTime = getState().status.timeRemaining - minute;
				dispatch(setTimeRemaining(newTime));

				// If applicable, fire a chrome notification
				if (newTime === 5 * minute) { // 5 Minutes
					this.notifications.warning();
				}
				else if (newTime === 0) {
					this.notifications.statusChange();
				}
				else if (newTime === -5 * minute) {
					this.notifications.whereAreYou();
					dispatch(togglePause());
				}
			} else {
        // When paused, interval keeps running -- but does nothing
				console.log('We are paused');
			}
		}, 3000); // Interval runs in hyperspeed for dev purposes
	}
}

module.exports = Core;
