import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// Import the benchy image
import benchyImage from "@assets/image_1757382298644.png";

export default function Home() {

  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;
      const startPosition = window.pageYOffset;
      const distance = offsetPosition - startPosition;
      const duration = 1000; // 1 second
      let start: number | null = null;

      function step(timestamp: number) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const percentage = Math.min(progress / duration, 1);
        
        // Easing function for smooth animation
        const ease = percentage < 0.5 
          ? 4 * percentage * percentage * percentage 
          : (percentage - 1) * (2 * percentage - 2) * (2 * percentage - 2) + 1;
        
        window.scrollTo(0, startPosition + distance * ease);
        
        if (progress < duration) {
          window.requestAnimationFrame(step);
        }
      }
      
      window.requestAnimationFrame(step);
    }
  };

  const scrollToProjects = () => smoothScrollTo('projects');
  const scrollToContact = () => smoothScrollTo('contact');
  const scrollToAbout = () => smoothScrollTo('about');
  const scrollToHero = () => smoothScrollTo('hero');

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <h1 className="text-2xl font-bold text-primary" data-testid="nav-title">Bart 3D Prints</h1>
              <p className="text-sm text-muted-foreground italic" data-testid="nav-quote">
                "Bringing imagination to life, layer by layer"
              </p>
            </div>
            <div className="hidden md:flex space-x-6">
              <button 
                onClick={scrollToHero}
                className="text-foreground hover:text-primary transition-colors"
                data-testid="nav-home"
              >
                Home
              </button>
              <button 
                onClick={scrollToAbout}
                className="text-foreground hover:text-primary transition-colors"
                data-testid="nav-about"
              >
                About
              </button>
              <button 
                onClick={scrollToProjects}
                className="text-foreground hover:text-primary transition-colors"
                data-testid="nav-projects"
              >
                Projects
              </button>
              <button 
                onClick={scrollToContact}
                className="text-foreground hover:text-primary transition-colors"
                data-testid="nav-contact"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Benchy Background */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Static Background Image */}
        <div
          className="hero-bg active"
          style={{ backgroundImage: `url(${benchyImage})` }}
        />

        <div className="hero-overlay"></div>
        
        <div className="hero-content text-center text-white px-4 max-w-4xl mx-auto fade-in">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" data-testid="hero-title">
            Welcome to My<br/>
            <span className="text-blue-200">3D Printing Journey</span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed" data-testid="hero-description">
            Discover the fascinating world of additive manufacturing through my personal exploration. 
            From first prints to complex designs, join me as I document every layer of this incredible journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://3dprinting.com/what-is-3d-printing/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-effect hover:bg-white/20 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              data-testid="button-learn-3d-printing"
            >
              Learn About 3D Printing
            </a>
            <Button
              onClick={scrollToProjects}
              className="bg-primary hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              data-testid="button-view-projects"
            >
              View Projects
            </Button>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-white to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8" data-testid="about-title">
              About Me
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>
            
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8" data-testid="about-intro">
                Hey! I'm <span className="font-bold text-primary">Bart</span>, a high school student graduating in 2029 
                who's really into 3D printing.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-lg text-gray-600 leading-relaxed" data-testid="about-scholar">
                      I take my studies seriously and like to apply the same careful approach to my 3D printing projects.
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-lg text-gray-600 leading-relaxed" data-testid="about-passion">
                      3D printing started as a hobby but honestly, I'm pretty hooked on it now. 
                      There's something satisfying about designing something and then actually holding it in your hands.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-lg text-gray-600 leading-relaxed" data-testid="about-hobby">
                      I spend most of my free time working on prints and learning new techniques. 
                      Still figuring things out, but that's part of the fun.
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-lg text-gray-600 leading-relaxed" data-testid="about-commitment">
                      I'll try to keep this site updated with my projects and what I'm learning. 
                      No promises on how often I'll post, but I'll do my best.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                <p className="text-lg text-gray-700 text-center" data-testid="about-quote">
                  Just a student sharing what I'm working on.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-br from-background to-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6" data-testid="projects-title">
              PROJECTS
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="projects-description">
              This is where the magic will happen! Soon, this space will showcase my 3D printing adventures, 
              from beginner benchmarks to advanced creations. Each project will tell a story of learning, 
              experimentation, and the joy of bringing digital designs into the physical world.
            </p>
          </div>
          
          {/* Placeholder Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border" data-testid="project-card-first">
              <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-primary/40 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-4xl text-primary font-bold">?</div>
              </div>
              <h3 className="text-xl font-semibold mb-3" data-testid="project-title-first">First Print Adventure</h3>
              <p className="text-muted-foreground" data-testid="project-description-first">
                Coming soon... My very first 3D print experience awaits!
              </p>
            </Card>
            
            <Card className="bg-card rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border" data-testid="project-card-learning">
              <div className="w-full h-48 bg-gradient-to-br from-accent/40 to-accent/60 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-4xl text-primary font-bold">?</div>
              </div>
              <h3 className="text-xl font-semibold mb-3" data-testid="project-title-learning">Learning Journey</h3>
              <p className="text-muted-foreground" data-testid="project-description-learning">
                The challenges, failures, and breakthroughs that shape every maker.
              </p>
            </Card>
            
            <Card className="bg-card rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border" data-testid="project-card-future">
              <div className="w-full h-48 bg-gradient-to-br from-primary/30 to-secondary/50 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-4xl text-primary font-bold">?</div>
              </div>
              <h3 className="text-xl font-semibold mb-3" data-testid="project-title-future">Future Creations</h3>
              <p className="text-muted-foreground" data-testid="project-description-future">
                Ambitious projects and creative experiments yet to be explored.
              </p>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <div className="inline-block bg-muted rounded-lg p-6">
              <p className="text-lg text-muted-foreground font-medium" data-testid="projects-status">
                🚀 Stay tuned for exciting updates as I begin my 3D printing journey!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <footer id="contact" className="bg-gradient-to-r from-primary to-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4" data-testid="contact-title">Let's Connect</h3>
            <p className="text-blue-100 mb-6 text-lg" data-testid="contact-description">
              Have questions about 3D printing or want to follow my journey? 
              I'd love to hear from you!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <span className="text-blue-200 font-medium">Email:</span>
              <a 
                href="mailto:hongbowang0821@gmail.com" 
                className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg transition-all duration-300 font-medium"
                data-testid="contact-email"
              >
                hongbowang0821@gmail.com
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-blue-400/30">
              <p className="text-blue-200 text-sm" data-testid="contact-copyright">
                © 2024 Bart 3D Prints. Documenting the journey, one layer at a time.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
