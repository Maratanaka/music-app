import { defineStore } from 'pinia';
import { ref } from 'vue';

export const usePlayerStore = defineStore('player', () => {
  const currentSong = ref<{ id: number; title: string; artist: string; cover: string } | null>(null);
  const isPlaying = ref(false);

  function playSong(song: { id: number; title: string; artist: string; cover: string }) {
    currentSong.value = song;
    isPlaying.value = true;
  }

  function togglePlay() {
    if (!currentSong.value) return;
    isPlaying.value = !isPlaying.value;
  }

  return { currentSong, isPlaying, playSong, togglePlay };
});
