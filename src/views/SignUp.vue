<template>
    <div class="container" style="margin-top: 100px;">
        <div class="row justify-content-center">
            <div class="col-6" style="margin-bottom: 100px; text-align: center;">
                <h1>Create an account in keychain</h1>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-md-6 box">
                <form action="">
                    <h1>Registering</h1>
                    <br>
                    <label for="email">Your email</label>
                    <input type="text" id="email" class="form-control" placeholder="example@mail.com"
                        style="margin-bottom: 60px;" v-model="email">
                    <label for="password">Your password</label>
                    <input type="text" id="password" class="form-control" placeholder="**********" v-model="password">
                    <br>
                    <button type="button" class="btn btn-warning" @click="register">Create an account</button>
                    <br>
                    <br>
                    <button type="button" class="btn btn-warning" @click="signInWithG">Sign in with google</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { useRouter } from "vue-router"

export default {
    name: "SignUp",
    data() {
        return {
            email: '',
            password: '',
            router: useRouter()
        }
    },
    methods: {
        register() {
            createUserWithEmailAndPassword(getAuth(), this.email, this.password)
                .then((data) => {
                    console.log("great success")
                    this.router.push("/home")
                })
                .catch((error) => {
                    console.log(error)
                    alert(error.message)
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
        }
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