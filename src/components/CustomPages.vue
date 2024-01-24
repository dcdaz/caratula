<template>
    <div class="container">
            <div class="columns">
                <div v-if="customPages.length < 5" class="column is-2" />
                <div class="tile is-ancestor">
                    <div class="tile is-parent">
                        <div v-for="customPage in customPages" :key="customPage" class="column tile">
                            <div class="tile is-child box">
                                <p class="tag is-white title is-4 has-text-centered has-text-weight-semibold is-capitalized">
                                    <svg-icon id="middle-aligment" type="mdi" :path="allIcons[customPage.icon]" />&nbsp;&nbsp;{{ customPage.name }}
                                </p>
                                <div v-for="link in customPage.links" :key="link">
                                    <svg-icon id="middle-aligment" type="mdi" :path="allIcons[link.icon]" :size="19" />
                                    <a v-if="link.name != null" class="tag is-white has-text-weight-medium is-capitalized has-text-grey-dark" :href="link.url">
                                        {{ link.name }}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="customPages.length < 5" class="column is-2" />
            </div>
        </div>
</template>

<script>
    import customPagesData from '../custom_pages.json';
    import SvgIcon from '@jamescoyle/vue-icon';

    export default {
        name: 'CustomPages',
        components: {
            SvgIcon
        },
        data() {
            return {
                customPages: customPagesData,
                allIcons: {},
            }
        },
        methods: {
            async getIcon(iconName) {
                const iconImported = { [iconName]: this.icon } = await import('@mdi/js')
                this.allIcons[iconName] = this.icon;
                this.icon = null
                return iconImported;
            }
        },
        async created() {
            this.customPages.forEach(category => {
                this.getIcon(category.icon);
                category.links.forEach(link =>{
                    this.getIcon(link.icon);
                });
            });
        },
    }
</script>

<style scoped>
    #middle-aligment {
        vertical-align: middle;
    }
</style>