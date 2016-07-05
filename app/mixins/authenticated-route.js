import Ember from 'ember';

export default Ember.Mixin.create({

    userManager: Ember.inject.service(),

    beforeModel( transition ) {
        if (!this.get('userManager.loggedIn')) {
            transition.abort();
        }
    }

});
