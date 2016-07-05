import DS from 'ember-data';

const { attr, belongsTo } = DS;

export default DS.Model.extend({

    name: attr('string'),

    album: belongsTo('album'),

    trackNo: attr('number'),

    length: attr('number'),

    favorite: attr('boolean')

});
