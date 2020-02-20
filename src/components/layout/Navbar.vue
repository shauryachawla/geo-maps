<template>
  <nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link class="navbar-item" :to="{name: 'GMap'}">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
      </router-link>

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start"></div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <router-link class="button is-primary" v-if="!user" :to="{name: 'Signup'}">
              <strong>Sign up</strong>
            </router-link>
            <router-link :to="{name: 'Login'}" v-if="!user" class="button is-light">Login</router-link>
            <router-link
              v-if="slug"
              :to="{name:'ViewProfile', params:{id: slug}}"
              class="button is-link is-light is-medium"
            >{{user.email}}</router-link>

            <a class="button is-light" v-if="user" @click="logout">Log out</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import firebase from "firebase";
import db from "@/firebase/init";

export default {
  data() {
    return {
      user: null,
      slug: null
    };
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user;
        // console.log(user)
        db.collection("users")
          .where("user_id", "==", user.uid)
          .get()
          .then(ss => {
            ss.forEach(sth => {
              this.slug = sth.id;
            });
          });
      } else {
        this.user = null;
      }
    });
  },
  mounted() {},
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "Login" });
        });
    }
  }
};
</script>

<style>
</style>