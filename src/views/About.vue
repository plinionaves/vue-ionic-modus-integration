<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>About</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
      <p>About page</p>
      <ion-button expand="block" @click="$router.back()">Back</ion-button>
    </ion-content>
  </ion-page>
</template>
