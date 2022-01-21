<template>
    <div class="chatwindow level is-marginless" >
        <div v-if="error" class="help is-danger">{{ error }}</div>
        <div class="messages" v-if="formattedDocs" ref="messages">
            <div v-for="doc in formattedDocs" :key="doc.id" class="block level-left" :class="{'level-right': doc.user_id == user.uid }">
                <div class="is-size-7 has-text-grey-light" v-if="doc.user_id !== user.uid">{{ doc.createdAt }} ago</div>
                <div class="message-box has-text-white">
                    <span v-if="doc.user_id !== user.uid" class="name has-text-weight-bold">{{ doc.name }}</span>
                    <span class="msg">{{ doc.message }}</span>
                </div>
                <div class="is-size-7 has-text-grey-light" v-if="doc.user_id == user.uid">{{ doc.createdAt }} ago</div>
            </div>
        </div>
    </div>
</template>

<script>
import getUser from '@/composables/getUser'
import getCollection from "@/composables/getCollection"
import { formatDistanceToNow } from 'date-fns'
import { computed, ref } from '@vue/reactivity'
import { onUpdated } from '@vue/runtime-core'

    export default {
        setup(){
            const { documents, error } = getCollection('messages')

            const { user } = getUser()

            const formattedDocs = computed(() => {
                if(documents.value){
                    return documents.value.map( doc => {
                        let time = formatDistanceToNow(doc.createdAt.toDate())

                        return { ...doc, createdAt: time }
                    })
                }
            })

            //auto-scroll to bottom messages

            const messages = ref(null)

            onUpdated(() => {
                messages.value.scrollTop = messages.value.scrollHeight
            })
            
            return { error, documents, user, formattedDocs,  messages}
        }
    }
</script>

<style scoped>
.chatwindow{
    background: white;
    padding: 5%;
}
.messages{
    max-height: 400px;
    overflow: auto;
    width: 100%;
}
.message-box{
    display: flex;
    flex-direction: column;
    padding: 12px;
    margin: 0 12px;
    background: rgb(81, 161, 214);
    border-radius: 8px;
    max-width: 300px;
}
.level-left{
    align-items: flex-end;
}
</style>