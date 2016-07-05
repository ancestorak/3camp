import Ember from 'ember';
import DS from 'ember-data';

const { attr, belongsTo, hasMany } = DS;
const { computed } = Ember;

export default DS.Model.extend({

    name: attr('string'),

    releaseDate: attr('date'),

    releaseYear: computed('date', function() {
        return this.get('releaseDate').getFullYear();
    }),

    artist: belongsTo('artist'),

    genre: attr('string'),

    tracks: hasMany('track'),

    tracksByNo: computed.sort('tracks', function(a, b) {
        return a.get('trackNo') - b.get('trackNo');
    })

});
