export default {
    name: 'SearchBox',
    template: `
        <div class="container has-text-centered">
            <div class="columns">
                <div class="column is-5" />
                <a @:click="changeSearchEngine('duck')">
                    <img src="./assets/icons/duck.svg" alt="DuckDuckGo Search Engine" height="42" width="42"/>
                </a>
                &emsp; &emsp;
                <a @:click="changeSearchEngine('ecosia')">
                    <img src="./assets/icons/ecosia.svg" alt="Ecosia Search Engine" height="42" width="42"/>
                &emsp; &emsp;
                </a>
                <a @:click="changeSearchEngine('google')">
                    <img src="./assets/icons/google.svg" alt="Google Search Engine" height="42" width="42"/>
                </a>
                <div class="column is-5" />
            </div>
            <div class="columns">
                <div class="column is-3" />
                <form class="column" method="get" :action="searchBoxSettings.url">
                    <input class="input is-dark" ref="searchBoxInput" type="text" name="q" :placeholder="searchBoxSettings.placeholder">
                </form>
                <div class="column is-3" />
            </div>
        </div>
    `,
    data() {
        return {
            availableSettings: {
                duck: {
                    url: 'https://duckduckgo.com/',
                    placeholder: 'Search DuckDuckGo'
                },
                ecosia: {
                    url: 'https://www.ecosia.org/search',
                    placeholder: 'Search Ecosia'
                },
                google: {
                    url: 'https://www.google.com/search',
                    placeholder: 'Search Google'
                }
            },
            searchBoxSettings: null
        }
    },
    methods: {
        changeSearchEngine(name) {
            if (this.searchBoxSettings == null || name == null) {
                this.searchBoxSettings = this.availableSettings.duck
            }
            this.searchBoxSettings = this.availableSettings[name]
            this.$refs.searchBoxInput.focus()
        },
    },
    created() {
        // DuckDuckGo by default because I like it
        this.searchBoxSettings = this.availableSettings.duck
    },
}