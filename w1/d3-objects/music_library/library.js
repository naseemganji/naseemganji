const library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function () {
  for (let i in library.playlists) {
    let playlists = library.playlists[i];
    let id = playlists.id;
    let name = playlists.name;
    let trackCount = playlists.tracks.length;
    console.log(`${id}: ${name} - ${trackCount} tracks`);
  }
};
// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function () {
  for (let i in library.tracks) {
    let tracks = library.tracks[i];
    let id = tracks.id;
    let name = tracks.name;
    let artist = tracks.artist;
    let album = tracks.album;
    console.log(`${id}: ${name} by ${artist} (${album})`);
  }
};
// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId) {
  let playlist = library.playlists[playlistId];
  let id = playlist.id;
  let name = playlist.name;
  let trackCount = playlist.tracks.length;
  console.log(`${id}: ${name} - ${trackCount} tracks`);
  for (let i in playlist.tracks) {
    let tracks = playlist.tracks[i];
    let tracker = library.tracks[tracks];
    let id = tracker.id;
    let name = tracker.name;
    let artist = tracker.artist;
    let album = tracker.album;
    console.log(`${id}: ${name} by ${artist} (${album})`);
  }
};     

// adds an existing track to an existing playlist
const addTrackToPlaylist = function (trackId, playlistId) {
  let addTrack = library.playlists[playlistId].tracks;
  addTrack.push(trackId);
  let playlist = library.playlists[playlistId];
  let id = playlist.id;
  let name = playlist.name;
  let trackCount = playlist.tracks.length;
  console.log(`${id}: ${name} - ${trackCount} tracks`);
  for (let i in playlist.tracks) {
    let tracks = playlist.tracks[i];
    let tracker = library.tracks[tracks];
    let id = tracker.id;
    let name = tracker.name;
    let artist = tracker.artist;
    let album = tracker.album;
    console.log(`${id}: ${name} by ${artist} (${album})`);
  }
};
// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function () {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};
// adds a track to the library
const addTrack = function (name, artist, album) {
  let id = generateUid();
  library.tracks[id] = {
    id: id,
    name: name,
    artist: artist,
    album: album,
  };
  console.log(library);
};
// adds a playlist to the library
const addPlaylist = function(name) {

}


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

}