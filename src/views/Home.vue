<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Sign Up</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="logOut" v-if="isLoggedIn" href="#">Log Out</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container">
    <button class="btn btn-dark" @click="addCredentials">Add credentials</button>
    <div>
      <table class="table table-dark table-borderless">
        <thead>
          <tr>
            <th scope="col">Site Name</th>
            <th scope="col">Username</th>
            <th scope="col">Password</th>
          </tr>
        </thead>
        <tbody v-if="passwords">
          <tr v-for="passwd in passwords">
            <th scope="row">{{ passwd.site }}</th>
            <td>{{ passwd.username }}</td>
            <td>{{ passwd.password }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <addCredentials />
</template>

<script setup>
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth"
import { onMounted, ref } from "vue"
import { useRouter } from "vue-router"
import { db } from '@/firebase';
import {
  collection, onSnapshot,
  addDoc, deleteDoc, doc,
  updateDoc, query, orderBy,
} from 'firebase/firestore';

const router = useRouter()
const isLoggedIn = ref(false)
const passwordsCollectionRef = collection(db, 'passwords');
const passwordsCollectionQuery = query(passwordsCollectionRef);

const passwords = ref([])

let auth
onMounted(() => {
  auth = getAuth()
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  })
  onSnapshot(passwordsCollectionQuery, (querySnapshot) => {
  const fbpasswords = [];
    querySnapshot.forEach((doc) => {
      const password = {
        id: doc.id,
        password: doc.data().password,
        site: doc.data().site,
        username: doc.data().username,
      }
      fbpasswords.push(password);
    });
    passwords.value = fbpasswords;
  })
  console.log(passwords)
})
const logOut = () => {
    signOut(auth).then(() => {
      router.push("/")
    })
}
const addCredentials = () => {

}
</script>


<style>
@import '~bootstrap';
</style>