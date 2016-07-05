import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({

    name(i) {
        return faker.name.firstName() + ' ' + faker.name.lastName();
    },

    nationality() {
        faker.list.random('Poland', 'USA', 'France', 'Germany');
    },

    afterCreate( artist, server ) {
        let count = Math.floor(Math.random() * 4) + 1;
        server.createList('album', count, { artist });
    }

});
