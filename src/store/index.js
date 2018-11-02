import Vue from 'vue';
import Vuex from 'vuex';
import * as firebase from 'firebase';


Vue.use(Vuex);

export const store = new Vuex.Store ({
    state: {  
        loadedMeetups: [
            {imageUrl: 'https://www.nairaland.com/attachments/3300373_2820498ppppppppppppppppppjpegc2e079bf5b84889db3c189035131b209_jpeg_jpeg5a63beec77cbb1d2f89beae133213a53', 
            id: 'ssdwnw2332wk', 
            title: 'Meet up in Enugu',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sapiente accusamus ab optio ipsam perspiciatis eum vitae nobis deleniti itaque, nemo sequi unde consequatur adipisci odit non natus iure doloremque. Corporis voluptatem, explicabo molestias debitis aliquam laudantium aliquid earum unde ipsa consequatur cupiditate accusamus dolorem deserunt illo consequuntur, itaque dolores voluptas? Dolor nam similique perferendis enim fuga excepturi facilis consectetur amet quo magni totam harum, atque laudantium ducimus nemo nostrum necessitatibus natus provident ipsa corporis. Deleniti minus ut fugit saepe sapiente nesciunt culpa facere magni reprehenderit quaerat, non voluptates voluptate, et vel nam blanditiis veritatis quidem nemo molestias excepturi error ullam! Libero asperiores magnam labore soluta deleniti magni sit corporis illum eos cumque. Impedit vero blanditiis odio fuga explicabo. Sunt placeat quia molestias distinctio quaerat dolore qui, aut odit, tempore quas perspiciatis molestiae nulla totam cupiditate. Recusandae illum veritatis et aut, eaque ab nam hic ex repellat culpa? Voluptate quam veniam laborum fugit minima nam. Officia, fugiat perspiciatis esse, vel debitis quae, laboriosam assumenda facere dignissimos vitae reiciendis expedita nobis. Sapiente corrupti libero placeat repellat nemo quis repudiandae exercitationem inventore fugit adipisci. Eos distinctio, at ea nulla sunt quae iusto a dignissimos tempora atque veritatis enim nisi magnam blanditiis ullam.',
            date: '2018-10-19'
        },
            {imageUrl: 'https://static-naija.akamaized.net/vllkyt14d1lhpu4bf8.5e7215c2.jpg', 
            id: 'dwnw2332wk', 
            title: 'Meet up in Lagos',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sapiente accusamus ab optio ipsam perspiciatis eum vitae nobis deleniti itaque, nemo sequi unde consequatur adipisci odit non natus iure doloremque. Corporis voluptatem, explicabo molestias debitis aliquam laudantium aliquid earum unde ipsa consequatur cupiditate accusamus dolorem deserunt illo consequuntur, itaque dolores voluptas? Dolor nam similique perferendis enim fuga excepturi facilis consectetur amet quo magni totam harum, atque laudantium ducimus nemo nostrum necessitatibus natus provident ipsa corporis. Deleniti minus ut fugit saepe sapiente nesciunt culpa facere magni reprehenderit quaerat, non voluptates voluptate, et vel nam blanditiis veritatis quidem nemo molestias excepturi error ullam! Libero asperiores magnam labore soluta deleniti magni sit corporis illum eos cumque. Impedit vero blanditiis odio fuga explicabo. Sunt placeat quia molestias distinctio quaerat dolore qui, aut odit, tempore quas perspiciatis molestiae nulla totam cupiditate. Recusandae illum veritatis et aut, eaque ab nam hic ex repellat culpa? Voluptate quam veniam laborum fugit minima nam. Officia, fugiat perspiciatis esse, vel debitis quae, laboriosam assumenda facere dignissimos vitae reiciendis expedita nobis. Sapiente corrupti libero placeat repellat nemo quis repudiandae exercitationem inventore fugit adipisci. Eos distinctio, at ea nulla sunt quae iusto a dignissimos tempora atque veritatis enim nisi magnam blanditiis ullam.',
            date: '2018-05-19'
        },
            {imageUrl: 'http://4.bp.blogspot.com/-BmJBkSG3-vc/UW03kNVqnuI/AAAAAAAAiT8/Im_cdNBln_E/s640/abj+16.jpg', 
            id: 'swnw2332wk', 
            title: 'Meet up in Abuja',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sapiente accusamus ab optio ipsam perspiciatis eum vitae nobis deleniti itaque, nemo sequi unde consequatur adipisci odit non natus iure doloremque. Corporis voluptatem, explicabo molestias debitis aliquam laudantium aliquid earum unde ipsa consequatur cupiditate accusamus dolorem deserunt illo consequuntur, itaque dolores voluptas? Dolor nam similique perferendis enim fuga excepturi facilis consectetur amet quo magni totam harum, atque laudantium ducimus nemo nostrum necessitatibus natus provident ipsa corporis. Deleniti minus ut fugit saepe sapiente nesciunt culpa facere magni reprehenderit quaerat, non voluptates voluptate, et vel nam blanditiis veritatis quidem nemo molestias excepturi error ullam! Libero asperiores magnam labore soluta deleniti magni sit corporis illum eos cumque. Impedit vero blanditiis odio fuga explicabo. Sunt placeat quia molestias distinctio quaerat dolore qui, aut odit, tempore quas perspiciatis molestiae nulla totam cupiditate. Recusandae illum veritatis et aut, eaque ab nam hic ex repellat culpa? Voluptate quam veniam laborum fugit minima nam. Officia, fugiat perspiciatis esse, vel debitis quae, laboriosam assumenda facere dignissimos vitae reiciendis expedita nobis. Sapiente corrupti libero placeat repellat nemo quis repudiandae exercitationem inventore fugit adipisci. Eos distinctio, at ea nulla sunt quae iusto a dignissimos tempora atque veritatis enim nisi magnam blanditiis ullam.',
            date: '2018-06-09'
        }
        ],
        user: null,
        loading: false,
        error: null  
    },
   
    getters: {
        loadedMeetups(state){
            return state.loadedMeetups.sort((meetupA, meetupB)=>{
                return meetupA.date < meetupB.date
            })
        },
        featuredMeetups(state, getters){
            return getters.loadedMeetups.slice(0, 5);
        },
        loadedMeetup(state){
            return (meetupId) =>{
                return state.loadedMeetups.find((meetup)=>{ 
                    return meetup.id === meetupId
                });
            }
        },
        user(state){
            return state.user;
        },
        loading(state){
            return state.loading;
        },
        error(state){
            return state.error
        }

    },

    mutations: {
        setLoadedMeetups(state, payload){
            state.loadedMeetups = payload;
        },
        createMeetup(state, payload){
            state.loadedMeetups.push(payload);
        },
        updateMeetup(state, payload){
            const meetup = state.loadedMeetups.find((meetup)=>{
                return meetup.id === payload.id;
            });
            if(payload.title){
                meetup.title = payload.title
            }
            if(payload.description){
                meetup.description = payload.description
            }
            if(payload.date){
                meetup.date = payload.date
            }
        },
        signUserUp(state, payload){
            state.user = payload;
        },
        setLoading(state, payload ){
            state.loading = payload;
        },
        setError(state, payload){
            state.error = payload;
        },
        clearError(state){
            state.error = null;
        },
        
    },

    actions: {
        loadMeetups({commit}){
            commit('setLoading', true);

            firebase.database().ref('meetups').once('value')
            .then((data)=>{
                const meetups = [];
                const obj = data.val();
                for(let key in obj){
                    meetups.push({
                        id: key,
                        title: obj[key].title,
                        description: obj[key].description,
                        imageUrl: obj[key].imageUrl,
                        date: obj[key].date,
                        location: obj[key].location,
                        creatorId: obj[key].creatorId
                    })
                }
                commit('setLoading', false);
                commit('setLoadedMeetups', meetups);
            })
            .catch(err=>{
                console.log(err);
                commit('setLoading', true);
            });
        },
        createMeetup( {commit, getters}, payload ){
            //Store values except image in DB.
           
            const meetup = {
                title: payload.title,
                location: payload.location,
                description: payload.description,
                date: payload.date.toISOString(),
                creatorId: getters.user.id   
            } 

            //Reach out to firebase and store meetup.
            let imageUrl;
            let key;
            //Push values to firebase db
            firebase.database().ref('meetups').push(meetup)
            .then((data)=>{
                key = data.key;
                //Key is the id of the entry.
                return key;
            })
            //key is made available after its returned above.
            .then(key=>{
                //Get image file name and extention so we can push to the storage.
                const fileName = payload.image.name;
                const ext = fileName.slice(fileName.lastIndexOf('.'));
                return firebase.storage().ref('meetups/' + key + ext).put(payload.image);
            })
            //this process returns a promise so we chain a 'then' and return the process.
            //this promise also contains results of the image stored.
            .then(fileData=>{
                
                //obtain url pointing to our stored file
                console.log("the Value: ", fileData);
                firebase.storage().ref().child(fileData.ref.fullPath).getDownloadURL()
                .then(url=>{
                    imageUrl = url;
                    console.log(imageUrl);
                    return imageUrl 
                })
                .then((imageUrl)=>{
                    //Once url is obtained, we update the imageUrl value on the DB
                    firebase.database().ref('meetups').child(key).update({imageUrl: imageUrl});
                    return imageUrl;
                })
                .then((imageUrl)=>{
                    commit('createMeetup', {...meetup, id: key, imageUrl: imageUrl});
                })
            })
            .catch((err)=>{
                console.log(err);
            })
        },

        updateMeetupData({commit}, payload){
            commit('setLoading', true);
            const updateData = {}
            if(payload.title){
                updateData.title = payload.title
            }
            if(payload.description){
                updateData.description = payload.description
            }
            if(payload.date){
                updateData.date = payload.date
            }
            firebase.database().ref('meetups').child(payload.id).update(updateData)
            .then(()=>{
                commit('updateMeetup', payload);                
            })
            .then(()=>{
                commit('setLoading', false);
            })
            .catch((err)=>{
                console.log(err);
                commit('setLoading', false);
            })
        },
        
        signUserUp({commit}, payload){
            commit('setLoading', true);
            commit('setError');
            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
            .then(user=>{
                commit('setLoading', false);
                const newUser = {
                    id: user.uid,
                    registeredMeetups: [],
                }
                commit('signUserUp', newUser);
            }).catch(error=>{
                commit('setLoading', false);
                commit('setError', error);
                console.log(error)
            })
        }, 

        signUserIn({commit}, payload){
            commit('setLoading', true);
            commit('setError');
            firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
            .then(user=>{
                commit('setLoading', false);
                const newUser = {
                    id: user.uid,
                    registeredMeetups: [],
                }

                commit('signUserUp', newUser);
            }).catch(error=>{
                commit('setLoading', false);
                commit('setError', error);
                console.log(error)
            })
        },
        autoSignIn({commit}, payload){
            commit('signUserUp', {id: payload.uid, registeredMeetups: []})
        },
        logout({commit}){
            firebase.auth().signOut();
            commit('signUserUp', null);
        },
        clearError({commit}){
            commit('clearError')
        }   
    }
    

});