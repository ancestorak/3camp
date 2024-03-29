import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function() {

    this.route('artists', { path: 'artysci' }, function() {
        this.route('artist', { path: '/:artist_id' });
    });

    this.route('albums', { path: 'albumy' }, function() {
        this.route('album', { path: '/:album_id' });
    });

});

export default Router;
