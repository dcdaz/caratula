import CustomPages from './custom-pages.js'
import SearchBox from './search-box.js'
import Tiles from './tiles.js'

export default {
    name: 'App',
    template: `
        <section class="section" />
        <section class="section" />
        <section class="section">
            <search-box ref="searchBoxComponent" />
        </section>
        <section class="section">
            <tiles />
            <custom-pages />
        </section>
    `,
    components : {
        SearchBox,
        CustomPages,
        Tiles,
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
        },
    },
    created() {
        document.getElementsByTagName('body')[0].style.backgroundColor = '#F5F6F7'
        window.addEventListener('keypress', this.onKeyPress);
    },
    
 }