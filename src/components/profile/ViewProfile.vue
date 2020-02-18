<template>
  <div class="section">
    <div class="columns is-centered">
      <div class="column is-one-third">
        <div v-if="user" class="notification">{{user.alias}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import db from "@/firebase/init";
export default {
  data() {
    return {
      user: null
    };
  },
  name: "ViewProfile",
  mounted() {
    db.collection("users")
      .doc(this.$route.params.id)
      .get()
      .then(ss => {
        this.user = ss.data();
      });
  }
};
</script>

<style>
</style>