Spraycan.Views.Javascripts.List = Backbone.View.extend({
    events: {
      "click #load_javascript button": "load"
    },

    initialize: function() {
      this.render();
    },

    load: function() {
      Spraycan.editor.visible = true;

      var name = $("#all_javascripts").val();
      model = _.detect(Spraycan.javascripts.models, function(vo) { return $.trim(vo.get('name')) == name} );

      if(name!=""){
        if(name=="add-new"){
          var model  = new Javascript({ name: '', js: ''});
        }

        Spraycan.view = new Spraycan.Views.Javascripts.Edit({ model: model });
      }

      return false;
    },

    render: function() {
      var compiled = JST['spraycan/templates/javascripts/index'];

      $(this.el).html(compiled({ collection : Spraycan.javascripts }));
      $('#loadables').html(this.el);

      $('iframe').height($(window).height() - 50);
    }

});
