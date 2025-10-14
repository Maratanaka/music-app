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
    </ion-toolbar>
  </ion-footer>
</template>

<script setup lang="ts">
import { IonFooter, IonToolbar, IonButton, IonIcon } from '@ionic/vue';
import { play, pause } from 'ionicons/icons';
import { usePlayerStore } from '@/store/playerStore';

const playerStore = usePlayerStore();
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
  align-items: center;
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
</style>
