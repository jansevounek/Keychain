<template>
    <div class="box-fluid">
        <div class="wave4">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                preserveAspectRatio="none">
                <path
                    d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                    opacity=".25" class="shape-fill"></path>
                <path
                    d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                    opacity=".5" class="shape-fill"></path>
                <path
                    d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                    class="shape-fill"></path>
            </svg>
        </div>
        <div class="login-container">
            <div class="title-container-signup">
                <p class="title-text-signup">Log into an account.</p>
            </div>
            <form class="login-form" action=".">
                <div class="field">
                    <label for="email">Email</label>
                    <input type="email" name="email" class="input" v-model="email" placeholder="" />
                </div>

                <div class="field">
                    <label for="pass">Password</label>
                    <input type="password" name="pass" class="input" v-model="password" placeholder="" />
                </div>
                <br />
                <button type="submit" class="create" @click="register">Log in</button>
            </form>
            <button class="log-in-google" @click="signInWithG">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
                    alt="google logo" height="50" width="50" />
                Log in with google
            </button>
        </div>
        <div class="wave5">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                preserveAspectRatio="none">
                <path
                    d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                    opacity=".25" class="shape-fill"></path>
                <path
                    d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                    opacity=".5" class="shape-fill"></path>
                <path
                    d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                    class="shape-fill"></path>
            </svg>
        </div>
    </div>
</template>

<script>
import {
    getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup
} from "firebase/auth";
import { useRouter } from "vue-router";

export default {
    data() {
        return {
            router: useRouter(),
            password: '',
            email: '',
        }
    },
    methods: {
        signInWithG() {
            const provider = new GoogleAuthProvider();
            signInWithPopup(getAuth(), provider)
                .then((result) => {
                    this.router.push("/home");
                })
                .catch((error) => {
                    console.log(error.message);
                });
        },
        login() {
            signInWithEmailAndPassword(getAuth(), this.email, this.password)
                .then((data) => {
                    console.log("great success")
                    this.router.push("/")
                })
        },
    }
}
</script>

<style>
form {
    --text-color: white;
    max-width: 500px;
}

.login-form {
    color: var(--text-color);
    font-size: 1.2rem;
}

.field {
    width: 100%;
    position: relative;
    border-bottom: 2px dashed var(--text-color);
    margin: 4rem auto 1rem;
}

.field::after {
    content: "";
    position: relative;
    display: block;
    height: 4px;
    width: 100%;
    background: white;
    transform: scaleX(0);
    transform-origin: 0%;
    transition: transform 500ms ease;
    top: 2px;
}

.field:focus-within {
    border-color: transparent;
}

.field:focus-within::after {
    transform: scaleX(1);
}

.input {
    outline: none;
    border: none;
    overflow: hidden;
    margin: 0;
    width: 100%;
    padding: 0.25rem 0;
    background: none;
    color: white;
    font-size: 1.2rem;
    font-weight: bold;
}

.input:valid {
    color: white;
}

.input:invalid {
    color: red;
}

.box-fluid {
    width: 100%;
}

.strenght {
    display: flex;
    height: 20px;
    width: 100%;
}

.bar {
    margin-right: 5px;
    height: 100%;
    width: 25%;
    transition: box-shadow 500ms;
    box-shadow: inset 0px 20px white;
}

.bar-show {
    box-shadow: none;
}

.bar-1 {
    background: linear-gradient(to right, red, orangered);
}

.bar-2 {
    background: linear-gradient(to right, orangered, yellow);
}

.bar-3 {
    background: linear-gradient(to right, yellow, yellowgreen);
}

.bar-4 {
    background: linear-gradient(to right, yellowgreen, green);
}

body {
    background-color: #47e5bc;
}

.login-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 50%;
}

.login-title {
    text-align: center;
    color: white;
}

.wave4 {
    z-index: -5;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.wave4 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 207px;
    transform: rotateY(180deg);
}

.wave4 .shape-fill {
    fill: #81e4da;
}

.wave5 {
    z-index: -5;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
}

.wave5 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 207px;
}

.wave5 .shape-fill {
    fill: #81e4da;
}

.title-container-signup {
    display: inline-block;
}

.title-text-signup {
    font-size: 5em;
    color: white;
    letter-spacing: 10px;
    font-family: monospace;
    border-right: 5px solid;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    animation: typing 2s steps(20), cursor 0.4s step-end infinite alternate;
}

@keyframes cursor {
    50% {
        border-color: transparent;
    }
}

@keyframes typing {
    from {
        width: 0;
    }
}

.create {
    background: white;
    color: black;
    border-color: white;
    border-radius: 9px;
    box-shadow: none;
    border: none;
    padding: 10px;
    min-height: 60px;
    min-width: 120px;
    font-size: 20px;
    transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease,
        box-shadow 0.3s ease;
}

.create:hover {
    background-color: #2bcaba;
    color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
}

.log-in {
    background: black;
    color: white;
    border-color: black;
    border-radius: 9px;
    box-shadow: none;
    border: none;
    margin-left: 10%;
    padding: 10px;
    min-height: 55px;
    min-width: 90px;
    font-size: 15px;
    transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease,
        box-shadow 0.3s ease;
}

.log-in:hover {
    background-color: white;
    color: black;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
}

.log-in-google {
    margin-top: 20px;
    background: white;
    color: black;
    border-color: white;
    border-radius: 9px;
    box-shadow: none;
    border: none;
    padding: 10px;
    min-height: 60px;
    min-width: 120px;
    font-size: 20px;
    transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease,
        box-shadow 0.3s ease;
}

.log-in-google:hover {
    background-color: #3ac8a9;
    color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
}
</style>