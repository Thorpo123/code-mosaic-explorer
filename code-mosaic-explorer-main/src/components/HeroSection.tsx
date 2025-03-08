
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative h-[80vh] flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900 z-0"></div>
      
      {/* Abstract shapes */}
      <div className="absolute inset-0 opacity-20 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-purple-500 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 z-10 relative">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Push Your Limits <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Break Barriers
              </span>
            </h1>
            <p className="text-xl mb-8 max-w-lg">
              Cutting-edge sportswear designed for peak performance. 
              Trusted by champions worldwide.
            </p>
            <div className="flex space-x-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 border-0">
                Shop Now
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 mt-12 md:mt-0">
            <div className="relative w-full aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-600/20 backdrop-blur-sm z-10 mix-blend-overlay"></div>
              <img 
                src="/placeholder.svg" 
                alt="Athlete wearing APEX gear" 
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
