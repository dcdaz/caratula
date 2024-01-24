<template>
    <section class="section" />
    <section class="section" />
    <section class="section">
        <SearchBox ref="searchBoxComponent" />
    </section>
    <section class="section">
        <Tiles />
        <CustomPages />
    </section>
</template>

<script>
    import SearchBox from './components/SearchBox.vue'
    import Tiles from './components/Tiles.vue'
    import CustomPages from './components/CustomPages.vue'

    export default {
        name: 'App',
        components: {
        SearchBox,
        CustomPages,
        Tiles
        },
        methods: {
        onKeyPress(event) {
            if (event.key != '/') {
                return;
            }

            if (document.activeElement === this.$refs.searchBoxComponent.$refs.searchBoxInput) {
            return;
            }
            event.preventDefault();
            this.$refs.searchBoxComponent.$refs.searchBoxInput.focus();
        }
        },
        created() {
            window.addEventListener('keypress', this.onKeyPress);
        },
    }
</script>

<style>
    @import './css/bulma.css';

    html, body {
        background-color: #F5F6F7;
        height: 100%;
    }
</style>