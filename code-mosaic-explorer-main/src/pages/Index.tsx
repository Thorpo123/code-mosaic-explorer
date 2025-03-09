
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dumbbell, ShoppingBag, TrendingUp, Trophy, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import FeatureCard from "@/components/FeatureCard";
import ProductCard from "@/components/ProductCard";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Why Athletes Choose APEX</h2>
          <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">Join thousands of athletes who trust our gear for their best performance.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard 
              icon={<Dumbbell className="h-10 w-10 text-orange-500" />}
              title="Premium Quality"
              description="Crafted with the highest quality materials for durability and performance"
            />
            <FeatureCard 
              icon={<TrendingUp className="h-10 w-10 text-orange-500" />}
              title="Performance Driven"
              description="Engineered to enhance your athletic performance with every use"
            />
            <FeatureCard 
              icon={<Trophy className="h-10 w-10 text-orange-500" />}
              title="Athlete Approved"
              description="Tested and approved by professional athletes across multiple sports"
            />
            <FeatureCard 
              icon={<ShoppingBag className="h-10 w-10 text-orange-500" />}
              title="30-Day Guarantee"
              description="Try our products risk-free with our 30-day money-back guarantee"
            />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Featured Collection</h2>
          <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">Discover our latest releases designed for maximum performance and style.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProductCard 
              imageSrc="https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              title="Pro Performance Shoes"
              price="$129.99"
              tag="Bestseller"
            />
            <ProductCard 
              imageSrc="https://images.unsplash.com/photo-1581612129334-551ccd2db865?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              title="Elite Training Shirt"
              price="$49.99"
              tag="New"
            />
            <ProductCard 
              imageSrc="https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              title="Advanced Compression Shorts"
              price="$39.99"
            />
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="px-8 bg-gradient-to-r from-orange-400 to-pink-500 hover:shadow-lg transition-shadow duration-300">
              Browse All Products <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-orange-500 to-pink-600 text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Community Says</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/10 border-none shadow-lg backdrop-blur-sm transform transition-transform hover:scale-105 duration-300">
              <CardContent className="p-8">
                <p className="text-xl italic mb-6">"Since switching to APEX gear, my training has reached new levels. The quality and comfort are unmatched, and I feel more confident during competitions."</p>
                <div className="flex items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                    alt="Sarah Johnson" 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h4 className="font-bold">Sarah Johnson</h4>
                    <p className="text-sm">Professional Athlete</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-white to-orange-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to transform your performance?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">Join thousands of athletes who have already taken their game to the next level with APEX gear.</p>
          <Button size="lg" variant="default" className="px-8 bg-gradient-to-r from-orange-400 to-pink-500 hover:shadow-lg transition-shadow duration-300">
            Shop Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 md:px-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">APEX</h3>
            <p className="text-gray-400">Performance gear for the modern athlete.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-orange-400 transition-colors">Men</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-orange-400 transition-colors">Women</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-orange-400 transition-colors">Equipment</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-orange-400 transition-colors">Accessories</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-orange-400 transition-colors">About</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-orange-400 transition-colors">Careers</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-orange-400 transition-colors">Store Locator</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-orange-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Stay Connected</h4>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for updates and offers.</p>
            <div className="flex">
              <input type="email" placeholder="Your email" className="px-4 py-2 w-full rounded-l-md text-black focus:outline-none focus:ring-2 focus:ring-orange-400" />
              <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-r-md transition-colors">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">© 2023 APEX Sports. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
