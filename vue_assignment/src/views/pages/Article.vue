<template>
    <div>
        
        <form articles :key="articles.article_id">
           
              <h1>  {{ articles.title + ' by ' + articles.author }}</h1>
              <h2>  {{ "Published:" + articles.date_published }}</h2>
              <h3>  {{ "Edited text:" + articles.date_edited }}</h3>
              <p>{{ articles.article_text }}</p>
           
        </form>
        <div v-if="error">
            {{error}}
        </div><br/>
        <h2>Comments</h2>
    
        <li comments :key="comments.comment_id">
           {{ comments }}
            <h1>  {{ comments.comment_id  }}</h1>
            <h2>  {{ comments.comment_text }}</h2>
            <h3>  {{ comments.date_published }}</h3>
            {{ comments.article_id }}
            {{ comment }}
         
        </li>
        <div class="form__group">
            <label>Leave a comment</label><br/>
            <textarea v-model="NewComment.content"
              rows="10"
              required
              cols="50"
              placeholder="type in your comment"
            /><br/>
            <button @click="addComment()">Submit</button>
          </div>
        <!-- <AddComment/> -->
    </div>
</template>
<script>
// import AddComment from "./pages/AddComment.vue";
    import {
        articlesService
    } from "../../services/article.service.js"
    import {
        commentsService
    } from "../../services/comments.service.js"
    

    export default {
    data() {
        return {
            color:'red',
            NewComment:{
                
                
                    
                },
                

            articles: {},
            comments: [],
            num_comments: null,
            comment: "",
            error: "",
        };
    },
    mounted() {
        this.articles.loading = true;
        this.comments.loading = true;
        articlesService.getOne(this.$route.params.id)
            .then((articles) => {
            this.articles = articles;
            commentsService.getAll(this.$route.params.id)
                .then((comments) => {
                this.comments = comments;
                this.num_comments = comments.length;
            commentsService.createComment(this.$route.params.id)
                .then((comments) => {
                this.comments = comments;
                this.num_comments = comments.length;
            })
                .catch(error => this.error = error);
            })
                .catch(error => this.error = error);
        })
            .catch(error => this.error = error);
    },
    methods: {
            addComment(){
             
                this.comments.push({
                    comment:this.NewComment,
                    
                    
                }) 
                    this.commen = ''
                    
                    
            },
        },
}
</script>
<style scoped>
h1 {
    font-family: var(--bs-font-century);
    color: black;
    text-align: center;
}
p {
     
    margin: auto; 
    text-align: center;
    
    /* Optional Styling */
    padding: 20px;
    border-style: solid;
    border-color: #B6C7D6;
    border-radius: 20px;
    background-color: #EAF0F6;
   
  }
  button:hover {
    background: rgb(230, 201, 167);
    transition: all 0.3s ease;
    
}
</style>