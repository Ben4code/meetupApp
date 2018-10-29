<template>
 <v-app>
   <v-navigation-drawer v-model="sideNav" absolute temporary>
     <v-list>
       <v-list-tile v-for="item in menuItems" :key="item.title" router :to="item.link">
        <v-list-tile-action>
          <v-icon>{{item.icon}}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>{{item.title}}</v-list-tile-content>
       </v-list-tile>

       <v-list-tile v-if="userIsAuth" @click="onLogout">
        <v-list-tile-action>
          <v-icon>exit_to_app</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>Logout</v-list-tile-content>
       </v-list-tile>
     </v-list>
     
   </v-navigation-drawer>
    <v-toolbar dark class="indigo 
">
      <v-toolbar-side-icon @click.stop="sideNav = !sideNav"
      class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">Meetup App</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in menuItems" :key="item.title" :to="item.link">
          <v-icon right>{{item.icon}}</v-icon> 
          {{item.title}}
        </v-btn>
        <v-btn flat v-if="userIsAuth" @click="onLogout">
          <v-icon right>exit_to_app</v-icon> 
          Logout
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <router-view></router-view>
    </main>
 </v-app>
</template>

<script>
export default {
  data() {
    return {
      sideNav: false,
    };
  },

  computed: {
    menuItems() {
      let menuItems = [
        { icon: "face", title: "Sign up", link: "/signup" },
        { icon: "lock_open", title: "Sign in", link: "/signin" }
      ]
      if(this.userIsAuth){
        menuItems = [
          { icon: "supervisor_account", title: "View Meetups", link: "/meetups" },
        { icon: "room", title: "Organise Meetup", link: "/meetup/new" },
        { icon: "person", title: "Profile", link: "/profile" }
        ]
      }
      return menuItems;
    },

    userIsAuth(){
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined;
    }
  },
  methods: {
    onLogout(){
      this.$store.dispatch('logout');
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none!important;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.v-btn{
  text-decoration: none!important;
}
</style>
