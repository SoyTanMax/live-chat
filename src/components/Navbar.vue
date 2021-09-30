<template>
    <nav class="navbar is-info">
        <div class="navbar-item has-text-white">
            <p class="is-size-5">Hey there... display name here</p>
            <p class="email is-size-7">Currently logged in as... email</p>
        </div>
        <div class="navbar-item">
            <button class="button is-primary">Logout</button>
        </div>
    </nav>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style scoped>
.navbar{
    display: flex;
    justify-content: space-between;
}
</style>