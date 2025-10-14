import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useSongStore = defineStore('song', () => {
  const songs = ref([
    { id: 1, title: 'Ocean Eyes', artist: 'Billie Eilish', cover: '/covers/Billie_Eilish_-_Ocean_Eyes.png' },
    { id: 2, title: 'Blinding Lights', artist: 'The Weeknd', cover: '/covers/The_Weeknd_-_Blinding_Lights.png' },
    { id: 3, title: 'Starlight', artist: 'Muse', cover: '/covers/Muse_-_Starlight.png' }
  ]);

  return { songs };
});
