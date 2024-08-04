const header = document.querySelector("header");
const footer = document.querySelector("footer");

// HEADER
header.innerHTML = `
    <!-- Start Navbar Area -->
    <div class="navbar-area">

        <div class="noke-responsive-nav">
            <div class="container">
                <div class="noke-responsive-menu">
                    <div class="logo">
                        <a href="/"><img src="assets/image/logos/logo-rri-color.svg" height="100" width="250px" alt="Logo RRI"></a>
                    </div>
                </div>
            </div>
        </div>

        <div class="noke-nav">
            <div class="container-fluid">
                <nav class="navbar navbar-expand-md navbar-light">
                    <a class="navbar-brand" href="/"><img src="assets/image/logos/logo-rri-color.svg" height="100" width="350px" alt="Logo RRI"></a>
                    <div class="collapse navbar-collapse mean-menu">
                        <ul class="navbar-nav">

                            <li class="nav-item megamenu"><a class="nav-link active" href="/">INICIO</a></li>

                            <li class="nav-item megamenu"><a href="/" class="dropdown-toggle nav-link">NOSOTROS</a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <div class="row">
                                            <div class="col">
                                                <h6 class="submenu-title"></h6>
                                                <ul class="megamenu-submenu">
                                                    <li><a href="mision-vision">MISIÓN & VISIÓN</a></li>
                                                    <li><a href="emisoras-rri">EMISORAS AL AIRE</i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>

                            <li class="nav-item megamenu"><a href="/"
                                    class="dropdown-toggle nav-link">PROYECTOS</a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <div class="row">
                                            <div class="col">

                                                <h6 class="submenu-title"></h6>
                                                <ul class="megamenu-submenu">
                                                    <li><a href="proyecto-huaraz.html">PROYECTO HUARAZ</a></li>
                                                    <li><a href="proyecto-tumbes.html">PROYECTO TUMBES</i></a>
                                                    <li><a href="proyecto-chepen.html">PROYECTO CHEPÉN</i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>

                            <!-- <li class="nav-item"><a href="trabajando-404.html" class="dropdown-toggle nav-link">Programación</a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item"><a href="trabajando-404.html" class="nav-link">Lunes a Domingo</a></li>

                                        <li class="nav-item"><a href="trabajando-404.html" class="nav-link">PodsCast</a></li>

                                        <li class="nav-item"><a href="trabajando-404.html" class="nav-link">La Biblia Responde</a><li>

                                        <li class="nav-item"><a href="trabajando-404.html" class="nav-link">Todo los Programas</a></li>
                                    </ul>
                                </li>                                     -->
                            <!-- <li class="nav-item megamenu"><a href="trabajando-404.html" class="dropdown-toggle nav-link">Leer</a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <div class="row">
                                                <div class="col">                                                
                                                    <h6 class="submenu-title">Familia</h6>
                                                    <ul class="megamenu-submenu">
                                                        <li><a href="trabajando-404.html">...</a></li>

                                                        <li><a href="trabajando-404.html">...</a></li>

                                                        <li><a href="trabajando-404.html">...</a></li>

                                                        <li><a href="trabajando-404.html">...</a></li>

                                                        <li><a href="trabajando-404.html">...</a></li>
                                                    </ul>

                                                    <h6 class="submenu-title">Teología</h6>
                                                    <ul class="megamenu-submenu">
                                                        <li><a href="trabajando-404.html">...</a></li>

                                                        <li><a href="trabajando-404.html">...</a></li>
                                                    </ul>

                                                    <h6 class="submenu-title">Damas</h6>
                                                    <ul class="megamenu-submenu">
                                                        <li><a href="trabajando-404.html">...</a></li>

                                                        <li><a href="trabajando-404.html">...</a></li>
                                                    </ul>
                                                </div>

                                                <div class="col">
                                                    <h6 class="submenu-title">Varones</h6>
                                                    <ul class="megamenu-submenu">
                                                        <li><a href="trabajando-404.html">...</a></li>

                                                        <li><a href="trabajando-404.html">...</a></li>

                                                        <li><a href="trabajando-404.html">...</a></li>

                                                        <li><a href="trabajando-404.html">...</a></li>
                                                    </ul>

                                                    <h6 class="submenu-title">Estudios Bíblicos</h6>
                                                    <ul class="megamenu-submenu">
                                                        <li><a href="trabajando-404.html">...</a></li>

                                                        <li><a href="trabajando-404.html">...</a></li>

                                                        <li><a href="trabajando-404.html">...</a></li>

                                                        <li><a href="trabajando-404.html">...</a></li>
                                                    </ul>

                                                    <h6 class="submenu-title">Infomración</h6>
                                                    <ul class="megamenu-submenu">
                                                        <li><a href="trabajando-404.html">...</a></li>

                                                        <li><a href="trabajando-404.html">...</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li> -->

                            <li class="nav-item"><a href="contacto" class="nav-link">CONTACTO</a></li>

                            <li class="nav-item"><a href="https://www.facebook.com/LibreriaIntegridad" class="nav-link">LIBRERÍA</a></li>

                            <li class="nav-item-donar"><a href="donar" class="nav-link-donar">DONAR</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </div>
    <!-- End Navbar Area -->
`;

