<template>
  <IonPage>
    <div class="home-container">
      <div v-if="player.currentSong" class="player-full">
        <p class="artist-name">{{ player.currentSong.artist }}</p>
        <img
          :src="player.currentSong.cover"
          alt="cover"
          class="song-cover"
        />

        <div class="song-info">
          <h3>{{ player.currentSong.title }}</h3>
          <p>{{ player.currentSong.artist }}</p>
        </div>

        <div class="controls">
          <button class="circle-btn small">
            <span class="material-symbols-outlined">skip_previous</span>
          </button>

          <button class="circle-btn large" @click="player.togglePlay">
            <span class="material-symbols-outlined">
              {{ player.isPlaying ? 'pause' : 'play_arrow' }}
            </span>
          </button>

          <button class="circle-btn small">
            <span class="material-symbols-outlined">skip_next</span>
          </button>
        </div>
      </div>
    </div>
  </IonPage>
</template>

<script setup lang="ts">
import { IonPage } from '@ionic/vue';
import { usePlayerStore } from '@/store/playerStore';
const player = usePlayerStore();
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined');

.home-container {
  background: #121212;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y: auto;
  height: 100%;
  box-sizing: border-box;
}

.artist-name {
  font-size: 18px;
  color: #aaa;
  margin: 60px 10px 16px 10px;
}

.player-full {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  padding: 24px;
}

.song-cover {
  width: 80%;
  max-width: 320px;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  margin-top: 20px;
}

.song-info {
  margin-top: 30px;
}

.song-info h3 {
  font-size: 26px;
  margin: 0;
}

.song-info p {
  margin-top: 8px;
  color: #aaa;
  font-size: 18px;
}

/* Kontroller gombok */
.controls {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  margin-top: 20px;
}

.circle-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 50%;
  background: #282828;
  color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
 
}



.circle-btn.small {
  width: 55px;
  height: 55px;
  font-size: 28px;
}

.circle-btn.large {
  width: 80px;
  height: 80px;
  font-size: 34px;
}

.material-symbols-outlined {
  font-size: inherit;
}
</style>
