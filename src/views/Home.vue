<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Ionic Vue Integration</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
      <ion-button expand="block" @click="showAlert">Show alert</ion-button>
      <ion-button expand="block" @click="showLoading">Show loading</ion-button>
      <ion-button expand="block" @click="$router.push('/about')">About page</ion-button>
    </ion-content>
  </ion-page>
</template>

<script>
export default {
  name: 'home',
  methods: {
    showAlert() {
      this.$ionic.alertController.create({
        header: 'Vue Ionic Alert',
        message: 'This is an incredible integration between Vue and Ionic!',
        buttons: ['Ok']
      }).then(a => a.present());
    },
    showLoading() {
      this.$ionic.loadingController.create({
        message: 'Loading...'
      }).then(l => {
        l.present();
        setTimeout(() => l.dismiss(), 3000);
      });
    }
  }
}
</script>
