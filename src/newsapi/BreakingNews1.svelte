<script>
  import { onMount } from "svelte";
  import axios from "axios";
  import {path} from "./constant.svelte


  
  const endpoint = path + "api/breakingnews";
 
  let category = [];

  onMount(async function () {
  try {
    const response = await axios.get(endpoint);
    category = response.data;
  } catch (error) {
    console.error(error);
  }
});



</script>



<main>
  
  <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>

  {#each category as article, index}
    <div>
      <p>{article.title}</p>
    </div>
  {/each}
</main>