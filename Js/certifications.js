<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Certifications | Pratik Nakarmi</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Fira+Code:wght@400;500&display=swap" rel="stylesheet">
</head>
<body>
    <!-- Navigation Bar -->
    <nav class="navbar">
        <div class="container">
            <div class="nav-brand">
                <span class="brand-icon">&lt;/&gt;</span>
                <span class="brand-name">Pratik Nakarmi</span>
            </div>
            <ul class="nav-links">
                <li><a href="index.html">About</a></li>
                <li><a href="resume.html">Resume</a></li>
                <li><a href="certifications.html" class="active">Certifications</a></li>
                <li><a href="projects.html">Projects</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
            <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>

    <!-- Certifications Section -->
    <section class="certifications-section">
        <div class="container">
            <div class="section-header">
                <span class="section-tag">// Professional Development</span>
                <h1 class="section-title">
                    <i class="fas fa-certificate"></i> Certifications
                </h1>
                <p class="section-description">
                    A collection of industry-recognized certifications demonstrating my commitment to continuous learning and professional growth.
                </p>
            </div>

            <!-- Filter Buttons (Optional) -->
            <div class="cert-filters">
                <button class="filter-btn active" data-filter="all">
                    <i class="fas fa-th"></i> All
                </button>
                <button class="filter-btn" data-filter="coursera">
                    <i class="fas fa-graduation-cap"></i> Coursera
                </button>
                <button class="filter-btn" data-filter="linkedin">
                    <i class="fab fa-linkedin"></i> LinkedIn Learning
                </button>
                <button class="filter-btn" data-filter="other">
                    <i class="fas fa-award"></i> Other
                </button>
            </div>

            <!-- Certifications Grid -->
            <div class="certifications-grid">
                
                <!-- Certificate Card 1 -->
                <div class="cert-card" data-category="coursera">
                    <div class="cert-image">
                        <!-- Replace with your actual certificate image -->
                        <img src="assets/certs/cert1.jpg" alt="Certificate Name">
                        <div class="cert-overlay">
                            <button class="view-cert-btn" data-cert="cert1">
                                <i class="fas fa-search-plus"></i> View Full
                            </button>
                        </div>
                    </div>
                    <div class="cert-content">
                        <div class="cert-badge">
                            <i class="fas fa-graduation-cap"></i>
                        </div>
                        <h3 class="cert-title">Google IT Support Professional Certificate</h3>
                        <p class="cert-issuer">
                            <i class="fas fa-building"></i> Coursera
                        </p>
                        <p class="cert-date">
                            <i class="fas fa-calendar-alt"></i> Completed: January 2024
                        </p>
                        <div class="cert-actions">
                            https://coursera.org/verify/your-cert-id
                        </div>
                    </div>
                </div>

                <!-- Certificate Card 2 -->
                <div class="cert-card" data-category="linkedin">
                    <div class="cert-image">
                        <img src="assets/certs/cert2.jpg" alt="Certificate Name">
                        <div class="cert-overlay">
                            <button class="view-cert-btn" data-cert="cert2">
                                <i class="fas fa-search-plus"></i> View Full
                            </button>
                        </div>
                    </div>
                    <div class="cert-content">
                        <div class="cert-badge linkedin">
                            <i class="fab fa-linkedin"></i>
                        </div>
                        <h3 class="cert-title">Learning Active Directory</h3>
                        <p class="cert-issuer">
                            <i class="fas fa-building"></i> LinkedIn Learning
                        </p>
                        <p class="cert-date">
                            <i class="fas fa-calendar-alt"></i> Completed: March 2024
                        </p>
                        <div class="cert-actions">
                            https://linkedin.com/learning/certificates/your-cert-id
                        </div>
                    </div>
                </div>

                <!-- Certificate Card 3 - Template for you to add more -->
                <div class="cert-card" data-category="coursera">
                    <div class="cert-image">
                        <img src="assets/certs/cert3.jpg" alt="Certificate Name">
                        <div class="cert-overlay">
                            <button class="view-cert-btn" data-cert="cert3">
                                <i class="fas fa-search-plus"></i> View Full
                            </button>
                        </div>
                    </div>
                    <div class="cert-content">
                        <div class="cert-badge">
                            <i class="fas fa-graduation-cap"></i>
                        </div>
                        <h3 class="cert-title">Network Security & Database Vulnerabilities</h3>
                        <p class="cert-issuer">
                            <i class="fas fa-building"></i> Coursera
                        </p>
                        <p class="cert-date">
                            <i class="fas fa-calendar-alt"></i> Completed: February 2024
                        </p>
                        <div class="cert-actions">
                            <a href="#" target="_blank" class="cert-link">
                                <i class="fas fa-external-link-alt"></i> Verify
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Add more certificate cards here using the same structure -->

            </div>

            <!-- Stats Section (Optional) -->
            <div class="cert-stats">
                <div class="stat-card">
                    <div class="stat-number" data-target="12">0</div>
                    <p class="stat-label">Total Certifications</p>
                </div>
                <div class="stat-card">
                    <div class="stat-number" data-target="5">0</div>
                    <p class="stat-label">Coursera</p>
                </div>
                <div class="stat-card">
                    <div class="stat-number" data-target="7">0</div>
                    <p class="stat-label">LinkedIn Learning</p>
                </div>
                <div class="stat-card">
                    <div class="stat-number" data-target="240">0</div>
                    <p class="stat-label">Hours of Learning</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Lightbox Modal for Full Certificate View -->
    <div class="cert-modal" id="certModal">
        <span class="modal-close">&times;</span>
        <div class="modal-content">
            <img id="modalImage" src="" alt="Certificate">
            <div class="modal-nav">
                <button class="modal-prev"><i class="fas fa-chevron-left"></i></button>
                <button class="modal-next"><i class="fas fa-chevron-right"></i></button>
            </div>
        </div>
    </div>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <p class="footer-text">
                &copy; 2026 Pratik Nakarmi. Built with <i class="fas fa-heart"></i> and <i class="fas fa-coffee"></i>
            </p>
            <div class="footer-links">
                <a href="https://github.com/yourusername" target="_blank" title="GitHub">
                    <i class="fab fa-github"></i>
                </a>
                <a href="https://linkedin.com/in/yourprofile" target="_blank" title="LinkedIn">
                    <i class="fab fa-linkedin"></i>
                </a>
                <a href="mailto:your.email@gmail.com" title="Email">
                    <i class="fas fa-envelope"></i>
                </a>
            </div>
        </div>
    </footer>

    <script src="js/main.js"></script>
    <script src="js/certifications.js"></script>
</body>
</html>
