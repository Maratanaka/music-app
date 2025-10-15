<template>
  <IonPage>
    <div class="home-container">
      <!-- Header: h1 + profil kép -->
      <div class="header">
        <h1>Library</h1>
        <img src="/covers/deadpool.jpg" alt="Profile" class="profile-pic" />
      </div>

      <!-- Albumok grid -->
      <div class="album-grid">
        <SongCard
          v-for="album in albums"
          :key="album.id"
          :id="album.id"
          :title="album.title"
          :artist="album.artist"
          :cover="album.cover"
          @click="playSong(album)"
        />
      </div>

      <!-- Utólag hallgatott dalok -->
      <div class="recently-played">
        <h2>Recently Played</h2>
        <SongCard
          v-for="song in recentSongs"
          :key="song.id"
          :id="song.id"
          :title="song.title"
          :artist="song.artist"
          :cover="song.cover"
          @click="playSong(song)"
        />
      </div>
    </div>
  </IonPage>
</template>

<script setup lang="ts">
import { IonPage } from '@ionic/vue';
import SongCard from '@/components/SongCard.vue';
import { ref } from 'vue';
import { usePlayerStore } from '@/store/playerStore';

const playerStore = usePlayerStore();

const albums = ref([
  { id: 1, title: 'Manchild', artist: 'Sabrina Carpenter', cover: '/covers/Sabrina.png', src: '/music/Sabrina Carpenter - Manchild (Lyrics).mp3' },
  { id: 2, title: 'díva', artist: 'Dszúdló,DESH', cover: '/covers/diva.jpg', src: '/music/Dzsúdló, DESH - Díva (Dalszöveg videó).mp3' },
  { id: 3, title: 'Golden', artist: 'HUNTR/X,EJAE,AUDEY NUNA,REI AMI', cover: '/covers/golden.jpg', src: '/music/“Golden” Official Lyric Video _ KPop Demon Hunters _ Sony Animation [yebNIHKAC4A].mp3' },
  { id: 4, title: 'Back In Black', artist: 'AC/DC', cover: '/covers/back_in_black.jpg', src: '/music/ACDC - Back In Black (Lyrics).mp3' },
]);

const recentSongs = ref([
  { id: 5, title: 'Lose Yourself', artist: 'Eminem', cover: '/covers/eminem.jpg', src: '/music/Eminem - Lose Yourself (Lyrics).mp3' },
  { id: 6, title: 'Shape of You', artist: 'Ed Sheeran', cover: '/covers/shape_of_you.jpg', src: '/music/Gods.mp3' },
  { id: 7, title: 'Blinding Lights', artist: 'The Weeknd', cover: '/covers/Weeknd.jpg', src: '/music/Gods.mp3' },
  { id: 8, title: 'Levitating', artist: 'Dua Lipa', cover: '/covers/levitating.jpg', src: '/music/Gods.mp3' },
]);

const playSong = (song: { id: number; title: string; artist: string; cover: string; src: string }) => {
  playerStore.playSong(song);
};
</script>

<style scoped>
.home-container {
  padding: 12px;
  padding-bottom: 100px; /* PlayerBar helye */
  background: #121212;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y: auto; /* Scroll engedélyezése */
  height: 100%; /* teljes IonPage magasság */
  box-sizing: border-box;
}

/* Header: h1 + profil kép */
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 60px 10px 16px 10px;
}

.header h1 {
  font-size: 28px;
  margin: 0;
}

.profile-pic {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid white;
}

/* Album grid */
.album-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 12px;
}

/* Legutóbb hallgatott dalok */
.recently-played h2 {
  font-size: 20px;
  margin: 12px 10px;
}

.recently-played {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
