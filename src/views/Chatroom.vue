<template>
    <div class="chatroom">
        <Navbar/>
        <div class="chatbox">Chatroom</div>
    </div>

</template>

<script>
import getUser from '@/composables/getUser'
import Navbar from '../components/Navbar.vue'
import { watch } from '@vue/runtime-core'
import { useRouter } from 'vue-router'
export default {
    components:{
        Navbar
    },
    setup () {
        const { user } = getUser()
        const router = useRouter()

        watch(user, () => {
            if(!user.value){
                router.push({ name: 'Welcome'})
            }
        })

        return { user }
    }
}
</script>

<style scoped>
.chatroom{
    padding: 2.5%;
}

</style>