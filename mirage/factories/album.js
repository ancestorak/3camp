import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({

    name(i) {
        return `Album ${i + 1}`;
    },

    releaseDate() {
        return Math.floor(Math.random() * 50) + 1965;
    },

    genre() {
        return faker.list.random('Rock', 'Pop', 'Metal', 'Jazz');
    },

    afterCreate( album, server ) {
        let count = Math.floor(Math.random() * 10) + 5;
        server.createList('track', count, { album });
    }

});
