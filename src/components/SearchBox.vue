<template>
    <div class="container has-text-centered">
            <div class="columns">
                <div class="column is-5" />
                <a @:click="changeSearchEngine('duck')">
                    <img :src="availableSettings.duck.icon" alt="DuckDuckGo Search Engine" height="42" width="42"/>
                </a>
                &emsp; &emsp;
                <a @:click="changeSearchEngine('ecosia')">
                    <img :src="availableSettings.ecosia.icon" alt="Ecosia Search Engine" height="42" width="42"/>
                &emsp; &emsp;
                </a>
                <a @:click="changeSearchEngine('google')">
                    <img :src="availableSettings.google.icon" alt="Google Search Engine" height="42" width="42"/>
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
</template>

<script>
    export default {
        name: 'SearchBox',
        data() {
            return {
                availableSettings: {
                    duck: {
                        url: 'https://duckduckgo.com/',
                        placeholder: 'Search DuckDuckGo',
                        icon: require('../assets/icons/duck.svg')
                    },
                    ecosia: {
                        url: 'https://www.ecosia.org/search',
                        placeholder: 'Search Ecosia',
                        icon: require('../assets/icons/ecosia.svg')
                    },
                    google: {
                        url: 'https://www.google.com/search',
                        placeholder: 'Search Google',
                        icon: require('../assets/icons/google.svg')
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
</script>