<template>
    <form @submit.prevent="submit" class="form">
        <p class="is-size-5 has-text-centered has-text-weight-bold">Sing Up</p>
        <div class="field">
            <label class="label">Name</label>
            <div class="control">
                <input type="text" class="input" required v-model="displayName">
            </div>
        </div>
        <div class="field">
            <label class="label">Email</label>
            <div class="control">
                <input class="input" type="email" required v-model="email">
            </div>
        </div>
        <div class="block">
            <label class="label">Password</label>
            <input type="password" class="input" required  v-model="password">
        </div>
        <p class="help is-danger block" v-if="error">{{ error }}</p>
        <button class="button is-link is-fullwidth">Sign up</button>
    </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import useSignup from '../composables/useSignup'

export default {
    setup (props, context) {

        const { error, signup} = useSignup()

        //refs
        const displayName = ref('')
        const email = ref('')
        const password = ref('')

        const submit = async () => {
            await signup(email.value, password.value, displayName.value)
            if (!error.value){
                context.emit('signup')
            }
        }

        return {displayName, email, password, submit, error}
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