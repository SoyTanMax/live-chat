<template>
    <nav class="navbar is-info" v-if="user">
        <div class="navbar-item has-text-white">
            <p class="is-size-5">Hey there {{ user.displayName }}</p>
            <p class="email is-size-7">Currently logged in as {{ user.email }}</p>
        </div>
        <div class="navbar-item">
            <button class="button is-primary" @click="handleClick">Logout</button>
        </div>
    </nav>
</template>

<script>
import useLogout from '../composables/useLogout'
import getUser from '../composables/getUser'
export default {
    setup () {
        const { logout, error } = useLogout()
        const {user} = getUser()

        const handleClick = async () => {
            await logout()
            if(!error.value){
                console.log('logged out')
            }
        }
        return { handleClick, user}
    }
}
</script>

<style scoped>
.navbar{
    display: flex;
    justify-content: space-between;
}
</style>