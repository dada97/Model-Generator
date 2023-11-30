<script lang="ts">
  import { onMount } from "svelte";
  import ThreeScene from "./lib/ThreeScene"
  let scene: ThreeScene;

  let showLabel = true;

  onMount(async()=>{
    scene = new ThreeScene();
  })

  let dragOver = (event)=>{
    event.preventDefault();
    if(event.dataTransfer) event.dataTransfer.Effect = "copy";
  }

  let drop = (event)=>{
    event.preventDefault();
    // console.log(event.dataTransfer.files)

    scene.loadModel(event.dataTransfer.files);
    showLabel = false;
  }
</script>


<!-- svelte-ignore a11y-no-static-element-interactions -->
{#if showLabel}
<div id="dragzone" on:dragover={dragOver} on:drop={drop}>Drag and Drop to upload model</div>
{/if}

<div id="container"/>


<style>
 #container{
  position: absolute;
  top: 0px;
  height: 100vh;
  width: 100vw;
  z-index: -1;
 }

 #dragzone{
  width: 100vw;
  height: 100vh;
  z-index: 10;
  color: white;
 }
 
</style>
