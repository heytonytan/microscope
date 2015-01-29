Posts = new Mongo.Collection('posts');
// we do not use the var keyword because we want to make the
// posts collection available to the whole app.

Posts.allow({
  insert: function(userId, doc) {
    // only allow posting if you are logged in
    return !! userId;
  }
});