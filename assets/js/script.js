// Initializing a Vue app
var app = new Vue({
    el: '#app',
    // Initializing the data property to a Plain Old JavaScript Object (POJO)
    data () {
        return {
          news: null
        }
    },
    mounted () {
        axios
          .get(_spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('NewsAndUpdates')/items?$Select=Title,Author/Title,EncodedAbsUrl,Description,ID,Created,Category&$expand=Author/Title&$top=10&$orderby=ID%20desc",{
            headers: {
                "Accept": "application/json;odata=verbose"
            }      
          })
          .then(response => (this.news = response.data.d.results))
    }    
});