<template>
    <form>
        <input
            placeholder="Type a message here"
            v-model="message"
            @keypress.prevent.enter="handleSubmit"
            class="is-rounded input"
        />
        <svg 
            @click="handleSubmit"
            xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
    </form>

</template>

<script>
import { ref } from '@vue/reactivity'
import getUser from '../composables/getUser'
import { Timestamp } from '@firebase/firestore'
import useCollection from '@/composables/useCollection'
    export default {
        setup(){
            const {user} = getUser()
            const message = ref('')
            const { newDoc, error } = useCollection('messages')

            const handleSubmit = async () => {

                if(message.value !== ''){
                    const chat = {
                        message: message.value,
                        name: user.value.displayName,
                        user_id: user.value.uid,
                        createdAt: Timestamp.now()
                    }
                    message.value = ''
                    
                    await newDoc(chat)
                    
                    if(!error){
                        message.value = ''
                    }
                }



            }
            return { message, handleSubmit, error}
        }
    }
</script>

<style scoped>
    form{
        background: rgb(247, 247, 247);
        width: 100%;
        padding: 2%;
        min-height: 48px;
        border-radius: 0 0 12px 12px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    input{
        width: 90%;
        padding: 2%;
        border: 1px solid rgb(219, 219, 219);
        font-family: 'Raleway', sans-serif;
        background: white;
        margin-right: 24px;
    }
    input:focus{
        box-shadow: none;
        border: 1px solid rgb(201, 201, 201);
    }
    svg{
        max-width: 24px;
    }
</style>