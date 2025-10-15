<template>
  <IonPage>
    <div class="search-container">
      <!-- Header -->
      <div class="header">
        <h1>Search</h1>
      </div>

      <!-- Keresőmező -->
      <div class="search-bar">
        <ion-input
          v-model="query"
          placeholder="Search songs or artists"
          clear-input
        ></ion-input>
      </div>

      <!-- Eredmények listája -->
      <div class="results">
        <SongCard
          v-for="song in filteredSongs"
          :key="song.id"
          :id="song.id"
          :title="song.title"
          :artist="song.artist"
          :cover="song.cover"
          @click="playSong(song)"
        />
        <div v-if="filteredSongs.length === 0" class="no-results">
          No songs found.
        </div>
      </div>
    </div>
  </IonPage>
</template>

<script setup lang="ts">
import { IonPage, IonInput } from '@ionic/vue';
import SongCard from '@/components/SongCard.vue';
import { ref, computed } from 'vue';
import { usePlayerStore } from '@/store/playerStore';

// Player store
const playerStore = usePlayerStore();

// Teljes dal lista (összes album + recently played)
const songs = ref([
  { id: 1, title: 'Man Best Friend', artist: 'Sabrina Carpenter', cover: '/covers/Sabrina.png', src: '/music/Gods.mp3' },
  { id: 2, title: 'The Art Of Loving', artist: 'Olivia Dean', cover: '/covers/Olivia.png', src: '/music/Olivia.mp3' },
  { id: 3, title: 'Perrie', artist: 'Perrie', cover: '/covers/Perrie.jpg', src: '/music/Perrie.mp3' },
  { id: 4, title: 'Saving Grace', artist: 'Robert Plant', cover: '/covers/Robert.png', src: '/music/Robert.mp3' },
  { id: 5, title: 'Lose Yourself', artist: 'Eminem', cover: '/covers/eminem.jpg', src: '/music/LoseYourself.mp3' },
  { id: 6, title: 'Shape of You', artist: 'Ed Sheeran', cover: '/covers/shape_of_you.jpg', src: '/music/ShapeOfYou.mp3' },
  { id: 7, title: 'Blinding Lights', artist: 'The Weeknd', cover: '/covers/Weeknd.jpg', src: '/music/BlindingLights.mp3' },
  { id: 8, title: 'Levitating', artist: 'Dua Lipa', cover: '/covers/levitating.jpg', src: '/music/Levitating.mp3' },
]);

// Keresőmező tartalma
const query = ref('');

// Szűrt dalok
const filteredSongs = computed(() => {
  if (!query.value) return songs.value;
  const lower = query.value.toLowerCase();
  return songs.value.filter(
    song =>
      song.title.toLowerCase().includes(lower) ||
      song.artist.toLowerCase().includes(lower)
  );
});

// Lejátszás
const playSong = (song: { id: number; title: string; artist: string; cover: string; src: string }) => {
  playerStore.playSong(song);
};
</script>

<style scoped>
.search-container {
  padding: 12px;
  padding-bottom: 100px; /* PlayerBar helye */
  background: #121212;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y: auto;
  height: 100%;
  box-sizing: border-box;
}

.header {
  margin: 60px 10px 16px 10px;
}

.header h1 {
  font-size: 28px;
  margin: 0;
}

/* Keresőmező stílus */
.search-bar ion-input {
  width: 100%;
  padding: 8px 12px;
  border-radius: 12px;
  background: #1f1f1f;
  color: white;
  --padding-start: 12px;
}

/* Dalok listája */
.results {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.no-results {
  text-align: center;
  margin-top: 20px;
  opacity: 0.6;
}
</style>
