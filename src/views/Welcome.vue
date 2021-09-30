<template>
    <div class="welcome container">
        <div v-if="showLogin">
            <Login @login="enterChat"/>
            <p class="signup">No account yet? <span @click="showLogin = false">Signup</span> instead</p>
        </div>
        <div v-else>
            <Signup @signup="enterChat"/>
            <p class="signup">Already have an account? <span @click="showLogin = true">Login</span></p>
        </div>
    </div>
</template>

<script>
import Signup from '../components/SignUp.vue'
import Login from '../components/Login.vue'
import { ref } from '@vue/reactivity'
import {useRouter} from "vue-router"
export default {
    components: {
        Signup,
        Login
    },
    setup(){

        const showLogin = ref(true)
        const router = useRouter()

        const enterChat = () => {
            router.push({name: 'Chatroom'})
        }

        return {showLogin, enterChat}
    }
}
</script>

<style scoped>
.welcome{
    padding-top: 180px;
}
.signup{
    margin: 20px auto;
    max-width: 450px;
    color: white;
}
span{
    text-decoration: underline;
    font-weight: bold;
}
</style>