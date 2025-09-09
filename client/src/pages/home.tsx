import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// Import the benchy image
import benchyImage from "@assets/image_1757382298644.png";

export default function Home() {

  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      const offsetTop = element.offsetTop - 70; // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const scrollToProjects = () => smoothScrollTo('projects');
  const scrollToContact = () => smoothScrollTo('contact');
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
