<template>
    <v-dialog width="400px" persistent v-model="editDialog">
        <v-btn fab accent slot="activator" class="primary">
            <v-icon>edit</v-icon>
        </v-btn>
        <v-card>
            <v-container>
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-card-title><h4>Edit Meetup</h4></v-card-title>
                    </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-card-text>
                            <v-text-field 
                           name="title"
                           label="Title"
                           id="title"
                           v-model="editedTitle"
                           required>
                           </v-text-field>
                           <v-textarea 
                           name="description"
                           label="Description"
                           id="description"
                           v-model="editedDescription"
                           multi-line
                           required>
                           </v-textarea>
                        </v-card-text>
                    </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <v-layout row wrap="">
                    <v-flex xs12>
                        <v-card-actions>
                            <v-btn flat class="red--text" @click="editDialog = false">Close</v-btn>
                            <v-spacer></v-spacer>
                            <v-btn flat class="primary--text" @click="onSaveChanges">Save</v-btn>
                        </v-card-actions>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    props: ['meetup'],
    data(){
        return{
            editDialog: false,
            editedTitle: this.meetup.title,
            editedDescription: this.meetup.description
        }
    },
    methods: {
        onSaveChanges(){
            if(this.editedTitle.trim() === '' || this.editedDescription === ''){
                return;
            }
            this.editDialog = false;
            this.$store.dispatch('updateMeetupData', {id: this.meetup.id, title: this.editedTitle, description: this.editedDescription})
        }
    } 
}
</script>

<style>

</style>
