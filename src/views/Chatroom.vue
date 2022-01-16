<template>
    <div class="chatroom">
        <Navbar/>
        <div class="chatbox">Chatroom</div>
    </div>

</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
    components:{
        Navbar
    },
    setup () {
        

        return {}
    }
}
</script>

<style scoped>
.chatroom{
    padding: 2.5%;
}

</style>