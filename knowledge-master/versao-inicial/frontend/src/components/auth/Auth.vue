<template>
    <div class="auth-content">
        <div class="auth-modal">
            <img src="../../assets/logo.png" width="200" alt="Logo" />
            <hr>
            <div class="auth-title">
                {{ showSignup ? 'Cadastro' : 'Login' }}
            </div>
            <input v-if="showSignup" v-model="user.name" placeholder="Nome">
            <input v-model="user.email" type="text" placeholder="E-Mail:">
            <input v-model="user.password" type="password" placeholder="Senha">
            <input v-if="showSignup" v-model="user.confirmPassword" type="password" placeholder="Confirme a Senha">
        </div>
    </div>
</template>

<script>
import { baseApiUrl, showError, userKey } from "../../global";
import axios from 'axios'

export default {
    name: 'Auth',
    data: function() { 
        return {
            showSignup: true,
            user: {}
        }
    },
    methods: {
        signin() {
            axios.post(`${baseApiUrl}/signin`, this.user)
                .then(res => {
                    this.$store.commit('setUser', res.data)
                    localStorage.setItem(userKey, JSON.stringify(res.data))
                    this.$router.push({ path: '/' })
                })
        },
        signup() {
            axios.post(`${baseApiUrl}/signup`, this.user)
                .then(() => {
                    this.$toated.global.defaultSuccess()
                    this.user = {}
                    this.showSignup = false
                })
                .catch(showError)
        }
    }
}
</script>

<style>
    .auth-content {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .auth-modal {
        background-color: #fff;
        width: 350px;
        padding: 35px;
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);

        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>