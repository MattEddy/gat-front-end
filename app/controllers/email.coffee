`import Ember from "ember";`

EmailController = {
  actions: {
    save: ->
      console.log "handing action"
      model = this.get('content')

      model.save.then ->
        console.log "waiting"
      , ->
        console.log "Errrors!!!!"

  }
}

`export default Ember.ObjectController.extend(EmailController);`
