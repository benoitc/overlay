function genId(length) {
    var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var secret = '';
    for (var i=0; i<length; i++) {
        secret += tab.charAt(Math.floor(Math.random() * tab.length));
    }
    return secret;
}
exports.genId = genId;
