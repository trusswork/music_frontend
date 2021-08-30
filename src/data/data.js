//artists-pic
import bahatipic from './images/artists/bahati.jpg'
import khaligraphpic from './images/artists/khaligraph.jpg'
import nyashinkipic from './images/artists/nyashinki.jpg'
import wakadinalipic from './images/artists/Wakadinali.jpg'

//albums-pic

import bahatialbum from './images/albums/bahati-album.jpg'
import khaligraphalbum from './images/albums/khaligraph-album.jpg'
import nyashinkialbum from './images/albums/nyashinki-album.jpg'
import wakadinalialbum from './images/albums/Wakadinali-album.jpg'

//playlists-pic
import playlistImg from "./images/playlist.jpg"

//songs 

//bahati
import bahatiWanani from './songs/bahati-wanani.mp3'
import bahatikiss from './songs/bahati-kiss.mp3'
import bahatisweet from './songs/bahati-sweet darling.mp3'

//khaligraph
import khaligraphPunguza from './songs/khali-punguza.mp3'
import khaligraphTuma from './songs/khali-tuma.mp3'
import khaligraphWavy from './songs/khali-wavy.mp3'

//nyashinki
import nyashinkiGlory from './songs/nyash-glory.mp3'
import nyashinkiGreener from './songs/nyash-greener.mp3'
import nyashinkiSweet from './songs/nyash-sweet.mp3'

//wakadinali
import wakadinaliChesswoh from './songs/wakadinali-chesswoh.mp3'
import wakadinaliMorio from './songs/wakadinali-morio.mp3'
import wakadinaliNjege from './songs/wakadinali-njege.mp3'



