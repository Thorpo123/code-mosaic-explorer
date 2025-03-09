
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative h-[90vh] flex items-center overflow-hidden">
      {/* Background with warmer gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-pink-500 z-0"></div>
      
      {/* Abstract shapes with warmer colors */}
      <div className="absolute inset-0 opacity-30 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-yellow-300 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-orange-300 blur-3xl animate-pulse" style={{animationDelay: "1s"}}></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 z-10 relative">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight animate-fade-in">
              Elevate Your Game <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-white">
                Reach New Heights
              </span>
            </h1>
            <p className="text-xl mb-8 max-w-lg">
              Premium sportswear that moves with you. 
              Designed by athletes, for athletes.
            </p>
            <div className="flex space-x-4">
              <Button size="lg" className="bg-gradient-to-r from-yellow-400 to-orange-500 border-0 hover:shadow-lg transition-shadow duration-300">
                Shop Collection
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Our Story
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 mt-12 md:mt-0">
            <div className="relative w-full aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl transform transition-transform hover:scale-105 duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-pink-600/20 backdrop-blur-sm z-10 mix-blend-overlay"></div>
              <img 
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Athlete in action wearing APEX gear" 
                className="w-full h-full object-cover z-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
