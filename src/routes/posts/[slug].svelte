<script context="module">
import {path} from "../../newsapi/constant.svelte";
import Menu from "../../components/Menu.svelte";
import BreakingNews from "../../components/BreakingNews.svelte";
import Header from "../../components/Header.svelte"
import SvelteMarkdown from 'svelte-markdown'
  
    




    export async function load({params, fetch}){
        const slug = params.slug;
        const url = `http://127.0.0.1:8000/api/posts/${slug}`;
        const res = await fetch(url);
        const newsdetail = await res.json();
        return {props: {newsdetail}};}

</script>

<script>
   export let newsdetail;
</script>


<svelte:head>
    <title>Welcome to the World</title>
    <!-- Template styles-->
    <link rel="stylesheet" href="../../front/css/style.css">
    <!-- Responsive styles-->
    <link rel="stylesheet" href="../../front/css/responsive.css">
    <!-- FontAwesome -->
    <link rel="stylesheet" href="../../front/css/font-awesome.min.css">
    <!-- Owl Carousel -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css">

    <!-- Colorbox -->
    <link rel="stylesheet" href="../../front/css/colorbox.css">

    

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">

    <script type="text/javascript" src="./front/js/custom.js"></script>
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>

    <!-- Color box -->
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery.colorbox/1.6.4/jquery.colorbox-min.js"></script>
    <!-- Smoothscroll -->
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/smooth-scroll/16.1.3/smooth-scroll.min.js"></script>

    <!-- Owl Carousel -->
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>



 

</svelte:head>

