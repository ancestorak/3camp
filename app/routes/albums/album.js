import Ember from 'ember';

export default Ember.Route.extend({

    model( params ) {
        return Ember.RSVP.hash({
            album: this.store.findRecord('album', params.album_id),
            tracks: this.store.query('track', {
                album: params.album_id
            })
        });
    }

});
