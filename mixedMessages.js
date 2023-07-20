// This random message generator will return Slavi Trifonov's best song titles, the lenght of the song and the year it was released.

let songTitles = ["Kaji na maika si", "Cvete moe", "Jovano, Jovanke", "Ad i rai", "Prujinata"];
let songLength = ["3:15", "4:20", "2:30", "5:24", "3:15"];
let songYear = ["2008", "2004", "1999", "2000", "2005"];
let youTubeLinksToSongs = ['https://www.youtube.com/watch?v=9QZ5Y5Z3XgE', 'https://www.youtube.com/watch?v=9QZ5Y5Z3XgE', 'https://www.youtube.com/watch?v=9QZ5Y5Z3XgE', 'https://www.youtube.com/watch?v=9QZ5Y5Z3XgE', 'https://www.youtube.com/watch?v=9QZ5Y5Z3XgE'];

let randomSongIndex = Math.floor(Math.random() * songTitles.length);

let combinedSongMessage = 'Title: ' + songTitles[randomSongIndex] + '\nLength: ' + songLength[randomSongIndex] + '\nYear: ' + songYear[randomSongIndex] + '\nLink: ' + youTubeLinksToSongs[randomSongIndex];

console.log('Today you should listen to this Slavi Trifonov song:\n' + combinedSongMessage);