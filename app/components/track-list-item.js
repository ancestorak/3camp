import Ember from 'ember';

export default Ember.Component.extend({

    track: null,


    tagName: 'li',

    classNames: ['list-group-item track'],

    classNameBindings: ['favorite'],

    favorite: Ember.computed.alias('track.favorite'),

    formattedLength: Ember.computed('track.length', function() {
        let length = this.get('track.length');
        let minutes = Math.floor(length / 60);
        let seconds = length % 60;

        return `${ minutes }m ${ seconds }s`;
    }),

    actions: {

        toggleFavorite() {
            this.attrs.toggleFavorite();
        }

    }

})
