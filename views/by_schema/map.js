function(doc) {
    if (doc.describedBy) {
        emit(doc.describedBy, null);
    }
}
