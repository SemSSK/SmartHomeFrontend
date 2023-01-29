<script lang="ts">
    interface link{
        text:string,
        to:string
    }
    export let links : Array<link>;

    const assetBasePath = "/src/assets/"

</script>




<div class="drawer">
    {#each links as link}
        <a class="link" href={link.to}>
            <img src={assetBasePath + link.text} alt={link.text}>
        </a>
    {/each}
</div>

<style>

    :global(.link) {
        width: 100%;
        margin-left: 30%;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }    

    img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: white;
        padding: 3%;
    }
    
    
    .drawer{
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width:15%;
        transition: 0.5s;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: space-evenly;


        background-color: #00000055;
        transform: translate(-14vw,0);
        box-shadow: 5px 0px 20px black;
    }

    .drawer:hover{
        background-color: #1b2f79a6;
        transform: translate(0,0);
    }

    

</style>
