<script lang="ts">
    export let msg : string;
    export let title : string;
</script>

<div id="ErrPanel">
    <h2>{title}</h2>
    <h3>{msg}</h3>
</div>

<style>

    @keyframes idleAnimation{
        0% {
            transform: translate(40vw,0);
        }
        100% { 
            transform: translate(0%,0);
        }
    }

    #ErrPanel{
        position: fixed;
        height:20%;
        width: 30%;
        right: 0;
        bottom: 0;


        border: solid 2px rgb(201, 0, 0);
        background-color: rgba(199, 199, 124,0.7);
        color: red;

        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        animation-name: idleAnimation;
        animation-duration: 0.5s;
    }
</style>
