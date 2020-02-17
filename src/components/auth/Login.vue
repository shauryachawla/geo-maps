<template>
  <div class="section">
    <div class="columns is-centered">
      <div class="column is-one-third">
        <form @submit.prevent="login" class="notification">
          <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left">
              <input class="input" type="email" placeholder="Email input" v-model="email" />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
            </div>
          </div>

          <div class="field">
            <label class="label">Password</label>
            <div class="control has-icons-left">
              <input
                class="input is-success"
                type="password"
                placeholder="Text input"
                v-model="password"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
            </div>
            <p v-if="feedback" class="help is-danger">{{feedback}}</p>
          </div>

          <div class="field is-grouped is-grouped-centered">
            <p class="control">
              <button class="button is-primary">Submit</button>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      email: null,
      password: null,
      feedback: null
    };
  },
  methods: {
    login() {
      if (this.email && this.password) {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(() => {
            this.$router.push({ name: "GMap" });
          })
          .catch(err => {
            this.feedback = err.message;
            console.log(err);
          });
      } else {
          this.feedback = "Please enter the credentials."
      }
    }
  }
};
</script>

<style>
</style>