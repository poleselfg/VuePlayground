<template lang="">
  <div class="users">
    <v-card class="mx-auto " id="card" tile>
      <h1>User Component</h1>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title
            v-for="user in users"
            v-bind:key="user.name"
            class="liContent"
            >{{ user.name }}-{{ user.email }}
            <v-btn class="btnNav" x-small v-on:click="deleteUser(user)">
              Delete
            </v-btn>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-form v-on:submit.prevent="addUser">
        <v-container class="inputContainer">
          <v-row class="inputRow">
            <v-text-field
              v-model="newUser.name"
              :counter="10"
              label="First name"
              required
            ></v-text-field>
          </v-row>
          <v-row class="inputRow">
            <v-text-field
              v-model="newUser.email"
              label="E-mail"
              required
            ></v-text-field>
          </v-row>
          <v-btn class="mr-4" id="btnSubmit" type="submit">
            submit
          </v-btn>
        </v-container>
      </v-form>
    </v-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      users: [],
      newUser: {},
    };
  },

  methods: {
    addUser() {
      this.users.push(this.newUser);
      this.newUser = {};
    },
    deleteUser(user) {
      this.users.splice(this.users.indexOf(user), 1);
    },
  },
  created() {
    this.$http
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => (this.users = res.body));
  },
};
</script>
<style lang="scss">
.users {
  background: url("../assets/madera.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  padding: 25px;
  display: flex;
  justify-content: center;
  height: 100vh;
}

h1 {
  font-family: "Roboto";
  margin: 20px;
  padding-top: 20px;
}

.liContent {
  margin-top: 30px;
}

.inputRow {
  max-width: 400px;
}

.inputContainer {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#card {
  max-width: 600px;
  height: 100%;
  border-radius: 50px;
  filter: drop-shadow(0 0 0.75rem black);
}

#btnSubmit {
  width: 140px;
  height: 45px;
  font-family: "Roboto", sans-serif;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  margin-top: 30px;
}

#btnSubmit:hover {
  background-color: #08ad6b;
  box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
  color: #fff;
  transform: translateY(-7px);
}
</style>
