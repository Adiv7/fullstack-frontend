<template>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
 <div class="background">
        <div class ="title">
        <h1>Welcome to my blog!</h1>
        <h1>Here you can choose an article to read</h1>
        <em v-if="loading">LOADING ARTICLES...</em>
     </div>
     <div class="list">
        <ul v-if ="articles.length">
            <li v-for="article in articles" :key=" article.article_id">
                <router-link :to="'/article/' + article.article_id">
                    {{article.title + ' by ' + article.author }}
                </router-link>
            </li>
        </ul>
     </div>
        <div v-if="error">
            {{error}}
        </div>
    </div>
</template>
<script>
    import {
        articlesService
    } from "../../services/article.service.js"

    export default {
        data() {
            return {
                articles: [],
                error: "",
                loading: true
            }
        },
        mounted() {
            articlesService.getAll()
                .then(articles => {
                    this.articles = articles
                    this.loading = false
                })
                .catch(error => this.error = error);
        }
    }
</script>

<style scoped>
    h1 {
        font-family: var(--bs-font-century);
        color: black;
        text-align: center;
    }
    
    body {
        /*background: linear-gradient(to top, rgba(0, 1%, 52%, 0.5)50%, hsla(0, 1%, 52%, 0.5)50%), url(blog.jpg) !important;
        background-image:linear-gradient(to top, rgb(201, 107, 30) 0%, rgb(241, 149, 43) 100%);
        */
        background-image: url(Home.jpg);
        background-size: 100%;
        font-family: 'Lato', sans-serif !important;
    }
    
    .title {
        --bs-title-font-family: var(--bs-font-century);
        --bs-title-color: grey;
    }
    
    li {
        color: black;
    }
</style>