<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>

      <player-bar class="player-above-tabs" />

      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home" href="/home">
          <ion-icon :icon="playCircle" />
          <ion-label>Listen now</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="radio" href="/radio">
          <ion-icon :icon="radio" />
          <ion-label>Radio</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="library" href="/library">
          <ion-icon :icon="library" />
          <ion-label>Library</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="search" href="/search">
          <ion-icon :icon="search" />
          <ion-label>Search</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon } from '@ionic/vue';
import { playCircle, radio, library, search } from 'ionicons/icons';
import PlayerBar from '@/components/PlayerBar.vue';
</script>

<style scoped>
.player-above-tabs {
  position: absolute;
  bottom: 1px;
  left: 0;
  width: 100%;
  z-index: 100;
}

ion-tab-bar {
  --background: #181818;
  --border-color: #181818;
  --color: rgb(185, 185, 185);
  --color-selected: white;
  border-top: 1px solid #181818;
}
</style>
