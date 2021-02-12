var app = new Vue({
  el: '#app',
  data: {
    films: [],
    query: "",
    apiKey: "aca274e1075a0e9933ec2a888c6e1be0",
    lang: "it-It",
    path: "https://image.tmdb.org/t/p/w342"
  },
  // promemoria
  // origin_country: ["US"]
  // original_language: "en"
  // original_name: "Threat Matrix"
  // overview: ""
  // popularity: 3.701
  // poster_path: null
  // vote_average: 3.5
  // vote_count: 2
  methods : {
    // con parseInt arrotondo il numero e ricavo il numero di stelle che prendo con v-for da html
    // per le stelle vuote le sottraggo a 5 in modo da non averne in eccesso
    stellePiene(voto){
      return parseInt(voto/2);
    },
    stelleVuote(voto){
      return 5 - parseInt(voto/2);
    },
    search(){
      axios
        .get("https://api.themoviedb.org/3/search/movie", {
          params: {
            api_key: this.apiKey,
            query: this.query,
            language: this.lang
          }
        })
        .then((result) => {
        this.films = result.data.results;
        console.log(this.films);
        //faccio una funzione per aggiungere il cast, che avrà dei parametri
        //per ogni elemento faccio uin ciclo che mi fa una funzione per andare a richiamare il cast il genere
        })
        .catch((error) => alert("errori"));

      axios
        .get("https://api.themoviedb.org/3/search/tv", {
          params: {
            api_key: this.apiKey,
            query: this.query,
            language: this.lang
          }
        })
        .then((result) => {
        this.films = this.films.concat(result.data.results);
        console.log(this.films);
        })
        .catch((error) => alert("errori"));
     },
    }
  });
