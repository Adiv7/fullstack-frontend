<template>
    <div class="form">
    <h1>Login</h1>
    <form login @submit.prevent="handleSubmit">
         <label for="email">Email: </label>
         <input type="email" name="email" v-model="email" />
         <div v-show="submitted && !email">Email is required</div>
 
         <br /><br />
 
         <label for="password">Password: </label>
         <input type="password" name="password" v-model="password" />
         <div v-show="submitted && !password">password is required</div>
 
         <br /><br />
         
 
         <button>Login</button>
         <div v-if="error">{{ error }}</div>
    </form>
 
    </div>
 </template>

<script>
    import Home from "./Home.vue"
    import { userService } from "../../services/users.service.js"
    export default {
        data() {
            return {
                email: "",
                password: ""
            }
        },
        methods: {
            handleSubmit(e) {
                this.submitted = true
                const {
                    email,
                    password
                } = this

                if (!(email && password)) {
                    return;
                }

                if (!(EmailValidator.validate(email))) {
                    this.error = "Email must be a valid email."
                    return;
                }

                const password_pattern = /^(?=[^A-Z][A-Z])(?=[^a-z][a-z])(?=[^0-9]*[0-9]).{8,16}$/
                if (!(password_pattern.test(password))) {
                    this.error = "Password not strong enough."
                    return;
                }

                alert("Button clicked")

            }
            
        },
        mounted() {
            //this.email=this.$route.params.email;
            //this.password=this.$route.params.password;
            
            userService.login(this.$route.params.email, this.$route.params.password) 
        .then(result => {
                console.log("Auth - go to dash")
                this.$router.push("/dashboard")
            })
            .catch(error => {
                this.error = error;
                this.loading = false;
            })
        }
    }
</script>
<style scoped>
form{
    
     width: 50%;
     margin: auto; 
    text-align: center;
   padding: 20px;
   border-style: solid;
   border-color: #B6C7D6;
   border-radius: 20px;
   background-color: #EAF0F6;
       
      
}
h1 {
    font-family: var(--bs-font-century);
    color: black;
    text-align: center;
}
button:hover {
    background: rgb(230, 201, 167);
    transition: all 0.3s ease;
    
}
</style>