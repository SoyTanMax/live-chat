<template>
    <form @submit.prevent="submit" class="form">
        <p class="is-size-5 has-text-centered has-text-weight-bold">Login</p>
        <div class="field">
            <label class="label">Email</label>
            <div class="control">
                <input class="input" type="email" required v-model="email">
            </div>
        </div>
        <div class="block">
            <label class="label">Password</label>
            <input type="password" class="input" required v-model="password">
        </div>
        <p class="help is-danger block" v-if="error">{{ error }}</p>
        <button class="button is-link is-fullwidth" @click="submit">Login</button>
    </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import useLogin from '../composables/useLogin'
export default {
    setup (props, context) {

        const {error, login} = useLogin()

        //refs
        const email = ref('')
        const password = ref('')

        const submit = async () => {
            await login(email.value, password.value)
            if (!error.value){
                context.emit('login')
            }
        }

        return {email, password, submit, error}
    }
}
</script>

<style scoped>
.form{
    margin: 0 auto;
    max-width: 450px;
    padding: 24px;
    border: 1px solid #eee;
    border-radius: 12px;
    background: white;
}
</style>