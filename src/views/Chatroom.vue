<template>
    <div class="chatroom">
        <Navbar/>
        <ChatWindow />
        <NewChatForm />
    </div>

</template>

<script>
import getUser from '@/composables/getUser'
import Navbar from '../components/Navbar.vue'
import ChatWindow from '@/components/ChatWindow.vue'
import NewChatForm from '@/components/NewChatForm.vue'
import { watch } from '@vue/runtime-core'
import { useRouter } from 'vue-router'
export default {
    components:{
        Navbar,
        NewChatForm,
        ChatWindow
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