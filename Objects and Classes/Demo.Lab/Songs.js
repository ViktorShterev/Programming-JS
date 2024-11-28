function solve(arr) {

  class Song {
    constructor(type, name, time) {
      this.type = type;
      this.name = name;
      this.time = time;
    }
  }

  let numberOfSongs = arr.shift();
  let selectedList = arr.pop();

  let songs = [];

  for (let index = 0; index < numberOfSongs; index++) {
    const [type, name, time] = arr[index].split("_");
    let newSong = new Song(type, name, time);
    songs.push(newSong);
  }

    if (selectedList === "all") {
        songs.forEach(song => console.log(song.name));
    } else {
        let filtered = songs.filter(song => song.type === selectedList);
        filtered.forEach(song => console.log(song.name));
  }
}

solve([
  3,
  "favourite_DownTown_3:14",
  "favourite_Kiss_4:16",
  "favourite_Smooth Criminal_4:01",
  "favourite",
]);
