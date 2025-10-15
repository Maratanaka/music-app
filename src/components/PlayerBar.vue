<template>
  <ion-footer>
    <ion-toolbar class="player-toolbar">
      <div class="player-left">
        <ion-button @click="playerStore.togglePlay()" fill="clear" class="pla-btn">
          <ion-icon :icon="playerStore.isPlaying ? pause : play" />
        </ion-button>

        <img
          v-if="playerStore.currentSong"
          :src="playerStore.currentSong.cover"
          alt="cover"
          class="cover"
        />

        <div class="title-info">
          <div class="title">{{ playerStore.currentSong?.title || 'No song selected' }}</div>
          <div class="artist" v-if="playerStore.currentSong">{{ playerStore.currentSong.artist }}</div>
        </div>
      </div>

      <!-- Új progress bar -->
      <div class="progress-container" v-if="playerStore.currentSong">
        <input
          type="range"
          min="0"
          :max="playerStore.duration"
          step="0.1"
          :value="playerStore.currentTime"
          @input="onSeek"
        />
      </div>
    </ion-toolbar>
  </ion-footer>
</template>

<script setup lang="ts">
import { IonFooter, IonToolbar, IonButton, IonIcon } from '@ionic/vue';
import { play, pause } from 'ionicons/icons';
import { usePlayerStore } from '@/store/playerStore';

const playerStore = usePlayerStore();

const onSeek = (event: Event) => {
  const target = event.target as HTMLInputElement;
  playerStore.seekTo(Number(target.value));
};
</script>

<style scoped>
.player-toolbar {
  --background: linear-gradient(to right, rgba(27, 27, 27, 0.9), rgba(0, 0, 0, 0.9));
  color: white;
  box-shadow: 0 -2px 10px rgba(0,0,0,0.2);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  padding: 0 12px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.player-left {
  display: flex;
  align-items: center;
  gap: 10px;
}

.cover {
  height: 40px;
  width: 40px;
  border-radius: 6px;
  object-fit: cover;
}

.title-info {
  display: flex;
  flex-direction: column;
}

.title {
  font-weight: bold;
  font-size: 14px;
}

.artist {
  font-size: 12px;
  opacity: 0.8;
}

.pla-btn {
  --color: white;
}

.progress-container {
  width: 100%;
  margin-top: 6px;
}

.progress-container input[type="range"] {
  width: 100%;
  accent-color: #22f2dd;
}
</style>
