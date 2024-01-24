<template>
    <div class="container">
            <div class="columns">
                <div class="column is-2" />
                <div class="tile is-ancestor">
                    <div class="tile is-parent">
                        <div v-for="customPage in customPages" :key="customPage" class="column tile">
                            <div class="tile is-child box">
                                <p class="title is-4 has-text-centered has-text-weight-semibold is-capitalized">
                                    <svg-icon id="middle-aligment" type="mdi" :path="allIcons[customPage.name]" />&nbsp;&nbsp;{{ customPage.name }}
                                </p>
                                <p v-for="link in customPage.links" :key="link" :class="column">
                                    <a v-if="link.name != null" class="has-text-weight-medium is-capitalized has-text-grey-dark" :href="link.url">
                                        <svg-icon id="middle-aligment" type="mdi" :path="allIcons[link.name]" :size="19" />&nbsp;&nbsp;{{ link.name }}
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column is-2" />
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
            async getIcon(name, iconName) {
                const iconImported = { [iconName]: this.icon } = await import('@mdi/js')
                this.allIcons[name] = this.icon;
                this.icon = null
                return iconImported;
            }
        },
        async created() {
            this.customPages.forEach(category => {
                this.getIcon(category.name, category.icon);
                category.links.forEach(link =>{
                    this.getIcon(link.name, link.icon);
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