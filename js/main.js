var app = new Vue({
  el: '#app',
  data: {
    films: [],
    query: " Inserisci titolo",
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
     // faccio una funzione per arrotondare un numero
     // nell'html richiamo questa funzione sulla media e facciamo tante stelline piene quanto è il risultato di questa fuinzione
     // v-for in html per il numero delle stelle colorate e sottraggo al numero delle stelle vuote
  }
});
