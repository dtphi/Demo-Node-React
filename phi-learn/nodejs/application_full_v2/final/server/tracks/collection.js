var CollectionClass = require('./collection_class')
  , tracksCollection = new CollectionClass()

tracksCollection.add({
  id: 1
, title: 'First track'
, duration: 7
})

tracksCollection.add({
  id: 2
, type: 'single'
, name: 'Single track'
, duration: 3
, year: 2010
})

tracksCollection.add({
  id: 3
, title: 'New track'
, duration: 23
})

tracksCollection.add({
  id: 4
, title: 'Best track'
, duration: 4
})

tracksCollection.add({
  id: 5
, type: 'album'
, albumYear: 2010
, albumTitle: 'Red fox'
})

tracksCollection.add({
  id: 6
, parentId: 5
, title: 'Nested track'
, duration: 23
})

tracksCollection.add({
  id: 7
, parentId: 5
, type: 'album'
, albumYear: 2019
, albumTitle: 'Under Red Fox'
})

tracksCollection.add({
  id: 8
, parentId: 7
, title: 'Doubly Nested track'
, duration: 8
})

module.exports = tracksCollection
