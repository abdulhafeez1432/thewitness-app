<script>
    import {onMount } from "svelte";
    import axios from "axios";
    import {path} from "../newsapi/constant.svelte";
  
    //const endpoint = path + "breakingnews";
    const endpoint = "https://thewitness.com.ng/api/breakingnews";

    console.log(endpoint)
   
    let breaking = [];
  
    onMount(async function () {
    try {
      const response = await axios.get(endpoint);
      console.log(response)
      breaking = response.data;
    } catch (error) {
      console.error(error);
    }
  });
  
  
  
  </script>
  



  



 <!--====== BINDUZ TOP HEADER PART START ======-->

 <div class="binduz-er-top-header-area">
  <div class="binduz-er-bg-cover"></div>
  <div class="container">
      <div class="row align-items-center">
          <div class="col-lg-8">
              <div class="binduz-er-topbar-headline">
                {#each breaking as bk }
                  <p><span><i class="fas fa-bolt"></i> Breaking News:</span> <a href="#">{ bk.title }</a></p>
                  {/each}
              </div>
          </div>
          <div class="col-lg-4">
              <div class="binduz-er-topbar-social d-flex justify-content-end align-items-center">
                  <div class="binduz-er-news-social">
                      <ul>
                          <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                          <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                          <li><a href="#"><i class="fab fa-behance"></i></a></li>
                          <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                          <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                      </ul>
                  </div>
                  <div class="binduz-er-news-subscribe-btn">
                      <a class="binduz-er-main-btn" href="#">Subscribe</a>
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>

<!--====== BINDUZ TOP HEADER PART ENDS ======-->