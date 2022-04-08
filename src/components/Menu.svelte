<script>
    import { onMount } from "svelte";
    import axios from "axios";
    import {path} from "../newsapi/constant.svelte";
    const endpoint = path + "api/allcategory";
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

<div class="main-nav clearfix">
    <div class="container">
        <div class="row">
            <nav class="navbar navbar-expand-lg col">
                <div class="site-nav-inner float-left">
           <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
           </button>
           <!-- End of Navbar toggler -->

                    <div id="navbarSupportedContent" class="collapse navbar-collapse navbar-responsive-collapse">
                        <ul class="nav navbar-nav">
                            <li class="nav-item dropdown active">
                                <a href="/" class="nav-link" data-toggle="dropdown">Home <i class="fa fa-angle-down"></i></a>
                               
                            </li>

                           {#each category as cat }
                               
                           
                            <li>
                                <a href="category-style2.html">{cat.name}</a>
                            </li>

                            {/each}

                          <!-- Features menu end -->
                        </ul><!--/ Nav ul end -->
                    </div><!--/ Collapse end -->

                </div><!-- Site Navbar inner end -->
            </nav><!--/ Navigation end -->

            <div class="nav-search">
                <span id="search"><i class="fa fa-search"></i></span>
            </div><!-- Search end -->
            
            <div class="search-block" style="display: none;">
                <input type="text" class="form-control" placeholder="Type what you want and enter">
                <span class="search-close">&times;</span>
            </div><!-- Site search end -->

        </div><!--/ Row end -->
    </div><!--/ Container end -->

</div>
<!-- Menu wrapper end -->