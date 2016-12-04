<template>
    <div>
        <h2 class="title">{{title}}</h2>
        {{count}}
        <div class="columns">
            <div class="column" v-for="item in Accounts">
                <div class="card is-fullwidth">
                    <header class="card-header">
                        <p class="card-header-title">
                            {{item.name}}
                        </p>
                    </header>
                    <div class="card-content">
                        <div class="content">
                            <small>Balance</small>
                            <br>
                            THB {{item.balance}}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>

<script>
    export default {
        name: 'account',
        data(){
            let count = 0;
            return{
                title: 'Account',
                Accounts: [],
                count: count
            }
        },
        methods: {
            init: function (){
                this.count++;
                console.log(this.count);

            },
            getAccount: function(){
                const accounts = [
                    {
                        name: 'SCB 1',
                        api_key: 14048241
                    },
                    {
                        name: 'SCB 2',
                        api_key: 14048242
                    }
                ];

                this.Accounts = [];
                for(let value of accounts){
                    let api = `http://scbpayme.navigothailand.com/api/PayMe/GetBalance?api_key=${value.api_key}`;
                    this.$http.get(api).then((response) => {
                        // success callback
                        value.balance = response.body.DataString;
                    this.Accounts.push(value);

                    },(response) => {
                        // error callback
                    });
                };
            }
        },
        created(){
            this.getAccount();
//            setInterval(this.init, 5000);
            setInterval(this.getAccount, 5000);
        },
        updated() {
//            setInterval(this.init, 5000);
        }
    }
</script>