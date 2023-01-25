<script lang="ts">
    let videoSource = null;
    let loading = false;
    const obtenerVideoCamara = async () => {
        try {
        loading = true;
        const stream = await navigator.mediaDevices.getUserMedia({
            video: true,
        });
        videoSource.srcObject = stream;
        videoSource.play();
        loading = false;
        } catch (error) {
            console.log(error);
        }
    };
    obtenerVideoCamara();
</script>

<div>
    {#if loading}
        <h1>LOADING</h1>
    {/if}
    <video bind:this={videoSource}>
        <track kind="captions">
    </video>
</div>

<style>

</style>