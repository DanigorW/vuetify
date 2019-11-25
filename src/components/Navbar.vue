<template>
  <div class="navbar">
      <nav>
        <v-toolbar app color="primary">
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title >
                <span class="white--text">Todo App</span>
                
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn >Sign Out</v-btn>
        </v-toolbar>

        <v-navigation-drawer app temporary dark disable-resize-watcher  floating     v-model="drawer">
    
            <v-list>
                <v-list-item v-for="(item, index) in links" :key="index" router :to="item.route">
                    {{item.text}}
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        
      </nav>
  </div>
</template>

<script>
export default {
    name: 'Navbar',

    data(){
        return{
            drawer: false,
            links: [{text: 'Dashbord', route: '/'},{text: 'Contact', route: '/contact'},{text: 'Github', route: '/github'}]

        }
    }
}
</script>

<style>

</style>