import { Factory } from 'ember-cli-mirage';

export default Factory.extend({

    name(i) {
        return `Track ${i + 1}`;
    },

    trackNo(i) {
        return i + 1;
    },

    favorite(i) {
        return i % 3 ? false : true
    },

    length() {
        return Math.floor(Math.random() * 180) + 120;
    }

});
