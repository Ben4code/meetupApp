<template>
    <div>
        <v-container>
            <v-layout row>
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
            <v-layout row wrap v-if="!loading">
                <v-flex xs12>
                    <v-carousel>
                        <v-carousel-item
                        v-for="meetup in meetups"
                        style="cursor: pointer"
                        :key="meetup.id"
                        @click="onLoadMeetup(meetup.id)"
                        :src="meetup.imageUrl">
                        <div class="title text-center">
                            {{meetup.title}}
                        </div>
                        </v-carousel-item>
                    </v-carousel>
                </v-flex>
            </v-layout>
            <v-layout row wrap class="mt-4">
                <v-flex xs12 sm6 class="text-xs-center text-sm-right">
                    <v-btn large to="/meetups" class="info">Explore Meetups</v-btn>
                </v-flex>
                <v-flex xs12 sm6 class="text-xs-center text-sm-left">
                    <v-btn large to="/meetup/new" class="info">Organise Meetups</v-btn>
                </v-flex>      
            </v-layout>
            <div>
                <br><br>
                <transition name="fade">
                    <div class="alert alert-info" role="alert" v-if="show">
                        A simple secondary alert—check it out!
                    </div>
                </transition>
                <transition name="slide">
                    <div class="alert alert-info" role="alert" v-if="show">
                        A simple secondary alert—check it out!
                    </div>
                </transition>
                <br><br>
                <button class="btn btn-primary" @click="show = !show"> Show me</button>
                
                
                
            </div>
            
        </v-container>
    </div>
</template>

<script>
export default {
  computed: {
    meetups() {
      return this.$store.getters.featuredMeetups;
    },
    loading(){
        return this.$store.getters.loading;
    }
  },
  methods: {
    onLoadMeetup(id) {
      this.$router.push("/meetups/" + id);
    }
  },
  data() {
    return {
      show: false
    };
  }
};
</script>

<style scoped>
.fade-enter{
    opacity: 0;

}

.fade-enter-active{
    transition: all .5s ease-in;
}

.fade-leave-active{
    transition: all .5s ease-in;
    opacity: 0;
}
.slide-enter{
    opacity: 0;
}

.slide-enter-active{
    animation: slide-in .5s ease-out forwards;
    transition: opacity .5s;
}

.slide-leave-active{
    animation: slide-out .5s ease-out forwards;
    transition: opacity .5s;
    opacity: 0;
}

@keyframes slide-in{
    from{
        transform: translateY(20px);
    }
    to{
        transform: translateY(0);
    }
}

@keyframes slide-out{
    from{
        transform: translateY(0);
    }
    to{
        transform: translateY(20px);
    }
}



.title {
  position: absolute;
  bottom: 50px;
  left: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  font-size: 2em;
  padding: 20px;
  transform: translateX(-50%);
}
</style>

