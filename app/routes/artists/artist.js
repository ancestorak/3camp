import Ember from 'ember';

export default Ember.Route.extend({

    model( params ) {
        return Ember.RSVP.hash({
            artist: this.store.findRecord('artist', params.artist_id),
            tracks: this.store.query('track', {
                artist: params.artist_id
            })
        });
    }

});
