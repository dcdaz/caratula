<template>
    <div class="container has-text-centered">
            <div class="tile is-ancestor">
                <div class="tile is-parent is-2" />
                <div class="tile is-parent">
                    <article class="tile is-child box">
                        <div class="content">
                            <p class="title" v-if="currentTime != null">{{ currentTime }}</p>
                            <p class="subtitle">{{ getDate() }}</p>
                        </div>
                    </article>
                </div>
                <div class="tile is-parent is-2" />
            </div>
        </div>
</template>

<script>
    export default {
        name: 'Tiles',
        data() {
            return {
                currentTime: null,
            }
        },
        methods: {
            getDate() {
                const newDate = new Date();
                return newDate.toLocaleDateString(
                    'en-US',
                    {
                        year:"numeric",
                        month:"2-digit",
                        day:"2-digit",
                    }
                );
            },
            getTime() {
                const newDate = new Date();
                this.currentTime = newDate.toLocaleTimeString(
                    'en-US',
                    {
                        hour12:false,
                        hour:'2-digit',
                        minute:'2-digit', 
                        timeZoneName:'short'
                    }
                );
            },
        },
        beforeMount() {
            setInterval(this.getTime, 1000);
        },
    }
</script>