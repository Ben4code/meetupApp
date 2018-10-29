<template>
    <div>
        <v-container>
            <v-layout row wrap  v-for="meetup in meetups" :key="meetup.id" class="mb-4">
                <v-flex xs12>
                    <v-card class="deep-orange darken-3">
                        <v-container fluid>
                            <v-layout row>
                                <v-flex xs5 sm4 md3>
                                    <v-img
                                    :src="meetup.imageUrl"
                                    height="130px"
                                    contain
                                    ></v-img>
                                </v-flex>
                                <v-flex xs7 sm8 md9>
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
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card>
                </v-flex>
            </v-layout> 
        </v-container>
    </div>
</template>

<script>
export default {
    computed:{
        meetups(){
             return this.$store.getters.loadedMeetups;
        }
    }
}
</script>

<style>

</style>
