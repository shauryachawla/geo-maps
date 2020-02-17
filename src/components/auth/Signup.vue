<template>
  <div class="section">
    <div class="columns is-centered">
      <div class="column is-one-third">
        <form @submit.prevent="signup" class="notification">
          <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left">
              <input class="input is-danger" type="email" placeholder="Email input" v-model="email"/>
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
            </div>
            <p class="help is-danger">This email is invalid</p>
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
            <p class="help is-success">This username is available</p>
          </div>
          <div class="field">
            <label class="label">Alias</label>
            <div class="control has-icons-left">
              <input class="input" type="text" placeholder="Text input" v-model="alias"/>
              <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
              </span>
            </div>
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
export default {
  name: "Signup",
  methods: {
      signup() {
          console.log('Signup')
      }
  },
  data() {
    return {
        email: null,
        password: null,
        alias: null
    };
  }
};
</script>

<style>
</style>