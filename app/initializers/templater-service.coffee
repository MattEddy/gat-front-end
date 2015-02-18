TemplaterInitializer =
  name: 'templater-service'
  initialize: (container, app) ->
    app.inject 'route', 'templaterService', 'service:templater'

`export default TemplaterInitializer`
