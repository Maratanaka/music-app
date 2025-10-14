<template>
  <ion-card class="song-card" @click="$emit('click')">
    <img :src="cover" :alt="title" class="cover"/>
    <div class="song-info">
      <span class="title">{{ title }}</span>
      <span class="artist">{{ artist }}</span>
    </div>
  </ion-card>
</template>

<script setup lang="ts">
import { IonCard } from '@ionic/vue';

defineProps<{
  id: number;
  title: string;
  artist: string;
  cover: string;
}>();
</script>

<style scoped>
.song-card {
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: rgb(45, 45, 45);
  border-radius: 12px;
  padding: 0px;
  margin: 5px;
}

.cover {
  width: 60px;
  height: 60px;
  border-radius: 6px;
  object-fit: cover;
}

.song-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
  color: white;
  overflow: hidden;
}

.title {
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.artist {
  font-size: 0.9em;
  color: rgb(235, 235, 235);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
