import { defineStore } from 'pinia';
import { ref } from 'vue';

export const usePlayerStore = defineStore('player', () => {
  const currentSong = ref<{ id: number; title: string; artist: string; cover: string; src: string } | null>(null);
  const isPlaying = ref(false);
  const audio = new Audio();

  async function playSong(song: { id: number; title: string; artist: string; cover: string; src: string }) {
    try {
      currentSong.value = song;
      audio.pause();
      audio.src = song.src;
      await audio.load();
      await audio.play();
      isPlaying.value = true;
    } catch (err) {
      console.error('Play error:', err);
      isPlaying.value = false;
    }
  }

  function togglePlay() {
    if (!currentSong.value) return;
    if (isPlaying.value) {
      audio.pause();
      isPlaying.value = false;
    } else {
      audio.play().catch((err) => console.warn('Play error:', err));
      isPlaying.value = true;
    }
  }

  audio.onended = () => {
    isPlaying.value = false;
  };

  return { currentSong, isPlaying, playSong, togglePlay };
});
