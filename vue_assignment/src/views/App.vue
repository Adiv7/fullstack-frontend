<template> 
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">

  <div >
    <nav class="bar">
      <router-link  to="/">Home</router-link>
      |
      <router-link to="/login">Login</router-link>
    </nav>
    <router-view />
   
  </div>
</template>

<script>
    import Home from "../views/pages/Home.vue"
    import Login from "../views/pages/Login.vue"
    
    export default {

        components: {
            Login,
            Home,
            
        },
    }
</script>
<style>

    .bar{
      display:flex;
      justify-content: center;
      min-height: 8vh;
      align-items: center;
      position:sticky;
      top:0;
      list-style:none;
      background-color: beige;
      font-weight: bold;
      font-family: helvetica;
      font-size: xx-large;
      color: brown;
       
    }
    body {
      /*background: linear-gradient(to top, rgba(0, 1%, 52%, 0.5)50%, hsla(0, 1%, 52%, 0.5)50%), url(blog.jpg) !important;
      background-image:linear-gradient(to top, rgb(201, 107, 30) 0%, rgb(241, 149, 43) 100%);
      */
      background-image: url(Home.jpg);
      background-size: 100%;
      font-family: 'Lato', sans-serif !important;
    }
   .h1{
    align-items: center;
      position:sticky;
   }
    
   .button{
    align-items: center;
   }
</style>