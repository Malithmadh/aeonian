<template>
<div>
  <div class="navbar-area navbar-color-white">
        <div class="dibiz-responsive-nav">
            <div class="container-fluid">
                <div class="dibiz-responsive-menu">
                    <div class="logo">
                        <NuxtLogo/>
                    </div>
                </div>
            </div>
        </div>
        <div class="dibiz-nav">
            <div class="container-fluid">
                <Navigation/>
            </div>
        </div>
        <div class="others-option-for-responsive">
            <div class="container">
                <div class="dot-menu">
                    <div class="inner">
                        <div class="circle circle-one"></div>
                        <div class="circle circle-two"></div>
                        <div class="circle circle-three"></div>
                    </div>
                </div>
                <div class="container">
                    <div class="option-inner">
                        <div class="others-option justify-content-center d-flex align-items-center">
                            <div class="option-item">
                                <div class="side-menu-btn">
                                    <i class="flaticon-menu" data-bs-toggle="modal" data-bs-target="#sidebarModal"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </div>

   <div class="sidebarModal modal right fade" id="sidebarModal" tabindex="-1" role="dialog">
        <SideBar/>
   </div>

    <section class="home-wrapper-area">
        <div class="container-fluid">
            <div class="home-slides">
                <div class="single-banner-item">
                    <div class="row align-items-center">
                        <div class="col-lg-6 col-md-12">
                            <div class="banner-content">
                                <span class="sub-title">Growth Your Business</span>
                                <h1>We Provide Best IT Solutions</h1>
                                <p>Creating nice digital products engineered to drive growth for the world's leading brands.</p>
                                <div class="btn-box">
                                    <div class="d-flex align-items-center">
                                        <a href="contact.html" class="default-btn">Get Started</a>
                                        <a href="https://www.youtube.com/watch?v=Y5KCDWi7h9o"
                                            class="video-btn popup-youtube"><i class="flaticon-play-button"></i> Watch
                                            Video</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12">
                            <div class="banner-image">
                                <img src="/img/banner-img2.jpg" alt="image">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="shape1"><img src="img/shape/shape1.png" alt="image"></div>
        <div class="shape2"><img src="img/shape/shape2.png" alt="image"></div>
        <div class="shape3"><img src="img/shape/shape3.png" alt="image"></div>
        <div class="shape4"><img src="img/shape/shape4.png" alt="image"></div>
        <div class="shape5"><img src="img/shape/shape5.png" alt="image"></div>
        <div class="shape6"><img src="img/shape/shape6.png" alt="image"></div>
        <div class="shape7"><img src="img/shape/shape7.png" alt="image"></div>
        <div class="shape8"><img src="img/shape/shape8.png" alt="image"></div>
        <div class="shape13"><img src="img/shape/shape13.png" alt="image"></div>
        <div class="shape14"><img src="img/shape/shape14.png" alt="image"></div>
    </section>

    <section class="boxes-area pb-70">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-boxes-box">
                        <div class="icon">
                            <i class="flaticon-web-settings"></i>
                            <div class="circles-box">
                                <div class="circle-one"></div>
                            </div>
                        </div>
                        <h3><a href="single-services.html">Web Applications</a></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna.</p>
                        <a href="single-services.html" class="learn-more-btn"><i
                                class="left-icon flaticon-next-button"></i> Learn More <i
                                class="right-icon flaticon-next-button"></i></a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-boxes-box">
                        <div class="icon">
                            <i class="flaticon-startup"></i>
                            <div class="circles-box">
                                <div class="circle-one"></div>
                            </div>
                        </div>
                        <h3><a href="single-services.html">Mobile Applications</a></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna.</p>
                        <a href="single-services.html" class="learn-more-btn"><i
                                class="left-icon flaticon-next-button"></i> Learn More <i
                                class="right-icon flaticon-next-button"></i></a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                    <div class="single-boxes-box">
                        <div class="icon">
                            <i class="flaticon-email-marketing"></i>
                            <div class="circles-box">
                                <div class="circle-one"></div>
                            </div>
                        </div>
                        <h3><a href="single-services.html">Desktop Applications</a></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna.</p>
                        <a href="single-services.html" class="learn-more-btn"><i
                                class="left-icon flaticon-next-button"></i> Learn More <i
                                class="right-icon flaticon-next-button"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="about-area pb-100">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-12">
                    <div class="about-img">
                        <img src="img/about-img2.png" alt="image">
                    </div>
                </div>
                <div class="col-lg-6 col-md-12">
                    <div class="about-content">
                        <div class="text">
                            <span class="sub-title">About Us</span>
                            <h2>Enjoy Full-Service Software development Expertise</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                                viverra maecenas accumsan lacus vel facilisis.</p>
                            <ul class="funfacts-list">
                                <li>
                                    <div class="list">
                                        <i class="flaticon-menu-1"></i>
                                        <h3 class="odometer" data-count="376">00</h3>
                                        <p>Completed projects</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="list">
                                        <i class="flaticon-web-settings"></i>
                                        <h3 class="odometer" data-count="7548">00</h3>
                                        <p>Working hours were spent</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="list">
                                        <i class="flaticon-conversation"></i>
                                        <h3 class="odometer" data-count="350">00</h3>
                                        <p>Expert team members</p>
                                    </div>
                                </li>
                            </ul>
                            <a href="about-us-2.html" class="default-btn">More About Us</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="shape15"><img src="img/shape/shape15.png" alt="image"></div>
    </section>


    <section class="services-area bg-f9f9f9 pt-100 pb-70">
        <div class="container">
            <div class="section-title">
                <span class="sub-title">Services</span>
                <h2>Let’s Check Our Services</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna.</p>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-services-box">
                        <div class="icon">
                            <i class="flaticon-megaphone"></i>
                            <div class="circles-box">
                                <div class="circle-one"></div>
                                <div class="circle-two"></div>
                            </div>
                        </div>
                        <h3><a href="single-services.html">Web Applications</a></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna.</p>
                        <a href="single-services.html" class="learn-more-btn"><i
                                class="left-icon flaticon-next-button"></i> Learn More <i
                                class="right-icon flaticon-next-button"></i></a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-services-box">
                        <div class="icon">
                            <i class="flaticon-keywords"></i>
                            <div class="circles-box">
                                <div class="circle-one"></div>
                                <div class="circle-two"></div>
                            </div>
                        </div>
                        <h3><a href="single-services.html">Mobile Applications</a></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna.</p>
                        <a href="single-services.html" class="learn-more-btn"><i
                                class="left-icon flaticon-next-button"></i> Learn More <i
                                class="right-icon flaticon-next-button"></i></a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-services-box">
                        <div class="icon">
                            <i class="flaticon-content-management"></i>
                            <div class="circles-box">
                                <div class="circle-one"></div>
                                <div class="circle-two"></div>
                            </div>
                        </div>
                        <h3><a href="single-services.html">Desktop Applications</a></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna.</p>
                        <a href="single-services.html" class="learn-more-btn"><i
                                class="left-icon flaticon-next-button"></i> Learn More <i
                                class="right-icon flaticon-next-button"></i></a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-services-box">
                        <div class="icon">
                            <i class="flaticon-ppc"></i>
                            <div class="circles-box">
                                <div class="circle-one"></div>
                                <div class="circle-two"></div>
                            </div>
                        </div>
                        <h3><a href="single-services.html">Social Media Matketing</a></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna.</p>
                        <a href="single-services.html" class="learn-more-btn"><i
                                class="left-icon flaticon-next-button"></i> Learn More <i
                                class="right-icon flaticon-next-button"></i></a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-services-box">
                        <div class="icon">
                            <i class="flaticon-competitor"></i>
                            <div class="circles-box">
                                <div class="circle-one"></div>
                                <div class="circle-two"></div>
                            </div>
                        </div>
                        <h3><a href="single-services.html">Web Hosting</a></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna.</p>
                        <a href="single-services.html" class="learn-more-btn"><i
                                class="left-icon flaticon-next-button"></i> Learn More <i
                                class="right-icon flaticon-next-button"></i></a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-services-box">
                        <div class="icon">
                            <i class="flaticon-startup"></i>
                            <div class="circles-box">
                                <div class="circle-one"></div>
                                <div class="circle-two"></div>
                            </div>
                        </div>
                        <h3><a href="single-services.html">Digital Media Marketing</a></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna.</p>
                        <a href="single-services.html" class="learn-more-btn"><i
                                class="left-icon flaticon-next-button"></i> Learn More <i
                                class="right-icon flaticon-next-button"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section class="pricing-area bg-f9f9f9 pt-100 pb-70">
        <Price/>
    </section>

    <section class="project-start-area ptb-100">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-12">
                    <div class="project-start-image">
                        <img src="img/project-start1.png" alt="image">
                    </div>
                </div>
                <div class="col-lg-6 col-md-12">
                    <div class="project-start-content">
                        <span class="sub-title">Get Started</span>
                        <h2>We Like to Start Your Project With Us</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna.</p>
                        <a href="contact.html" class="default-btn">Get Started</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="shape2"><img src="img/shape/shape2.png" alt="image"></div>
        <div class="shape3"><img src="img/shape/shape3.png" alt="image"></div>
        <div class="shape5"><img src="img/shape/shape5.png" alt="image"></div>
        <div class="shape6"><img src="img/shape/shape6.png" alt="image"></div>
        <div class="shape7"><img src="img/shape/shape7.png" alt="image"></div>
        <div class="shape13"><img src="img/shape/shape13.png" alt="image"></div>
    </section>


    <Footer/>
</div>
  
</template>

<script>
export default {}
</script>
