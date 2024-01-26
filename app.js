const app = Vue.createApp({
    // template: 'Hi'
    data(){
        return{
            firstName: 'Trizah',
            lastName: 'Nabwire',
            email: 'trizahnabwire20@gmail.com',
            gender: 'female',
            picture: 'https://randomuser.me/api/portraits/women/25.jpg',
        }
    },
    methods:{
        async getUser(){
            const res = await fetch('https://randomuser.me/api')
            const {results} = await res.json()
            // console.log(results)
            this.firstName = results[0].name.first
            this.lastName =  results[0].name.last
            this.email = results[0].email
            this.gender = results[0].gender
            this.picture = results[0].picture.large

        }
    }
})

app.mount('#app')