export const artists = [
    {
        artist_id: 1,
        artist_name: "Bahati",
        artist_url: bahatipic,
        artist_plays: 0,
    },
    {
        artist_id: 2,
        artist_name: "Khaligraph",
        artist_url: khaligraphpic,
        artist_plays: 2,
    },
    {
        artist_id: 3,
        artist_name: "Nyashinki",
        artist_url: nyashinkipic,
        artist_plays: 1,
    },
    {
        artist_id: 4,
        artist_name: "Wakadinali",
        artist_url: wakadinalipic,
        artist_plays: 0,
    }
]
export const albums = [
    {
        album_id: 1,
        artist_id: 1,
        album_name: "Bahati",
        album_url: bahatialbum,
        year: 2015,
        play: 1,
    },
    {
        album_id: 2,
        artist_id: 2,
        album_name: "Khaligraph",
        album_url: khaligraphalbum,
        year: 2015,
        play: 1,
    },
    {
        album_id: 3,
        artist_id: 3,
        album_name: "Nyashinki",
        album_url: nyashinkialbum,
        year: 2015,
        play: 1,
    },
    {
        album_id: 4,
        artist_id: 4,
        album_name: "Wakadinali",
        album_url: wakadinalialbum,
        year: 2015,
        play: 1,
    },

]
export const playlists = [
    {
        id: 1,
        name: "Top Songs",
        img_url: playlistImg,
        song_ids: [
            8, 9, 10, 11, 12
        ],
        songs: [
            {
                song_id: 8,
                song_name: "Wanani",
                artist_id: artists[0].artist_id,
                artist_name: artists[0].artist_name,
                artist_url: artists[0].artist_url,
                album_id: albums[0].album_id,
                album_name: albums[0].album_name,
                album_url: albums[0].album_url,
                genre_id: 1,
                genre_name: "pop",
                song_img_url: albums[0].album_url,
                song_url: bahatiWanani,
                plays: "0",
                isLiked: false,
                imgColor: false
            },
            {
                song_id: 9,
                song_name: "Kiss",
                artist_id: artists[0].artist_id,
                artist_name: artists[0].artist_name,
                artist_url: artists[0].artist_url,
                album_id: albums[0].album_id,
                album_name: albums[0].album_name,
                album_url: albums[0].album_url,
                genre_id: 1,
                genre_name: "pop",
                song_img_url: albums[0].album_url,
                song_url: bahatikiss,
                plays: "0",
                isLiked: false,
                imgColor: false
            },
            {
                song_id: 10,
                song_name: "Sweet Darling",
                artist_id: artists[0].artist_id,
                artist_name: artists[0].artist_name,
                artist_url: artists[0].artist_url,
                album_id: albums[0].album_id,
                album_name: albums[0].album_name,
                album_url: albums[0].album_url,
                genre_id: 1,
                genre_name: "pop",
                song_img_url: albums[0].album_url,
                song_url: bahatisweet,
                plays: "0",
                isLiked: false,
                imgColor: false
            },
            {
                song_id: 11,
                song_name: "Punguza",
                artist_id: artists[1].artist_id,
                artist_name: artists[1].artist_name,
                artist_url: artists[1].artist_url,
                album_id: albums[1].album_id,
                album_name: albums[1].album_name,
                album_url: albums[1].album_url,
                genre_id: 1,
                genre_name: "pop",
                song_img_url: albums[1].album_url,
                song_url: khaligraphPunguza,
                plays: "0",
                isLiked: false,
                imgColor: false
            },
            {
                song_id: 12,
                song_name: "Tuma",
                artist_id: artists[1].artist_id,
                artist_name: artists[1].artist_name,
                artist_url: artists[1].artist_url,
                album_id: albums[1].album_id,
                album_name: albums[1].album_name,
                album_url: albums[1].album_url,
                genre_id: 1,
                genre_name: "pop",
                song_img_url: albums[1].album_url,
                song_url: khaligraphTuma,
                plays: "0",
                isLiked: false,
                imgColor: false
            },
            {
                song_id: 13,
                song_name: "Wavy",
                artist_id: artists[1].artist_id,
                artist_name: artists[1].artist_name,
                artist_url: artists[1].artist_url,
                album_id: albums[1].album_id,
                album_name: albums[1].album_name,
                album_url: albums[1].album_url,
                genre_id: 1,
                genre_name: "pop",
                song_img_url: albums[1].album_url,
                song_url: khaligraphWavy,
                plays: "0",
                isLiked: false,
                imgColor: false
            },

        ]
    },
    {
        id: 1,
        name: "Popular Songs",
        img_url: playlistImg,
        song_ids: [
            13, 9, 14, 16, 17
        ],
        songs: [
            {
                song_id: 14,
                song_name: "Glory",
                artist_id: artists[2].artist_id,
                artist_name: artists[2].artist_name,
                artist_url: artists[2].artist_url,
                album_id: albums[2].album_id,
                album_name: albums[2].album_name,
                album_url: albums[2].album_url,
                genre_id: 1,
                genre_name: "pop",
                song_img_url: albums[2].album_url,
                song_url: nyashinkiGlory,
                plays: "0",
                isLiked: false,
                imgColor: false
            },
            {
                song_id: 15,
                song_name: "Greener",
                artist_id: artists[2].artist_id,
                artist_name: artists[2].artist_name,
                artist_url: artists[2].artist_url,
                album_id: albums[2].album_id,
                album_name: albums[2].album_name,
                album_url: albums[2].album_url,
                genre_id: 1,
                genre_name: "pop",
                song_img_url: albums[2].album_url,
                song_url: nyashinkiGreener,
                plays: "0",
                isLiked: false,
                imgColor: false
            },
            {
                song_id: 16,
                song_name: "Sweet",
                artist_id: artists[2].artist_id,
                artist_name: artists[2].artist_name,
                artist_url: artists[2].artist_url,
                album_id: albums[2].album_id,
                album_name: albums[2].album_name,
                album_url: albums[2].album_url,
                genre_id: 1,
                genre_name: "pop",
                song_img_url: albums[2].album_url,
                song_url: nyashinkiSweet,
                plays: "0",
                isLiked: false,
                imgColor: false
            },
            {
                song_id: 17,
                song_name: "Chesswoh",
                artist_id: artists[3].artist_id,
                artist_name: artists[3].artist_name,
                artist_url: artists[3].artist_url,
                album_id: albums[3].album_id,
                album_name: albums[3].album_name,
                album_url: albums[3].album_url,
                genre_id: 1,
                genre_name: "pop",
                song_img_url: albums[3].album_url,
                song_url: wakadinaliChesswoh,
                plays: "0",
                isLiked: false,
                imgColor: false
            },
            {
                song_id: 18,
                song_name: "Morio",
                artist_id: artists[3].artist_id,
                artist_name: artists[3].artist_name,
                artist_url: artists[3].artist_url,
                album_id: albums[3].album_id,
                album_name: albums[3].album_name,
                album_url: albums[3].album_url,
                genre_id: 1,
                genre_name: "pop",
                song_img_url: albums[3].album_url,
                song_url: wakadinaliMorio,
                plays: "0",
                isLiked: false,
                imgColor: false
            },
            {
                song_id: 19,
                song_name: "Njege",
                artist_id: artists[3].artist_id,
                artist_name: artists[3].artist_name,
                artist_url: artists[3].artist_url,
                album_id: albums[3].album_id,
                album_name: albums[3].album_name,
                album_url: albums[3].album_url,
                genre_id: 1,
                genre_name: "pop",
                song_img_url: albums[3].album_url,
                song_url: wakadinaliNjege,
                plays: "0",
                isLiked: false,
                imgColor: false
            },

        ]

    }
]
export const songs = [
    {
        song_id: 8,
        song_name: "Wanani",
        artist_id: artists[0].artist_id,
        artist_name: artists[0].artist_name,
        artist_url: artists[0].artist_url,
        album_id: albums[0].album_id,
        album_name: albums[0].album_name,
        album_url: albums[0].album_url,
        genre_id: 1,
        genre_name: "pop",
        song_img_url: albums[0].album_url,
        song_url: bahatiWanani,
        plays: "0",
        isLiked: false,
        imgColor: false
    },
    {
        song_id: 9,
        song_name: "Kiss",
        artist_id: artists[0].artist_id,
        artist_name: artists[0].artist_name,
        artist_url: artists[0].artist_url,
        album_id: albums[0].album_id,
        album_name: albums[0].album_name,
        album_url: albums[0].album_url,
        genre_id: 1,
        genre_name: "pop",
        song_img_url: albums[0].album_url,
        song_url: bahatikiss,
        plays: "0",
        isLiked: false,
        imgColor: false
    },
    {
        song_id: 10,
        song_name: "Sweet Darling",
        artist_id: artists[0].artist_id,
        artist_name: artists[0].artist_name,
        artist_url: artists[0].artist_url,
        album_id: albums[0].album_id,
        album_name: albums[0].album_name,
        album_url: albums[0].album_url,
        genre_id: 1,
        genre_name: "pop",
        song_img_url: albums[0].album_url,
        song_url: bahatisweet,
        plays: "0",
        isLiked: false,
        imgColor: false
    },
    {
        song_id: 11,
        song_name: "Punguza",
        artist_id: artists[1].artist_id,
        artist_name: artists[1].artist_name,
        artist_url: artists[1].artist_url,
        album_id: albums[1].album_id,
        album_name: albums[1].album_name,
        album_url: albums[1].album_url,
        genre_id: 1,
        genre_name: "pop",
        song_img_url: albums[1].album_url,
        song_url: khaligraphPunguza,
        plays: "0",
        isLiked: false,
        imgColor: false
    },
    {
        song_id: 12,
        song_name: "Tuma",
        artist_id: artists[1].artist_id,
        artist_name: artists[1].artist_name,
        artist_url: artists[1].artist_url,
        album_id: albums[1].album_id,
        album_name: albums[1].album_name,
        album_url: albums[1].album_url,
        genre_id: 1,
        genre_name: "pop",
        song_img_url: albums[1].album_url,
        song_url: khaligraphTuma,
        plays: "0",
        isLiked: false,
        imgColor: false
    },
    {
        song_id: 13,
        song_name: "Wavy",
        artist_id: artists[1].artist_id,
        artist_name: artists[1].artist_name,
        artist_url: artists[1].artist_url,
        album_id: albums[1].album_id,
        album_name: albums[1].album_name,
        album_url: albums[1].album_url,
        genre_id: 1,
        genre_name: "pop",
        song_img_url: albums[1].album_url,
        song_url: khaligraphWavy,
        plays: "0",
        isLiked: false,
        imgColor: false
    },
    {
        song_id: 14,
        song_name: "Glory",
        artist_id: artists[2].artist_id,
        artist_name: artists[2].artist_name,
        artist_url: artists[2].artist_url,
        album_id: albums[2].album_id,
        album_name: albums[2].album_name,
        album_url: albums[2].album_url,
        genre_id: 1,
        genre_name: "pop",
        song_img_url: albums[2].album_url,
        song_url: nyashinkiGlory,
        plays: "0",
        isLiked: false,
        imgColor: false
    },
    {
        song_id: 15,
        song_name: "Greener",
        artist_id: artists[2].artist_id,
        artist_name: artists[2].artist_name,
        artist_url: artists[2].artist_url,
        album_id: albums[2].album_id,
        album_name: albums[2].album_name,
        album_url: albums[2].album_url,
        genre_id: 1,
        genre_name: "pop",
        song_img_url: albums[2].album_url,
        song_url: nyashinkiGreener,
        plays: "0",
        isLiked: false,
        imgColor: false
    },
    {
        song_id: 16,
        song_name: "Sweet",
        artist_id: artists[2].artist_id,
        artist_name: artists[2].artist_name,
        artist_url: artists[2].artist_url,
        album_id: albums[2].album_id,
        album_name: albums[2].album_name,
        album_url: albums[2].album_url,
        genre_id: 1,
        genre_name: "pop",
        song_img_url: albums[2].album_url,
        song_url: nyashinkiSweet,
        plays: "0",
        isLiked: false,
        imgColor: false
    },
    {
        song_id: 17,
        song_name: "Chesswoh",
        artist_id: artists[3].artist_id,
        artist_name: artists[3].artist_name,
        artist_url: artists[3].artist_url,
        album_id: albums[3].album_id,
        album_name: albums[3].album_name,
        album_url: albums[3].album_url,
        genre_id: 1,
        genre_name: "pop",
        song_img_url: albums[3].album_url,
        song_url: wakadinaliChesswoh,
        plays: "0",
        isLiked: false,
        imgColor: false
    },
    {
        song_id: 18,
        song_name: "Morio",
        artist_id: artists[3].artist_id,
        artist_name: artists[3].artist_name,
        artist_url: artists[3].artist_url,
        album_id: albums[3].album_id,
        album_name: albums[3].album_name,
        album_url: albums[3].album_url,
        genre_id: 1,
        genre_name: "pop",
        song_img_url: albums[3].album_url,
        song_url: wakadinaliMorio,
        plays: "0",
        isLiked: false,
        imgColor: false
    },
    {
        song_id: 19,
        song_name: "Njege",
        artist_id: artists[3].artist_id,
        artist_name: artists[3].artist_name,
        artist_url: artists[3].artist_url,
        album_id: albums[3].album_id,
        album_name: albums[3].album_name,
        album_url: albums[3].album_url,
        genre_id: 1,
        genre_name: "pop",
        song_img_url: albums[3].album_url,
        song_url: wakadinaliNjege,
        plays: "0",
        isLiked: false,
        imgColor: false
    },

]