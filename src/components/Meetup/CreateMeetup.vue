<template>
   <v-container>
       <v-card class="#BDBDBD">
        <br><br>
       <v-layout row>
           <v-flex xs12>
               <h2 class="primary--text">Create a new Meetup</h2>
           </v-flex>
       </v-layout>
       <v-layout row>
           <v-flex xs12>
               <form @submit.prevent="onCreateMeetup">
                   <v-layout row>
                       <v-flex xs12 sm6 offset-sm3>
                           <v-text-field 
                           name="title"
                           label="Title"
                           id="title"
                           v-model="title"
                           required>
                           </v-text-field>
                       </v-flex>
                   </v-layout>
                   <v-layout row>
                       <v-flex xs12 sm6 offset-sm3>
                           <v-text-field 
                           name="location"
                           label="Location"
                           id="location"
                           v-model="location"
                           required>
                           </v-text-field>
                       </v-flex>
                   </v-layout>
                   <v-layout row>
                       <v-flex xs12 sm6 offset-sm1>
                           <v-btn raised class="primary" @click="onPickFile">Upload Image</v-btn>
                           <input type="file" style="display: none;" ref="fileInput" accept="image/*" @change="filePicked">
                       </v-flex>
                   </v-layout>
                    <v-layout row>
                       <v-flex xs12 sm6 offset-sm3>
                          <img :src="imageUrl" height="150">
                       </v-flex>
                   </v-layout>
                   <v-layout row>
                       <v-flex xs12 sm6 offset-sm3>
                           <v-textarea 
                           name="description"
                           label="Description"
                           id="description"
                           v-model="description"
                           required>
                           </v-textarea>
                       </v-flex>
                   </v-layout>
                   <v-layout row>
                       <v-flex xs12 sm6 offset-sm3>
                           <br><br><br>
                           <h4>Choose date</h4>                           
                       </v-flex>
                   </v-layout>
                   <v-layout row>
                       <v-flex xs12 sm6 offset-sm3>
                           <v-date-picker v-model="date" :landscape="true">   
                           </v-date-picker>
                       </v-flex>
                   </v-layout>
                   <br><br><br>
                   <v-layout row>
                       <v-flex xs12 sm6 offset-sm3>
                           <h4>Choose time</h4>                           
                       </v-flex>
                   </v-layout>
                    <v-layout>
                        <v-flex xs12 sm6 offset-sm3>
                           <v-time-picker v-model="time"  format="24hr" :landscape="true">   
                           </v-time-picker>
                       </v-flex>
                    </v-layout>
                   <v-layout row>
                       <v-flex xs12 sm6 offset-sm3>
                           <v-btn :disabled="!formIsValid" class="primary" type="submit">Create Meetup</v-btn>
                       </v-flex>
                   </v-layout>
               </form>
           </v-flex>
       </v-layout>
       <br><br>
       </v-card>
       
   </v-container>
</template>

<script>
export default {
    data(){
        return {
            title: '',
            location: '',
            description: '',
            imageUrl: '',
            image: null,
            date: '',
            time: new Date()
        }
    },
    computed: {
        formIsValid(){
            return this.title !== '' && this.location !== '' && this.imageUrl !== '' && this.description !== ''; 
        },
        submitDate(){
            
            const date = new Date(this.date);
            if( typeof this.time === 'string'){
                const hours = this.time.match(/^(\d+)/)[1];
                const minutes = this.time.match(/:(\d+)/)[1];
                date.setHours(hours);
                date.setMinutes(minutes);
            }else{
                date.setHours(this.time.getHours());
                date.setMinutes(this.time.getMinutes());
            }
             return date;
        }
    },
    methods:{
        onCreateMeetup(){
            if(!this.image){
                return ; 
            }
            const meetupData = {
                title: this.title,
                location: this.location,
                image: this.image,
                description: this.description,
                date: this.submitDate
            }
            this.$store.dispatch('createMeetup', meetupData);
            this.$router.push('/meetups');
        },
        onPickFile(){
            this.$refs.fileInput.click();   
        },
        filePicked(event){
            const files = event.target.files;
            console.log(files);
            let fileName = files[0].name;
            if(fileName.lastIndexOf('.') <= 0){
                return alert('Please add a valid image file!');
            }
            //Call filereader constructor
            const fileReader = new FileReader();

            //Async 'on load' listener that returns base64 repre. of the image.
            fileReader.addEventListener('load', ()=>{
                this.imageUrl = fileReader.result
            })
            
            //triggers an event listener
            fileReader.readAsDataURL(files[0]);

            //Keep raw image file for db storage
            this.image = files[0];
        }
    }
}
</script>

<style>

</style>
