<template>
    <div>
        <h2 class="title">{{title}}</h2>
        <span>Update Date: {{date}}</span>
        <br/>
        <br/>
        <div class="columns">
            <div class="column" v-for="item in Accounts">
                <div class="card is-fullwidth">
                    <header class="card-header">
                        <p class="card-header-title">
                            {{item.AccountName}}
                        </p>
                    </header>
                    <div class="card-content">
                        <div class="content">
                            <small>Balance</small>
                            <br>
                            THB {{item.Balance}}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>

<script>
    const moment = require('moment');
    export default {
        name: 'account',
        data(){
            let count = 0;
            return{
                title: 'Account',
                Accounts: [],
                count: count,
                date: ''
            }
        },
        methods: {
            init: function (){
                this.count++;
                console.log(this.count);

            },
            getAccount: function(){
                const accounts = [14048241, 14048242];

                this.Accounts = [];
                for(let value of accounts){
                    let api = `http://scbpayme.navigothailand.com/api/PayMe/GetAccountInfo?api_key=${value}`;
                    this.$http.get(api).then((response) => {
                        // success callback
                    this.Accounts.push(response.body.Data);
                    },(response) => {
                        // error callback
                    });
                };
            },
            getDate: function(){
//                this.date = new Date();
                this.date = moment(new Date()).format('MMMM Do YYYY, h:mm:ss a');
            }
        },
        created(){
            this.getAccount();
            this.getDate();
//            setInterval(this.init, 5000);
            setInterval(this.getAccount, 5000);
            setInterval(this.getDate, 5000);
        },
    }
</script>