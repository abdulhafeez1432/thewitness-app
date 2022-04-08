<script>
    import {onMount } from "svelte";
    import axios from "axios";
    import {path} from "../newsapi/constant.svelte";
  
    const endpoint = path + "api/mainfeature";
 
   
    let main = [];
  
    onMount(async function () {
    try {
      const response = await axios.get(endpoint);
      main = response.data;
    } catch (error) {
      console.error(error);
    }
  });
  
  
  
  </script>

{#each main as mn }


    
<div class="item" style="background-image:url({mn.image})">
    <div class="featured-post">
         <div class="post-content">
             <a class="post-cat" href="/">{mn.category.name}</a>
             <h2 class="post-title title-extra-large">
                 <a href="/posts/{mn.slug}">{mn.title}</a>
             </h2>
             <span class="post-date">{mn.created_at}</span>
         </div>
     </div><!--/ Featured post end -->
    
</div><!-- Item 1 end -->
  
{/each}