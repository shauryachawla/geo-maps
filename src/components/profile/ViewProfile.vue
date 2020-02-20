<template>
  <div class="section">
    <div class="columns is-centered">
      <div class="column is-two-fifths">
        <div v-if="user" class="notification">
          <p class="is-size-2" >{{user.alias}}'s wall</p>
          <!-- <div class="is-divider"></div> -->
          <div class="field">
            <label class="label has-text-centered">Comments</label>
            <div class="control">
              <input
                v-model="content"
                @keyup.enter="addComment"
                class="input"
                type="text"
                placeholder="Add a comment"
              />
            </div>
            <p v-if="feedback" class="help is-danger">{{feedback}}</p>
          </div>
          <div class="is-divider"></div>
          <article class="media">
            <div v-if="comments" class="media-content">
              <div v-for="(comment,index) in comments" :key="index" class="content">
                <p>
                  <strong>{{comment.from}}</strong>
                  <small>{{comment.time}}</small>
                  <br />
                  {{comment.content}}
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import db from "@/firebase/init";
import moment from "moment";

export default {
  data() {
    return {
      feedback: null,
      content: null,
      user: null,
      comments: [],
      alias: null
    };
  },
  name: "ViewProfile",
  methods: {
    addComment() {
      if (this.content) {
        let newComment = {
          content: this.content,
          from: this.alias,
          to: this.$route.params.id,
          time: Date.now()
        };
        db.collection("comments").add(newComment);
        newComment.time = moment(newComment.time).calendar()
        this.comments.push(newComment);
        this.content = null;
      } else {
        this.feedback = "Please enter something first!";
      }
    }
  },
  created() {
    let uid = firebase.auth().currentUser.uid;
    db.collection("users")
      .where("user_id", "==", uid)
      .get()
      .then(ss => {
        ss.forEach((sth) => {
          // console.log(sth.data())
          this.alias = sth.data().alias
        })
      });
  },
  mounted() {
    db.collection("users")
      .doc(this.$route.params.id)
      .get()
      .then(ss => {
        this.user = ss.data();
      });
    db.collection("comments")
      .get()
      .then(ss => {
        ss.forEach(doc => {
          // console.log(doc.data())
          // console.log(this.user);
          // console.log(this.$route.params.id)
          if (doc.data().to == this.$route.params.id) {
            this.comments.push({
              from: doc.data().from,
              to: doc.data().to,
              content: doc.data().content,
              time: moment(doc.data().time).calendar()
            });
            // console.log(doc);
          }
        });
      });
  }
};
</script>

<style>
</style>