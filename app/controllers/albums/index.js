import Ember from 'ember';

export default Ember.Controller.extend({

    actions: {

        showAlbum( album ) {
            this.transitionToRoute('albums.album', album.get('id'));
        }

    }

});
