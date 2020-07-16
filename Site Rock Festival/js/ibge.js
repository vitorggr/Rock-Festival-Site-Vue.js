var vm = new Vue({
    el:'#vm',
    data: {
    pessoasVm: pessoas,
    mensagensVm: mensagens,
    mensagensFiltradas: [],
    estados: [],
    municipios: []
    },
    methods:{
    filtrar: function(idPessoa){
    this.mensagensFiltradas =
   this.mensagensVm.filter((mensagem => {
    return mensagem.idPessoa === idPessoa;
    }))
    },
    cidades: function(uf){
   
   fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados/'+uf+'/municipios')
    .then(response => response.json())
    .then(json => {
    this.municipios = json
    })
    }
    },
    
    created(){
   
   fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    .then(response => response.json())
    .then(json => {
    this.estados = json
    })
    }
    });