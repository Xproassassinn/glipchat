import {Meteor} from 'meteor/meteor';

export const ICE_CONFIG = {iceServers: [{url: 'stun:stun.l.google.com:19302'}]};

export const APP_NAME = Meteor.settings.public.name;
export const APP_EMAIL = 'support@quasar-meteor.herokuapp.com';
export const APP_ICON = '/android-icon-192x192.png';

export const COMPANY = {
  name: 'Glipcode',
  href: 'http://glipcode.com/',
};

// wait time in ms for someone to answer a call
export const RING_DURATION = 60000;

// wait time between gUM calls waiting for permission
export const PERMISSION_INTERVAL = 1000;

export const GITHUB_URL = 'https://github.com/srtucker22/quasar';

export const GOOGLE_PERMISSIONS = [
  'https://www.googleapis.com/auth/contacts.readonly',
  'https://www.googleapis.com/auth/userinfo.email',
];
// googlePeople.readyForUse() &&
//   permissions.push('https://www.googleapis.com/auth/plus.login');