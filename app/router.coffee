`import Ember from 'ember';`
`import config from './config/environment';`

Router = Ember.Router.extend(location: config.locationType);

Router.map ->
  @resource 'emails', ->
    @route 'edit', { path: '/:email_id' }

`export default Router;`
