<template>
    <div>
        <v-container grid-list-md text-xs-center>
            <v-layout row v-if="loading">
                <v-flex xs12 sm6 offset-sm3>
                    <v-progress-circular
                        :size="70"
                        :width="7"
                        color="blue"
                        indeterminate
                        v-if="loading"
                    ></v-progress-circular>
                </v-flex>
            </v-layout>
            <v-layout row wrap v-else>
                <v-flex v-for="meetup in meetups" :key="meetup.id" xs4>
                    <v-card class="light-blue accent-3 mb-4" >
                        <router-link :to="`/meetups/${meetup.id}`">    
                            <v-img
                                :src="meetup.imageUrl"
                                height="250px"
                                cover>
                            </v-img>
                        </router-link>
                        <v-card-title primary-title>
                            <div>
                                <h3 class="white--text" :to="`/meetups/${meetup.id}`">{{meetup.title}}</h3> 
                                <div>{{meetup.date | date}}</div>
                            </div>
                        </v-card-title><hr>
                        <v-card-actions>
                            <v-btn flat class="indigo white--text" :to="`/meetups/${meetup.id}`">
                                View Meetup
                                <v-icon right>
                                    arrow_forward
                                </v-icon>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout> 
        </v-container>
    </div>
</template>

<script>
export default {
  computed: {
    meetups() {
      return this.$store.getters.loadedMeetups;
    },
    loading(){
        return this.$store.getters.loading;
    }
  }
};
</script>

<style>
</style>
