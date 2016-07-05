import Ember from 'ember';

export default Ember.Controller.extend({

    actions: {

        showArtist( artist ) {
            this.transitionToRoute('artists.artist', artist.get('id'));
        }

    }

});
