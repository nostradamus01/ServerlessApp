<template>
    <div class="main-content">
        <div class="login-form">
            <select class='user-select' name="username" id="username">
                <option disabled selected hidden>Ընտրիր քեզ</option>
                <option v-for="user in allUsers" :value="user.username">{{ user.name_tr }}</option>
            </select>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        async allUsers() {
            const result = await fetch('/.netlify/functions/api', {
                method: 'POST',
                body: JSON.stringify({
                    action: 'getAllUsers'
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return await result.json().allUsers;
        }
    }
}
</script>

<style scopet>
.user-select {
    padding: 10px;
    font-size: 1.4em;
    width: 100%;
}
</style>