<template>
    <div>
        <v-container grid-list-md text-xs-center>
            <v-layout row wrap >
                <v-flex v-for="meetup in meetups" :key="meetup.id" xs4>
                    <v-card class="light-blue accent-3 mb-4" >
                        <v-img
                            :src="meetup.imageUrl"
                            height="250px"
                            cover>
                        </v-img>
                        <v-card-title primary-title>
                            <div>
                                <h3 class="white--text">{{meetup.title}}</h3> 
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
    }
  }
};
</script>

<style>
</style>