<div class="body-inner">

	
        <Header></Header>
        <Menu></Menu>
       

	

	<div class="page-title">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<ol class="breadcrumb">
     					<li><a href="/">Home</a></li>
     					<li><a>{newsdetail.category.name}</a></li>
     				</ol>
				</div><!-- Col end -->
			</div><!-- Row end -->
		</div><!-- Container end -->
	</div><!-- Page title end -->

	<section class="block-wrapper">
		<div class="container">
			<div class="row">
				<div class="col-lg-8 col-md-12">
					
					<div class="single-post">

						<div class="post-title-area">
							<a class="post-cat" href="/">{newsdetail.category.name}</a>
							<h2 class="post-title">
                                {newsdetail.title}
				 			</h2>
				 			<div class="post-meta">
								<span class="post-author">
									By <a href="/">{newsdetail.author.first_name} {newsdetail.author.last_name}  </a>
								</span>
								<span class="post-date"><i class="fa fa-clock-o"></i> {newsdetail.created_at }</span>
								<span class="post-hits"><i class="fa fa-eye"></i> {newsdetail.view }</span>
								<span class="post-comment"><i class="fa fa-comments-o"></i>
								<a href="/" class="comments-link"><span>{newsdetail.comment_num}</span></a></span>
							</div>
						</div><!-- Post title end -->

						<div class="post-content-area">
							<div class="entry-content">
								<div class="post-media post-video">
									<div class="embed-responsive">
										<!-- Change the url -->
									
                                        <img class="fit-picture" src="{newsdetail.image}" width="800" height="281"   alt="{newsdetail.title}">
									
                                    </div>
								</div><!-- Media end -->

                                

                                {newsdetail.content}

							
							</div><!-- Entery content end -->

							<div class="tags-area clearfix">
								<div class="post-tags">
									<span>Tags:</span>
                                
		   						<a href="/">{newsdetail.tags}</a>
		   						
	   						</div>
							</div><!-- Tags end -->

							<div class="share-items clearfix">
   							<ul class="post-social-icons unstyled">
   								<li class="facebook">
   									<a href="/">
   									<i class="fa fa-facebook"></i> <span class="ts-social-title">Facebook</span></a>
   								</li>
   								<li class="twitter">
   									<a href="/">
   									<i class="fa fa-twitter"></i> <span class="ts-social-title">Twitter</span></a>
   								</li>
   								<li class="gplus">
   									<a href="/">
   									<i class="fa fa-google-plus"></i> <span class="ts-social-title">Google +</span></a>
   								</li>
   								<li class="pinterest">
   									<a href="/">
   									<i class="fa fa-pinterest"></i> <span class="ts-social-title">Pinterest</span></a>
   								</li>
   							</ul>
   						</div><!-- Share items end -->

						</div><!-- post-content end -->
					</div><!-- Single post end -->

				
				

				

					<!-- Post comment start -->
					<div id="comments" class="comments-area block">
						<h3 class="block-title"><span>{newsdetail.comment_num}</span></h3>

						<ul class="comments-list">
							<li>
                                {#each newsdetail.comment_post as nc }
								<div class="comment">
									<img class="comment-avatar pull-left" alt="" src="./front/images/news/user1.png">
									<div class="comment-body">
										<div class="meta-data">
											<span class="comment-author">{nc.owner}</span>
											<span class="comment-date pull-right">{nc.created_date}</span>
										</div>
										<div class="comment-content">
                                            {nc.body}
                                        </div>
										<div class="text-left">
											<a class="comment-reply" href="/">Reply</a>
										</div>	
									</div>
								</div><!-- Comments end -->

                               {/each}
                               
								



							</li><!-- Comments-list li end -->
						</ul><!-- Comments-list ul end -->
					</div><!-- Post comment end -->

					<div class="comments-form">
						<h3 class="title-normal">Leave a comment</h3>

						<form role="form">
							<div class="row">
								<div class="col-md-12">
									<div class="form-group">
										<textarea class="form-control required-field" id="message" placeholder="Your Comment" rows="10" required></textarea>
									</div>
								</div><!-- Col end -->

								<div class="col-md-12">
									<div class="form-group">
										<input class="form-control" name="name" id="name" placeholder="Your Name" type="text" required>
									</div>
								</div><!-- Col end -->

								<div class="col-md-12">
									<div class="form-group">
										<input class="form-control" name="email" id="email" placeholder="Your Email" type="email" required>
									</div>
								</div>

								<div class="col-md-12">
									<div class="form-group">
										<input class="form-control" placeholder="Your Website" type="text" required>
									</div>
								</div>
							</div><!-- Form row end -->
							<div class="clearfix">
								<button class="comments-btn btn btn-primary" type="submit">Post Comment</button> 
							</div>
						</form><!-- Form end -->
					</div><!-- Comments form end -->

				</div><!-- Content Col end -->

				<div class="col-lg-4 col-md-12">
					<div class="sidebar sidebar-right">
						<div class="widget">
							<h3 class="block-title"><span>Follow Us</span></h3>

							<ul class="social-icon">
								<li><a href="/" target="_blank"><i class="fa fa-rss"></i></a></li>
								<li><a href="/" target="_blank"><i class="fa fa-facebook"></i></a></li>
								<li><a href="/" target="_blank"><i class="fa fa-twitter"></i></a></li>
								<li><a href="/" target="_blank"><i class="fa fa-google-plus"></i></a></li>
								<li><a href="/" target="_blank"><i class="fa fa-vimeo-square"></i></a></li>
								<li><a href="/" target="_blank"><i class="fa fa-youtube"></i></a></li>
							</ul>
						</div><!-- Widget Social end -->

						<div class="widget color-default">
							<h3 class="block-title"><span>Popular News</span></h3>

							<div class="post-overaly-style clearfix">
								<div class="post-thumb">
									<a href="/">
										<img class="img-fluid" src="images/news/lifestyle/health4.jpg" alt="" />
									</a>
								</div>
								
								<div class="post-content">
						 			<a class="post-cat" href="/">Health</a>
						 			<h2 class="post-title title-small">
						 				<a href="/">Smart packs parking sensor tech and beeps when col…</a>
						 			</h2>
						 			<div class="post-meta">
						 				<span class="post-date">Feb 06, 2017</span>
						 			</div>
					 			</div><!-- Post content end -->
							</div><!-- Post Overaly Article end -->


							<div class="list-post-block">
								<ul class="list-post">
									<li class="clearfix">
										<div class="post-block-style post-float clearfix">
											<div class="post-thumb">
												<a href="/">
													<img class="img-fluid" src="images/news/tech3gadget/.jpg" alt="" />
												</a>
												<a class="post-cat" href="/">Gadgets</a>
											</div><!-- Post thumb end -->

											<div class="post-content">
									 			<h2 class="post-title title-small">
									 				<a href="/">Panasonic's new Sumix CH7 an ultra portable filmmaker's drea…</a>
									 			</h2>
									 			<div class="post-meta">
									 				<span class="post-date">Mar 1/, 2017</span>
									 			</div>
								 			</div><!-- Post content end -->
										</div><!-- Post block style end -->
									</li><!-- Li 1 end -->

									<li class="clearfix">
										<div class="post-block-style post-float clearfix">
											<div class="post-thumb">
												<a href="/">
													<img class="img-fluid" src="images/news/lifestyle/travel5.jpg" alt="" />
												</a>
												<a class="post-cat" href="/">Travel</a>
											</div><!-- Post thumb end -->

											<div class="post-content">
									 			<h2 class="post-title title-small">
									 				<a href="/">Hynopedia helps female travelers find health care...</a>
									 			</h2>
									 			<div class="post-meta">
									 				<span class="post-date">Jan 11, 2017</span>
									 			</div>
								 			</div><!-- Post content end -->
										</div><!-- Post block style end -->
									</li><!-- Li 2 end -->

									<li class="clearfix">
										<div class="post-block-style post-float clearfix">
											<div class="post-thumb">
												<a href="/">
													<img class="img-fluid" src="images/news/tech3robot5.jpg" alt="" />
												</a>
												<a class="post-cat" href="/">Robotics</a>
											</div><!-- Post thumb end -->

											<div class="post-content">
									 			<h2 class="post-title title-small">
									 				<a href="/">Robots in hospitals can be quite handy to navigate around...</a>
									 			</h2>
									 			<div class="post-meta">
									 				<span class="post-date">Feb 19, 2017</span>
									 			</div>
								 			</div><!-- Post content end -->
										</div><!-- Post block style end -->
									</li><!-- Li / end -->

									<li class="clearfix">
										<div class="post-block-style post-float clearfix">
											<div class="post-thumb">
												<a href="/">
													<img class="img-fluid" src="images/news/lifestyle/food1.jpg" alt="" />
												</a>
												<a class="post-cat" href="/">Food</a>
											</div><!-- Post thumb end -->

											<div class="post-content">
									 			<h2 class="post-title title-small">
									 				<a href="/">Tacos ditched the naked chicken chalupa, so here's how…</a>
									 			</h2>
									 			<div class="post-meta">
									 				<span class="post-date">Feb 27, 2017</span>
									 			</div>
								 			</div><!-- Post content end -->
										</div><!-- Post block style end -->
									</li><!-- Li 4 end -->

								</ul><!-- List post end -->
							</div><!-- List post block end -->

						</div><!-- Popular news widget end -->

						<div class="widget text-center">
							<img class="banner img-fluid" src="images/banner-ads/ad-sidebar.png" alt="" />
						</div><!-- Sidebar Ad end -->

						<div class="widget widget-tags">
							<h3 class="block-title"><span>Tags</span></h3>
							<ul class="unstyled clearfix">
			              	<li><a href="/">Apps</a></li>
			              	<li><a href="/">Architechture</a></li>
			              	<li><a href="/">Food</a></li>
			              	<li><a href="/">Gadgets</a></li>
			              	<li><a href="/">Games</a></li>
			              	<li><a href="/">Health</a></li>
			              	<li><a href="/">Lifestyles</a></li>
			              	<li><a href="/">Robotics</a></li>
			              	<li><a href="/">Software</a></li>
			              	<li><a href="/">Tech</a></li>
			              	<li><a href="/">Travel</a></li>
			              	<li><a href="/">Video</a></li>
			            </ul>
						</div><!-- Tags end -->

						<div class="widget m-bottom-0">
							<h3 class="block-title"><span>Newsletter</span></h3>
							<div class="ts-newsletter">
								<div class="newsletter-introtext">
									<h4>Get Updates</h4>
									<p>Subscribe our newsletter to get the best stories into your inbox!</p>
								</div>

								<div class="newsletter-form">
									<form action="/" method="post">
										<div class="form-group">
											<input type="email" name="email" id="newsletter-form-email" class="form-control form-control-lg" placeholder="E-mail" autocomplete="off">
											<button class="btn btn-primary">Subscribe</button>
										</div>
									</form>
								</div>
							</div><!-- Newsletter end -->
						</div><!-- Newsletter widget end -->

					</div><!-- Sidebar right end -->
				</div><!-- Sidebar Col end -->

			</div><!-- Row end -->
		</div><!-- Container end -->
	</section><!-- First block end -->


	<footer id="footer" class="footer">
		<div class="footer-main">
			<div class="container">
				<div class="row">
					<div class="col-lg-/ col-sm-12 footer-widget">
						<h3 class="widget-title">Trending Now</h3>
						<div class="list-post-block">
							<ul class="list-post">
								<li class="clearfix">
									<div class="post-block-style post-float clearfix">
										<div class="post-thumb">
											<a href="/">
												<img class="img-fluid" src="images/news/lifestyle/health2.jpg" alt="" />
											</a>
										</div><!-- Post thumb end -->

										<div class="post-content">
								 			<h2 class="post-title title-small">
								 				<a href="/">Can't shed those Gym? The problem might...</a>
								 			</h2>
								 			<div class="post-meta">
								 				<span class="post-date">Mar 1/, 2017</span>
								 			</div>
							 			</div><!-- Post content end -->
									</div><!-- Post block style end -->
								</li><!-- Li 1 end -->

								<li class="clearfix">
									<div class="post-block-style post-float clearfix">
										<div class="post-thumb">
											<a href="/">
												<img class="img-fluid" src="images/news/lifestyle/health3.jpg" alt="" />
											</a>
										</div><!-- Post thumb end -->

										<div class="post-content">
								 			<h2 class="post-title title-small">
								 				<a href="/">Deleting fears from the brain means you…</a>
								 			</h2>
								 			<div class="post-meta">
								 				<span class="post-date">Jan 11, 2017</span>
								 			</div>
							 			</div><!-- Post content end -->
									</div><!-- Post block style end -->
								</li><!-- Li 2 end -->

								<li class="clearfix">
									<div class="post-block-style post-float clearfix">
										<div class="post-thumb">
											<a href="/">
												<img class="img-fluid" src="images/news/lifestyle/health4.jpg" alt="" />
											</a>
										</div><!-- Post thumb end -->

										<div class="post-content">
								 			<h2 class="post-title title-small">
								 				<a href="/">Smart packs parking sensor tech...</a>
								 			</h2>
								 			<div class="post-meta">
								 				<span class="post-date">Feb 19, 2017</span>
								 			</div>
							 			</div><!-- Post content end -->
									</div><!-- Post block style end -->
								</li><!-- Li / end -->
							</ul><!-- List post end -->
						</div><!-- List post block end -->
						
					</div><!-- Col end -->

					<div class="col-lg-/ col-sm-12 footer-widget widget-categories">
						<h3 class="widget-title">Hot Categories</h3>
						<ul>
							<li>
								<a href="/"><span class="catTitle">Robotics</span><span class="catCounter"> (5)</span></a>
							</li>
							<li>
								<a href="/"><span class="catTitle">Games</span><span class="catCounter"> (6)</span></a>
							</li>
							<li>
								<a href="/"><span class="catTitle">Gadgets</span><span class="catCounter"> (5)</span></a>
							</li>
							<li>
								<a href="/"><span class="catTitle">Travel</span><span class="catCounter"> (5)</span></a>
							</li>
							<li>
								<a href="/"><span class="catTitle">Health</span><span class="catCounter"> (5)</span></a>
							</li>
							<li>
								<a href="/"><span class="catTitle">Architecture</span><span class="catCounter"> (5)</span></a>
							</li>
							<li>
								<a href="/"><span class="catTitle">Food</span><span class="catCounter"> (5)</span></a>
							</li>
						</ul>
						
					</div><!-- Col end -->

					<div class="col-lg-/ col-sm-12 footer-widget twitter-widget">
						<h3 class="widget-title">Latest Tweets</h3>
						<ul>
							<li>
								<div class="tweet-text">
								<span>About 1/ days ago</span>
								Please, Wait for the next version of our templates to update /Joomla /.7 
								<a href="/">https://t.co/LlEv8HgokN</a>
								</div>
							</li>
							<li>
								<div class="tweet-text">
								<span>About 15 days ago</span>
								/WordPress 4.8 is here!
								<a href="/">https://t.co/uDjRH4Gya9</a>
								</div>
							</li>
							<li>
								<div class="tweet-text">
								<span>About 1 month ago</span>
								Please, Wait for the next version of our templates to update /Joomla /.7 
								<a href="/">https://t.co/LlEv8HgokN</a>
								</div>
							</li>
						</ul>
					</div><!-- Col end -->

					<div class="col-lg-/ col-sm-12 footer-widget">
						<h3 class="widget-title">Post Gallery</h3>
						<div class="gallery-widget">
							<a href="/"><img class="img-fluid" src="images/news/lifestyle/health1.jpg" alt="" /></a>
							<a href="/"><img class="img-fluid" src="images/news/lifestyle/food/.jpg" alt="" /></a>
							<a href="/"><img class="img-fluid" src="images/news/lifestyle/travel4.jpg" alt="" /></a>
							<a href="/"><img class="img-fluid" src="images/news/lifestyle/architecture1.jpg" alt="" /></a>
							<a href="/"><img class="img-fluid" src="images/news/tech3gadget1.jpg" alt="" /></a>
							<a href="/"><img class="img-fluid" src="images/news/tech3gadget2.jpg" alt="" /></a>
							<a href="/"><img class="img-fluid" src="images/news/tech3game2.jpg" alt="" /></a>
							<a href="/"><img class="img-fluid" src="images/news/tech3robot5.jpg" alt="" /></a>
							<a href="/"><img class="img-fluid" src="images/news/lifestyle/travel5.jpg" alt="" /></a>
						</div>
					</div><!-- Col end -->

				</div><!-- Row end -->
			</div><!-- Container end -->
		</div><!-- Footer main end -->

		<div class="footer-info text-center">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="footer-info-content">
							<div class="footer-logo">
								<img class="img-fluid" src="images/logos/footer-logo.png" alt="" />
							</div>
							<p>News247 Worldwide is a popular online newsportal and going source for technical and digital content for its influential audience around the globe. You can reach us via email or phone.</p>
							<p class="footer-info-phone"><i class="fa fa-phone"></i> +(785) 2/8-41/1</p>
							<p class="footer-info-email"><i class="fa fa-envelope-o"></i> editor@news247.com</p>
							<ul class="unstyled footer-social">
								<li>
									<a title="Rss" href="/">
										<span class="social-icon"><i class="fa fa-rss"></i></span>
									</a>
									<a title="Facebook" href="/">
										<span class="social-icon"><i class="fa fa-facebook"></i></span>
									</a>
									<a title="Twitter" href="/">
										<span class="social-icon"><i class="fa fa-twitter"></i></span>
									</a>
									<a title="Google+" href="/">
										<span class="social-icon"><i class="fa fa-google-plus"></i></span>
									</a>
									<a title="Linkdin" href="/">
										<span class="social-icon"><i class="fa fa-linkedin"></i></span>
									</a>
									<a title="Skype" href="/">
										<span class="social-icon"><i class="fa fa-skype"></i></span>
									</a>
									<a title="Skype" href="/">
										<span class="social-icon"><i class="fa fa-dribbble"></i></span>
									</a>
									<a title="Skype" href="/">
										<span class="social-icon"><i class="fa fa-pinterest"></i></span>
									</a>
									<a title="Skype" href="/">
										<span class="social-icon"><i class="fa fa-instagram"></i></span>
									</a>
								</li>
							</ul>
						</div><!-- Footer info content end -->
					</div><!-- Col end -->
				</div><!-- Row end -->
			</div><!-- Container end -->
		</div><!-- Footer info end -->

	</footer><!-- Footer end -->

	<div class="copyright">
			<div class="container">
				<div class="row">
					<div class="col-sm-12 col-md-6">
						<div class="copyright-info">
							<span>Copyright © 2017 News247 All Rights Reserved. Designed By Tripples</span>
						</div>
					</div>

					<div class="col-sm-12 col-md-6">
						<div class="footer-menu">
							<ul class="nav unstyled">
								<li><a href="/">Site Terms</a></li>
								<li><a href="/">Privacy</a></li>
								<li><a href="/">Advertisement</a></li>
								<li><a href="/">Cookies Policy</a></li>
								<li><a href="/">Contact Us</a></li>
							</ul>
						</div>
					</div>
				</div><!-- Row end -->

				<div id="back-to-top" class="back-to-top">
					<button class="btn btn-primary" title="Back to Top">
						<i class="fa fa-angle-up"></i>
					</button>
				</div>

			</div><!-- Container end -->
   	</div><!-- Copyright end -->


</div>