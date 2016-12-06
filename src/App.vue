<template>
  <div id="app">
    <section class="hero is-primary is-medium">
      <!-- Hero header: will stick at the top -->
      <div class="hero-head">
        <header class="nav">
          <div class="container">
            <div class="nav-left">
              <a class="nav-item">
                <!--<img src="images/bulma-type-white.png" alt="Logo">-->
                <router-link to="/" class="nav-item">SCB Payme</router-link>
              </a>
            </div>
        <span class="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </span>
            <div class="nav-right nav-menu">
              <!--<router-link to="/" class="nav-item">Dashboard</router-link>-->
              <router-link to="/account" class="nav-item">Accounts</router-link>
              <router-link to="/position" class="nav-item">Positions</router-link>
            </div>
          </div>
        </header>
      </div>
    </section>
    <div class="content padding-around-24">
      <router-view :Position ="Position"></router-view>
    </div>

  </div>
</template>

<script>
import Hello from './components/Hello'
import Dashboard from './components/Dashboard';

export default {
  name: 'app',
  components: {
    Dashboard
  },
  data(){
    return{
      Position: []
    }
  },
  methods: {
    getPosition: function () {
      let api = `http://scbpayme.navigothailand.com/api/ATM/GetATMLocation?api_key=14048241`;
      this.$http.get(api).then((response) => {
        // success callback
      this.Position = response.body.Data;
      },(response) => {
        // error callback
      });

    }
  },
  created(){
    this.getPosition();
  }
}
</script>

<style>
  .hero.is-primary{
    background: #4F2A81;
  }

  .button.is-primary.is-inverted {
    color: #4F2A81;
  }

  .padding-around-24{
    padding: 24px;
  }
</style>
