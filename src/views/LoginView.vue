<template>
    <div class="login-content">
        <form class="login-form">
            <select class='custom-select' name="username" id="username">
                <option disabled selected hidden>Ընտրիր քեզ</option>
                <!-- <option v-for="user in allUsers" :value="user.username">{{ user.name_tr }}</option> -->
            </select>
            <div class="pin">
                <input class="pin-input" type="number" name="pinCode" min="0" max="9999">
            </div>
            <p class="message-box" id="loginMsg"></p>
        </form>
    </div>
</template>

<script>
export default {
    // methods: {
    //     async getAllUsers() {
    //         // Must be: /.netlify/functions/api
    //         const result = await ().json();
    //         return result;
    //     }
    // },
    // async mounted() {
    //     this.allUsers = this.getAllUsers();
    // }
}
</script>

<style scopet>
.user-select {
    padding: 10px;
    font-size: 1.4em;
    width: 100%;
}

.login-content {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
}

.login-content.hidden {
    display: none;
}

.user-img-container {
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
}

.user-img {
    height: 170px;
    width: 170px;
}

.user-img img {
    display: block;
    height: 100%;
    width: 100%;
    filter: invert(0.9);
}

.main {
    width: 350px;
    height: 540px;
    overflow: hidden;
    border-radius: 10px;
}

.label {
    color: #fff;
    font-size: 2.3em;
    justify-content: center;
    display: flex;
    margin: 60px;
    font-weight: bold;
    cursor: pointer;
    transition: .5s ease-in-out;
}

.custom-select {
    font-weight: 700;
    font-family: 'Noto Sans Armenian', sans-serif;
    font-size: 20px;
    width: 250px;
    background: #e5e5e5;
    justify-content: center;
    display: flex;
    margin: 30px auto;
    padding: 10px;
    border: none;
    outline: none;
    border-radius: 5px;
}

.pin input {
    font-weight: 800;
    font-size: 20px;
    width: 250px;
    background: #e5e5e5;
    display: flex;
    justify-content: center;
    margin: 20px auto;
    padding: 10px;
    border: none;
    outline: none;
    border-radius: 5px;
    letter-spacing: 32px;
}

.pin input::-webkit-inner-spin-button {
    display: inline-block;
    cursor: default;
    flex: 0 0 auto;
    align-self: stretch;
    opacity: 0;
    pointer-events: none;
    -webkit-user-modify: read-only;
}

.message-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    font-size: 15px;
    text-align: center;
    color: #a31b46;
}
</style>