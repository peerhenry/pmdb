import Vue from 'vue'
import Vuex from 'vuex'
import { AmplifyEventBus } from 'aws-amplify-vue'
import { Auth } from 'aws-amplify'

Vue.use(Vuex)

export const mutation = Object.freeze({
  SIGN_IN: 'SIGN_IN',
  SIGN_OUT: 'SIGN_OUT',
  SET_AUTH_STATE: 'SET_AUTH_STATE',
})

const store = new Vuex.Store({
  state: {
    signedIn: false,
    authState: null,
  },
  mutations: {
    [mutation.SIGN_IN]: state => (state.signedIn = true),
    [mutation.SIGN_OUT]: state => (state.signedIn = false),
    SET_AUTH_STATE: (state, payload) => (state.authState = payload),
  },
  actions: {},
  modules: {},
})

AmplifyEventBus.$on('authState', info => {
  console.log(
    `Here is the auth event that was just emitted by an Amplify component: ${info}`
  )
  store.commit(mutation.SET_AUTH_STATE, info)
  if (info === 'signedIn') store.commit(mutation.SIGN_IN)
  else store.commit(mutation.SIGN_OUT)
})

Auth.currentAuthenticatedUser()
  .then(() => store.commit(mutation.SIGN_IN))
  .catch(() => store.commit(mutation.SIGN_OUT))

export default store
