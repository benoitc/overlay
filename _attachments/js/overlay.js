(function($) {
    
    $.overlay = $.overlay || {};
    var schemaEditor,
        schemaTypes = ["string", "number", "integer", "boolean", "object", "array", "any"];

    schemaEditor = function(app) {
        this.init(app);

    };

    $.extend(schemaEditor.prototype, {

        _properties: {},
        _nbProps: 0,

        init: function(app) {
            this.app = app;
            this.i18n = app.ddoc.i18n.en;
            this.templates = app.ddoc.templates;
            var self = this;

            $("#addProp").button();
            var p = $("#properties");
            p.sortable();

            $("#addProp").bind("click", function(e) {
                e.preventDefault();
                self.chooseType(this, p, e);
                return false;
            });

            $("#inspector").bind("inspect", function(e, propId) {
                self.inspect(propId);
            });
        },

        chooseType: function(el, parent, e) {
            var helpTypes = this.i18n.helptypes,
                genId = this.app.require("lib/util").genId,
                self = this;

            var cnt = $.mustache(this.templates.choose_types, { types: schemaTypes });
            var tdiv = $(cnt);
            $("#schemaType", tdiv).bind("change", function(e) {
                $(".help", tdiv).html(helpTypes[$(this).val()]); 
            });
            
            // set default help value
            $(".help", tdiv).html(helpTypes[$("#schemaType", tdiv).val()]);

            tdiv.dialog({
                resizable: false,
                modal: true,
                buttons: { 
                    "Add this type": function() {
                        self._nbProps += 1;
                        var type = $("#schemaType", this).val(),
                            propId = "prop-" + genId(8),
                            name = "Prop " + self._nbProps,
                            tpl;
                        
                        if (type == "object") {
                            tpl = self.templates.prop_object;
                        } else {
                            tpl = self.templates.prop;
                        }
                        var cnt = $.mustache(tpl, {
                            propId: propId,
                            type: type,
                            name: name
                        });

                        var prop = $(cnt).appendTo(parent);

                        if (type == "object") {
                            var p = $("ul", prop);
                            p.sortable();

                            $(".add", prop)
                                .button()
                                .bind("click", function(e) {
                                    e.preventDefault();
                                    self.chooseType(this, p, e);
                                    return false;
                                });
                        }

                        self._properties[propId] = {
                            type: type,
                            name: name,
                            el: prop[0]
                        };
                        
                        $("#inspector").trigger("inspect", [propId]);
                        $( this ).dialog( "close" );
                    },
                    "Cancel": function() {
                        $( this ).dialog( "close" );
                    }
                }
            });
        },
        inspect: function(propId) {
            var prop = this._properties[propId];
            var tpl = this.templates["inspect_" + prop.type];
            $("#inspector div").html(tpl);
            
            
            
        }

    });

    $.extend($.overlay, {
        schemaEditor: schemaEditor
    });
})(jQuery);
