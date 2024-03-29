<template>
    <div class="container" style="margin-top: 100px;">
        <div class="row justify-content-center">
            <div class="col-6" style="margin-bottom: 100px; text-align: center;">
                <h1>Welcome to keychain</h1>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-md-6 box">
                <form action="">
                    <h1>Login</h1>
                    <br>
                    <label for="email">Your email</label>
                    <input type="text" id="email" class="form-control" placeholder="example@mail.com" style="margin-bottom: 60px;" v-model="email">
                    <label for="password">Your Password</label>
                    <input type="text" id="password" class="form-control" placeholder="**********" v-model="password">
                    <br>
                    <button type="button" class="btn btn-success" @click="login">Log in</button>
                    <br>
                    <br>
                    <button type="button" class="btn btn-warning" @click="register">Register</button>
                    <br>
                    <br>
                    <button type="button" class="btn btn-warning" @click="signInWithG">Sign in with google</button>
                    <div v-if="errorMsg">
                        <p>{{ errorMsg }}</p>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { useRouter } from "vue-router"

export default {
    data() {
        return {
            router: useRouter(),
            password: '',
            email: '',
            errorMsg: ''
        }
    },
    methods: {
        register() {
            this.router.push("/signup")
        },
        login() {
            signInWithEmailAndPassword(getAuth(), this.email, this.password)
            .then((data) => {
                console.log("great success")
                this.router.push("/home")
            })
            .catch((error) => {
                console.log(error)
                switch (error.code) {
                    case "auth/invalid-email":
                        this.errorMsg = "This is not a real email"
                        break
                    case "auth/user-not-found":
                        this.errorMsg = "U sure u have acc"
                        break
                    case "auth/wrong-password":
                        this.errorMsg = "Incoroct password"
                        break
                    default:
                        this.errorMsg = "yeah something aint right"
                        break
                }
            })
        },
        signInWithG() {
            const provider = new GoogleAuthProvider()
            signInWithPopup(getAuth(), provider)
            .then((result) => {
                this.router.push("/home")
            })
            .catch((error) => {
                console.log(error.message)
            })
        },
    }
}
</script>
<style>
    .box {
        background-color: #ffffff;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        text-align: center; 
    }
</style>