// FOOTER
footer.innerHTML = `
    <div class="footer-area consulting-footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <h3>Contacto</h3>
                        <ul class="footer-contact">
                            <li><i class="fas fa-map-marker-alt"></i> Av. Alejandro Tirado 508 Urb. Santa Beatriz - Lima-Perú</li>
                            <li><i class="far fa-envelope"></i> <a href="mailto:info@rri.pe">info@rri.pe</a></li>
                            <li><i class="fas fa-phone-volume"></i> <a href="tel:+51-1-2653291">+51-1-2653291</a></li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-footer-widget pl-4">
                        <h3>Nosotros</h3>
                        <ul class="info-links">
                            <li><a href="/">Nuestra Historia</a></li>
                            <li><a href="mision-vision">Misión & Visión</a></li>
                            <li><a href="emisoras-rri.html">Emisoras</a></li>
                            <li><a href="/">Actividades</a></li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <h3>Recursos</h3>
                        <ul class="info-links">
                            <li><a href="/">Notas y Bosquejos de ATB</a></li>
                            <li><a href="/">Materiales de estudio</a></li>
                            <li><a href="/">Descargue PDF</a></li>
                            <li><a href="/">Videos</a></li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <h3>Suscribir</h3>
                        <p>Suscríbete para recibir las últimas noticias</p>
                        <form class="newsletter-form" data-toggle="validator">
                            <input type="email" class="input-newsletter" placeholder="Introduce su email" name="EMAIL" required autocomplete="off">
                            <button type="submit"><i class="far fa-paper-plane"></i></button>
                            <div id="validator-newsletter" class="form-result"></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div class="copyright-area">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-3 col-md-12">
                        <div class="text-start">
                            <a href="/" class="logo">
                                <img src="assets/image/logos/logo-rri-color.svg" alt="Logo RRI">
                            </a>
                        </div>
                    </div>

                    <div class="col-lg-6 col-md-12">
                        <p>© 2022 Todos los Derechos Reservados - RRI - Crafted by JM</a></p>
                    </div>

                    <div class="col-lg-3 col-md-12">
                        <ul class="social-links">
                            <li><a href="https://www.facebook.com/RRIemisora" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="https://www.instagram.com/rri_emisora/" target="_blank"><i class="fab fa-instagram"></i></a></li>
                            <li><a href="https://twitter.com/RRI_emisora" target="_blank"><i class="fab fa-twitter"></i></a></li>
                            <li><a href="https://www.youtube.com/rri_emisora" target="_blank"><i class="fab fa-youtube"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="shape17"><img src="assets/img/shape/shape17.png" alt="image"></div>
    </div>
`;
