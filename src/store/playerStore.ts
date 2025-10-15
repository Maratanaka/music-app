import { defineStore } from 'pinia';

export const usePlayerStore = defineStore('player', {
  state: () => ({
    audio: new Audio(),
    currentSong: null as null | {
      id: number;
      title: string;
      artist: string;
      cover: string;
      src: string;
    },
    isPlaying: false,
    currentTime: 0,
    duration: 0,
  }),

  actions: {
    playSong(song: { id: number; title: string; artist: string; cover: string; src: string }) {
      if (this.currentSong?.id !== song.id) {
        this.audio.src = song.src;
        this.audio.load();
        this.currentSong = song;
      }
      this.audio.play();
      this.isPlaying = true;

      // Frissítés minden másodpercben
      this.audio.ontimeupdate = () => {
        this.currentTime = this.audio.currentTime;
        this.duration = this.audio.duration || 0;
      };

      this.audio.onended = () => {
        this.isPlaying = false;
      };
    },

    togglePlay() {
      if (!this.currentSong) return;
      if (this.isPlaying) {
        this.audio.pause();
        this.isPlaying = false;
      } else {
        this.audio.play();
        this.isPlaying = true;
      }
    },

    seekTo(seconds: number) {
      if (this.audio.duration) {
        this.audio.currentTime = seconds;
      }
    },
  },
});
