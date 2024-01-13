export default {
    name: 'CustomPages',
    template: `
        <div class="container">
            <div class="columns">
                <div class="column is-2" />
                <div class="tile is-ancestor">
                    <div class="tile is-parent">
                        <div v-for="customPage in customPages" class="column tile">
                            <div class="tile is-child box">
                                <p class="title is-4 has-text-centered has-text-weight-semibold is-capitalized">
                                    <i :class="customPage.icon" />&nbsp;&nbsp;{{ customPage.category }}
                                </p>
                                <p v-for="link in customPage.links" class="column">
                                    <a v-if="link.name != null" class="has-text-weight-medium is-capitalized has-text-grey-dark" :href="link.url">
                                        <i :class="link.icon" />&nbsp;&nbsp;{{ link.name }}
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column is-2" />
            </div>
        </div>
    `,
    data() {
        return {
            customPages: null
        }
    },
    async created() {
        this.customPages = await fetch("custom_pages.json").then(res => res.json())
    },
}
