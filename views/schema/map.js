function(doc) {
    if (doc._id.match("schema/") == "schema/") {
      emit(doc._id, null);
    }
}
