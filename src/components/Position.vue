<template>
    <div>
        <h2>{{title}}</h2>
        <div class="columns">
            <div class="column">
                <label class="label">Lat</label>
                <p class="control">
                    <input class="input" type="text" placeholder="lat" v-model="Position.lat">
                </p>
            </div>
            <div class="column">
                <label class="label">Lng</label>
                <p class="control has-icon has-icon-right">
                    <input class="input" type="text" placeholder="lng" v-model="Position.lng">
                </p>
            </div>
        </div>
        <button @click="save()" class="button is-primary">Save</button>
    </div>
</template>

<script>
    export default {
        name: 'position',
        data() {

            return {
                title: `Position`
            }
        },
        props: ['Position'],
        methods: {
            save(){
                let api = `http://scbpayme.navigothailand.com/api/ATM/SetATMLocation?lat=${this.Position.lat}&lng=${this.Position.lng}&api_key=14048241`;
                this.$http.get(api).then((response) => {
                    // success callback
                    console.log(response.body);

                },(response) => {
                        // error callback
                    });
                }
        }
    }
</script>

<style scoped>
    .button.is-primary,
    .button.is-primary.is-active,
    .button.is-primary:focus,
    .button.is-primary:hover{
        background-color: #4F2A81;
    }
</style>