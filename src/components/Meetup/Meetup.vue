<template>
    <v-container>
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
            <v-flex xs12>
                <v-card>
                    <v-card-title>
                        <h4 class="primary--text"> {{meetup.title}}</h4>
                        <template v-if="userIsCreator">
                            <v-spacer></v-spacer>
                            <app-edit :meetup="meetup"></app-edit>
                        </template>
                    </v-card-title>
                <v-img :src="meetup.imageUrl"></v-img>
                <v-card-text>
                    <v-flex class="indigo white--text mb-4" xs3>{{meetup.date | date}} | {{meetup.location}}</v-flex>
                    <div class="text-md-left">
                        <p>{{meetup.description}}</p>
                    </div>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn class="primary">Register</v-btn>
                </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>


export default {
    props: ['id'],

    computed:{
        meetup(){
            return this.$store.getters.loadedMeetup(this.id);
        },
        userIsAuth(){
            return this.$store.getters.user !== null && this.$store.getters.user !== undefined;
        },
        userIsCreator(){
            if(!this.userIsAuth){
                return false;
            }
            return this.$store.getters.user.id === this.meetup.creatorId;
        },
        loading(){
        return this.$store.getters.loading;
        }
    }

};
</script>

<style>
</style>
