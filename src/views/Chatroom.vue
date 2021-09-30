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
.chatbox{
    margin: 180px auto;

}
</style>