import { Meteor } from 'meteor/meteor';
import { JsonRoutes } from 'meteor/simple:json-routes';

// return the push manifest
JsonRoutes.add('get', '/push-manifest.json', function(req, res) {
  JsonRoutes.sendResult(res, {
    data: {
      name: Meteor.settings.public.name,
      gcm_sender_id: Meteor.settings.google.projectNumber,
      display: 'standalone',
      icons: [{
        src: '/android-icon-36x36.png',
        sizes: '36x36',
        type: 'image/png',
        density: '0.75',
      }, {
        src: '/android-icon-48x48.png',
        sizes: '48x48',
        type: 'image/png',
        density: '1.0',
      }, {
        src: '/android-icon-72x72.png',
        sizes: '72x72',
        type: 'image/png',
        density: '1.5',
      }, {
        src: '/android-icon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
        density: '2.0',
      }, {
        src: '/android-icon-144x144.png',
        sizes: '144x144',
        type: 'image/png',
        density: '3.0',
      }, {
        src: '/android-icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        density: '4.0',
      },
      ] },
  });
});