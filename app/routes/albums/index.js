import Ember from 'ember';

export default Ember.Route.extend({

    userManager: Ember.inject.service(),

    beforeModel( transition ) {
        if (!this.get('userManager.loggedIn')) {
            transition.abort();
        }
    },

    model( params ) {
        return this.store.findAll('album');
    }

});
