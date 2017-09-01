import { call, put, take } from "redux-saga/effects";

//TODO: create CRUD api on fetch, axios or agent
const fetchSettings = {
  "notifications": [
    {
      "id": 0,
      "category": "Signaling channels",
      "event": "Limit reached",
      "state": true,
      "notify": "SMS",
      "receivers": [
        {
          "name": "Geore Cooling",
          "mail": "g.coo@arhitech.com",
          "tel": "+380644129011"
        },
        {
          "name": "Alan Timber",
          "mail": "alan-timber@arhitech.com",
          "tel": "+380644129011"
        }
      ],
      "fired": [
        {
          "date": "2017-Jan-03 Tue 09:13:21"
        },
        {
          "date": "2017-Feb-12 Fri 12:09:54"
        },
        {
          "date": "2017-Feb-23 Fri 19:23:36"
        }
      ]
    },
    {
      "id": 1,
      "category": "Storage",
      "event": "Used over 50%",
      "state": false,
      "notify": "Email",
      "receivers": [
        {
          "name": "Geore Cooling",
          "mail": "g.coo@arhitech.com",
          "tel": "+380644129011"
        }
      ],
      "fired": [
        {
          "date": "2017-Jan-03 Tue 09:13:21"
        }
      ]
    },
    {
      "id": 2,
      "category": "Storage",
      "event": "Used over 90%",
      "state": true,
      "notify": "Both",
      "fired": [],
      "receivers": []
    },
    {
      "id": 3,
      "category": "Data channels",
      "event": "No free channels",
      "state": true,
      "notify": "SMS",
      "fired": [],
      "receivers": []
    }
  ],
  "sms": {
    "state": true,
    "limitation": 10,
  },
  "email": {
    "state": false,
    "limitation": 50,
  }
};

export function* loadSettings() {
  try {
    //const settings = yield call(fetchSettings);
    const settings = fetchSettings;
    yield put({type: 'SETTINGS_RECEIVED', settings});
  } catch (error) {
    yield put({type: 'LOAD_SETTINGS_FAILURE', error})
  }
}

export function* watchLoadSettings() {
  while (true) {
    yield take('LOAD_SETTINGS');
    yield call(loadSettings);
  }
}
