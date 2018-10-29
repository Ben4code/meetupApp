<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12>
                <v-card>
                    <v-card-title>
                    <h4 class="primary--text"> {{meetup.title}}</h4>
                </v-card-title>
                <v-img :src="meetup.imageUrl"></v-img>
                <v-card-text>
                     
                        <v-flex class="indigo white--text mb-4" xs3>{{meetup.date | date}}</v-flex>
                    
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
        }
    }
};
</script>

<style>
</style>
