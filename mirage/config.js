export default function() {

    // These comments are here to help you get started. Feel free to delete them.

    /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
    */

    // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
    // this.namespace = '';    // make this `api`, for example, if your API is namespaced
    // this.timing = 400;      // delay for each request, automatically set to 0 during testing

    /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
    */

    this.namespace = 'api';

    this.get('/artists');
    this.get('/artists/:id');

    this.get('/albums');
    this.get('/albums/:id');

    this.get('/tracks/:id');

    this.get('/tracks', (schema, request) => {
        if (request.queryParams.artist) {
            let artistAlbums = schema.albums.where({
                artistId: parseInt(request.queryParams.artist)
            });

            let tracks = schema.tracks.all();
            tracks.models = tracks.models.filter(
                trackModel => artistAlbums.models.some(
                    albumModel => albumModel.attrs.id === trackModel.attrs.albumId
                )
            );

            return tracks;
        }

        if (request.queryParams.album) {
            return schema.tracks.where({
                albumId: parseInt(request.queryParams.album)
            });
        }

        return schema.tracks.all();
    });

    this.patch('/tracks/:id');

}
