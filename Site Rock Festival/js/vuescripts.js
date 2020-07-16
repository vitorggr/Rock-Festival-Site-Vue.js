

 /*  var navbar = new Vue({
  el:'#navbar',
  data: { 
  links: linksNavbar,
  },
  methods:{
  }}); */

  var content = new Vue({
  el:'#content',
  data: {
  write : writings,
  }});

  
  var section = new Vue({
  el:'#section',
  data: {
  write : writings,
  bands : cards
  }});

  


 
  var navbar = new Vue('navlink',{
    el:'#app',
    data: {
    template: '<li class="active" v-for="link in links" ><a v-bind:href="link.url">{{link.nome}}</a></li>',
    links: linksNavbar,
    }});

    Vue.component("navlink",{
      template: '<li class="active" v-for="link in links" ><a v-bind:href="link.url">{{link.nome}}</a></li>',
    })
    
  
