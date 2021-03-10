# Songs

- Through props one can access action creators and through state one can access reducers
- Connect and Provide are react-redux functions

## Connect

- syntax:  
  `connect(mapStateToProps, { selectSong })(SongList)`

  - selectSong : action creator
  - mapStateToProps : Mandatory method to access data from the store
  - SongList : jsx component where the data will be displayed
