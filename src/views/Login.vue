<template>
    <div class= "w-full flex items-center justify-center min-h-screen from-teal-100 via-teal-300 to-teal-500 bg-gradient-to-br">
        <div class="w-full max-w-lg px-10 py-8 mx-auto bg-white rounded-lg shadow-xl">
            <h2 class="mb-12 text-center text-5xl font-extrabold">请登录</h2>
            <form @submit.prevent>
                <div class="mb-4">
                    <label class="block mb-1" for="email">请输入用户名</label>
                    <input
                        v-model="email"
                        type="text"
                        name="email"
                        class="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" />
                </div>
                <div class="mb-4">
                    <label class="block mb-1" for="password">密码</label>
                    <input
                        v-model="password"
                        type="password"
                        name="password"
                        class="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" />
                </div>
                <div class="mt-6">
                    <button
                        @click="signInWithEmail"
                        class="w-full inline-flex items-center justify-center px-4 py-2 bg-emerald-500 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-emerald-700 active:bg-emerald-700 focus:outline-none focus:border-emerald-700 focus:ring focus:ring-emerald-200 disabled:opacity-25 transition">登录</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    import { fireSignIn } from '../firebase'
    import { useRouter } from 'vue-router'

    const email = ref('')
    const password = ref('')
    const router = useRouter()

    const signInWithEmail = () =>{
        fireSignIn(email.value, password.value)
            .then(() =>{
                router.push('/')
            })
            .catch((e) =>{
                console.log(e.code)
                alert(e.message)
            })
    }
</script>