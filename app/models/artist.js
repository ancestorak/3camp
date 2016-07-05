import Ember from 'ember';
import DS from 'ember-data';

const { attr, hasMany } = DS;
const { computed } = Ember;

export default DS.Model.extend({

    name: attr('string'),

    albums: hasMany('album'),

    trackCount: computed('albums.@each.tracks.[]', function() {
        return this.get('albums').reduce(
            (sum, album) => sum += album.get('tracks.length'), 0
        );
    })

});
