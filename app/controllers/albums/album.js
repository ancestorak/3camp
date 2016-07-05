import Ember from 'ember';

export default Ember.Controller.extend({

    showOnlyFavorites: false,

    queryParams: {
        showOnlyFavorites: 'favorites'
    },

    tracks: Ember.computed('model.tracks.@each.favorite', 'showOnlyFavorites', function() {
        if (!this.get('showOnlyFavorites')) {
            return this.get('model.tracks');
        }

        return this.get('model.tracks').filterBy('favorite', true);
    }),

    actions: {

        toggleFavoritesView() {
            this.toggleProperty('showOnlyFavorites');
        },

        toggleFavoriteTrack( track ) {
            track.toggleProperty('favorite');
            track.save();
        }

    }

});
