<script>
    import {onMount } from "svelte";
    import axios from "axios";
    import {path} from "../newsapi/constant.svelte";
  
    const endpoint = path + "api/sidefeature";
   
    let side = [];
  
    onMount(async function () {
    try {
      const response = await axios.get(endpoint);
      side = response.data;
    } catch (error) {
      console.error(error);
    }
  });
  
  </script>

{#each side as sd }
    

<div class="col-md-6 pad-r-small">
    <div class="post-overaly-style contentTop fourNewsboxTop clearfix">
        <div class="post-thumb">
            <a href="/posts/{sd.slug}"><img class="img-fluid" src="{sd.image}" alt="{sd.title}" /></a>
        </div>
        <div class="post-content">
             <a class="post-cat" href="/">{sd.category.name}</a>
             <h2 class="post-title title-medium">
                 <a href="/posts/{sd.slug}">{sd.title}</a>
             </h2>
         </div><!-- Post content end -->
    </div><!-- Post Overaly end -->
</div><!-- Col end -->
  
{/each}