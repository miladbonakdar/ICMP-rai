<template>
  <div>
    <b-navbar toggleable="md" type="dark" class="header">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <img id="logo" v-b-tooltip.hover title="ICMP Server" src="../assets/ping-pong.svg">
      <b-navbar-brand href="#" class="text-bold">ICMP SERVER</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse" v-if="$route.name != 'login'">
        <b-navbar-nav style="margin-left: 30px">
          <b-nav-item>
            <router-link :to="{name: routesName.DASHBOARD}" active-class="active" exact>
              <a>Dashboard</a>
            </router-link>
          </b-nav-item>
          <b-nav-item v-if="access.modifyArea">
            <router-link :to="{name: routesName.AREA, params: {id: 'new'}}" active-class="active">
              <a>Area</a>
            </router-link>
          </b-nav-item>
          <b-nav-item v-if="access.modifyNode">
            <router-link
              :to="{name: routesName.NODE, params: {id: 'new'}}"
              active-class="active"
              exact
            >
              <a>Node</a>
            </router-link>
          </b-nav-item>
          <b-nav-item v-if="access.userPage">
            <router-link :to="{name: routesName.USER_LIST}" active-class="active" exact>
              <a>Users</a>
            </router-link>
          </b-nav-item>
          <b-nav-item v-if="access.logPage">
            <router-link :to="{name: routesName.LOG}" active-class="active" exact>
              <a>Log</a>
            </router-link>
          </b-nav-item>
          <b-nav-item v-if="access.settingPage">
            <router-link :to="{name: routesName.SETTING}" active-class="active" exact>
              <a>Setting</a>
            </router-link>
          </b-nav-item>
          <b-nav-item>
            <a @click="logOut" id="exit">Exit</a>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import routesName from "../routesName";
import { mapActions, mapGetters } from "vuex";
import * as types from "../store/types";
import { debug } from "util";

export default {
  name: "Header",
  created: function() {
    this.getStateUser();
  },
  data() {
    return {
      routesName
    };
  },
  computed: {
    ...mapGetters({
      access: types.ACCESS
    })
  },
  methods: {
    ...mapGetters({
      getStateUser: types.USER
    }),
    ...mapActions({
      setUser: types.SET_USER
    }),
    loadLinks() {
      this.show = window.currentRoute != "login";
    },
    logOut() {
      this.$toasted.info("Are you sure you want to exit?", {
        duration: 5000,
        action: [
          {
            text: "Cancel",
            onClick: (e, toastObject) => {
              toastObject.goAway(0);
            }
          },
          {
            text: "Yes",
            onClick: (e, toastObject) => {
              localStorage.removeItem("token");
              localStorage.removeItem("user");
              localStorage.removeItem("logedOn");
              this.$router.replace({ name: "login" });
              toastObject.goAway(0);
            }
          }
        ]
      });
    }
  }
};
</script>

<style scoped>
.router-link-exact-active {
  color: white;
  cursor: pointer;
  text-decoration: none;
}
a,
#exit {
  color: rgba(211, 211, 211, 0.61);
  text-decoration: none;
}
a:hover,
#exit:hover {
  color: white;
  text-decoration: none;
  font-weight: 600;
}
.header {
  background-color: #01a3a4;
  /*background-color: #e66767;*/
}

.text-bold {
  font-weight: 600;
}

#logo {
  height: 27px;
  margin-right: 12px;
}
</style>