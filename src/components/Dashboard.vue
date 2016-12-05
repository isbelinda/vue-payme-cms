<template>
    <section class="hero is-primary is-fullheight">
        <div class="hero-body">
            <div class="container">
                <h1 class="title">
                    {{msg}}
                </h1>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'dashboard',
        data(){
            return{
                msg: `Welcome to SCB Payme`
            }
        }
    }
</script>

<style scoped>
    .hero.is-fullheight{
        margin: -24px;
        min-height: calc(100vh - 50px);
    }
</style>