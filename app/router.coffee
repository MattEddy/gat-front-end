`import Ember from 'ember';`
`import config from './config/environment';`

Router = Ember.Router.extend(location: config.locationType);

Router.map ->
  @resource 'emails', ->
    @resource 'emails.edit', ->
      @route 'index', { path: '/:email_id' }
      @route 'data', { path: '/data/:email_id' }
      @route 'markup', { path: '/markup/:email_id' }


`export default Router;`
