<template>
    <div class="box-fluid">
        <section class="s-title green">
            <div class="wave2">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                    preserveAspectRatio="none">
                    <path d="M649.97 0L550.03 0 599.91 54.12 649.97 0z" class="shape-fill"></path>
                </svg>
            </div>
            <div class="title-container">
                <p class="title-text">Keychain</p>
            </div>
            <p class="text">
                We are a open-source company that takes care of all your personal
                login info and stores it safely
            </p>
        </section>
        <section class="s-login blue">
            <h2>Get Started</h2>
            <p>
                To get started you must first create an account or log in with an
                already existing one
            </p>

            <div class="registration-buttons">
                <button class="get-started" @click="getStarted">Get Started</button>
                <button class="log-in" @click="logIn">Log In</button>
            </div>

            <div class="wave1">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                    preserveAspectRatio="none">
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        class="shape-fill"></path>
                </svg>
            </div>
        </section>
        <section class="s-login">
            <div class="wave3">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                    preserveAspectRatio="none">
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        class="shape-fill"></path>
                </svg>
            </div>
            <div>block</div>
        </section>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router"

const router = useRouter()

const getStarted = () => {
    router.push("/signup")
}

const logIn = () => {
    router.push("/login")
}

</script>

<style>
.box-fluid {
    width: 100%;
}

body {
    margin: 0;
    font-family: "Roboto Condensed", sans-serif;
    color: white;
    background: #202731;
}

.s-title {
    position: relative;
    min-height: 600px;
    padding: 100px 20vw;
}

.s-login {
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 600px;
    padding: 100px 20vw;
}

.text {
    font-size: 20px;
    z-index: 200;
}

.green {
    background: #47e5bc;
}

.blue {
    background: #81e4da;
}

.wave1 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.wave1 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 147px;
}

.wave1 .shape-fill {
    fill: #47e5bc;
}

.wave2 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.wave2 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 147px;
}

.wave2 .shape-fill {
    fill: #202731;
}

.registration-buttons {
    margin-top: auto;
}

.log-in {
    margin-left: 20px;
}

.get-started {
    background: #47e5bc;
    color: black;
    border-color: #47e5bc;
    border-radius: 9px;
    box-shadow: none;
    border: none;
    padding: 10px;
    min-height: 60px;
    min-width: 120px;
    font-size: 20px;
    transition: background-color 0.3s ease, color 0.3s ease,
        transform 0.2s ease, box-shadow 0.3s ease;
}

.get-started:hover {
    background-color: #3ac8a9;
    color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
}

.log-in {
    background: #46d8c9;
    color: black;
    border-color: #46d8c9;
    border-radius: 9px;
    box-shadow: none;
    border: none;
    padding: 10px;
    min-height: 45px;
    min-width: 70px;
    font-size: 15px;
    transition: background-color 0.3s ease, color 0.3s ease,
        transform 0.2s ease, box-shadow 0.3s ease;
}

.log-in:hover {
    background-color: #2bcaba;
    color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
}

.wave3 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.wave3 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 207px;
    transform: rotateY(180deg);
}

.wave3 .shape-fill {
    fill: #81e4da;
}

.title-container {
    display: inline-block;
}

.title-text {
    font-size: 5em;
    letter-spacing: 10px;
    font-family: monospace;
    border-right: 5px solid;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    animation: typing 2s steps(8), cursor .4s step-end infinite alternate;
}

@keyframes cursor {
    50% {
        border-color: transparent
    }
}

@keyframes typing {
    from {
        width: 0
    }
}
</style>