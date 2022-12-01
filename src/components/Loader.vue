<template>
    <div class="loader">
        <div class="loader-cmp">
            <div class="circle cyan"></div>
            <div class="circle magenta"></div>
            <div class="circle yellow"></div>
        </div>
    </div>
</template>

<style scope>
.loader {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10;
    background: var(--main-bg);
    display: flex;
    align-items: center;
    justify-content: center;
}

.loader-cmp {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 200px;
    width: 200px;
    overflow: hidden;
}

.circle {
    border: 5px transparent solid;
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 69%;
}

.cyan {
    bottom: 0;
    border-top: 5px cyan double;
    animation-delay: 4s;
    animation: cyan 1.5s infinite;
}

.cyan:after {
    position: absolute;
    content: "";
    width: 10px;
    height: 10px;
    background: cyan;
    border-radius: 69%;
    right: 5px;
    top: 10px;
    box-shadow: 0px 0px 20px cyan;
}

.magenta {
    left: 100px;
    bottom: 87px;
    border-top: 5px magenta double;
    animation: magenta 1.5s infinite;
}

.magenta:after {
    position: absolute;
    content: "";
    width: 10px;
    height: 10px;
    background: magenta;
    border-radius: 69%;
    right: 5px;
    top: 10px;
    box-shadow: 0px 0px 20px magenta;
}

.yellow {
    right: 100px;
    bottom: 87px;
    border-top: 5px yellow double;
    animation: yellow 1.5s infinite;
}

.yellow:after {
    position: absolute;
    content: "";
    width: 10px;
    height: 10px;
    background: yellow;
    border-radius: 69%;
    right: 5px;
    top: 10px;
    box-shadow: 0px 0px 20px yellow;
}

.loader.hidden {
    display: none;
}

.loader.hidden .circle {
    animation: none;
}

@keyframes cyan {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

@keyframes magenta {
    0% {
        transform: rotate(240deg);
    }

    100% {
        transform: rotate(600deg);
    }
}

@keyframes yellow {
    0% {
        transform: rotate(120deg);
    }

    100% {
        transform: rotate(480deg);
    }
}
</style>