(function() {
    var scriptLocation;

    function getScriptLocation () {
        if (scriptLocation != undefined) {
            return scriptLocation;
        }
        scriptLocation = "";            
        var isOL = new RegExp("(^|(.*?\\/))(loader.js)(\\?|$)");

        var scripts = document.getElementsByTagName('script');
        for (var i=0, len=scripts.length; i<len; i++) {
            var src = scripts[i].getAttribute('src');
            if (src) {
                var match = src.match(isOL);
                if(match) {
                    scriptLocation = match[1];
                    break;
                }
            }
        }
        return scriptLocation;
    }



    function load(scripts) {
      for (var i=0; i < scripts.length; i++) {
        var path = scripts[i];
        if (path[0] != "/") {
            path = getScriptLocation() + path;
        }

        document.write('<script src="'+path+'"><\/script>')
      };
    };

    load([
      "/_utils/script/sha1.js",
      "/_utils/script/json2.js",
      "jquery-1.4.2.min.js",
      "jquery-ui-1.8.5.custom.min.js",
      "/_utils/script/jquery.couch.js",
      "../vendor/couchapp/jquery.couch.app.js",
      "../vendor/couchapp/jquery.couch.app.util.js",
      "../vendor/couchapp/jquery.mustache.js"
    ]);
})();
