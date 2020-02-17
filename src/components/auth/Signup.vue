<template>
  <div class="section">
    <div class="columns is-centered">
      <div class="column is-one-third">
        <form @submit.prevent="signup" class="notification">
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
          </div>
          <div class="field">
            <label class="label">Alias</label>
            <div class="control has-icons-left">
              <input class="input" type="text" placeholder="Text input" v-model="alias" />
              <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
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
import slugify from "slugify";
import db from "@/firebase/init";
import firebase from "firebase";

export default {
  name: "Signup",
  data() {
    return {
      email: null,
      password: null,
      alias: null,
      feedback: null,
      slug: null
    };
  },
  methods: {
    signup() {
      if (this.alias && this.email && this.password) {
        this.slug = slugify(this.alias, {
          replacement: "-",
          remove: /[*+~.()'"!:@]/g,
          lower: true
        });
        let ref = db.collection("users").doc(this.slug);
        ref.get().then(doc => {
          if (doc.exists) {
            this.feedback = "doc exists";
          } else {
            // this.feedback = "doc doesn't exist."
            firebase
              .auth()
              .createUserWithEmailAndPassword(this.email, this.password)
              .catch(err => {
                console.log(err);
                this.feedback= err.message;
              });
          }
        });
      } else {
        this.feedback = "Please enter all the deets.";
      }
    }
  }
};
</script>

<style>
</style>