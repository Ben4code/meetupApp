<template>
    <v-dialog width="400px" persistent v-model="editDialog">
        <v-btn accent slot="activator" class="primary">
            <p>Edit Date</p>
        </v-btn>
        <v-card>
            <v-container>
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-card-title><h4>Edit Meetup Date</h4></v-card-title>
                    </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-date-picker v-model="editableDate" style="100%" actions>
                            <template scope="{save, cancel}">
                                <v-btn class="red--text draken-1" flat @click.native="editDialog = false">Close</v-btn>
                                <v-btn class="blue--text draken-1" flat @click.native="onSaveChanges">Save</v-btn>
                            </template>
                        </v-date-picker>
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
                editableDate: null
            }
        },
        created(){
            this.editableDate = new Date(this.meetup.date);
        },
        methods:{
            onSaveChanges(){
                const newDate = new Date(this.meetup.date);
            }
        }
    }
</script>