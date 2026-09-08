function songs(input) {
class Song {
    constructor(typeList, name, time) {
        this.typeList = typeList
        this.name = name
        this.time = time

    }
}
let numberOfSongs = input.shift()
let command = input.pop()
let songsArray = []
for (let i = 0; i < numberOfSongs; i++) {
    let[typeList, name, time] = input[i].split('_')
    const song = new Song(typeList, name, time);
    songsArray.push(song)
}
if (command === 'all') {
    for (let element of songsArray) {
        console.log(element.name);
        
        
    }
}else {
    for (let element of songsArray) {
        if (element.typeList === command) {
            console.log(element.name);
            
        }
    }
}

}
songs([3,
'favourite_DownTown_3:14',
'favourite_Kiss_4:16',
'favourite_Smooth Criminal_4:01',
'favourite']
)
