import { Model, hasMany, belongsTo } from 'ember-cli-mirage';

export default Model.extend({

    artist: belongsTo(),

    tracks: hasMany()

});
