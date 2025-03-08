
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dumbbell, ShoppingBag, TrendingUp, Trophy } from "lucide-react";
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
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose APEX</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard 
              icon={<Dumbbell className="h-10 w-10 text-primary" />}
              title="Premium Quality"
              description="Crafted with the highest quality materials for durability and performance"
            />
            <FeatureCard 
              icon={<TrendingUp className="h-10 w-10 text-primary" />}
              title="Performance Driven"
              description="Engineered to enhance your athletic performance with every use"
            />
            <FeatureCard 
              icon={<Trophy className="h-10 w-10 text-primary" />}
              title="Athlete Approved"
              description="Tested and approved by professional athletes across multiple sports"
            />
            <FeatureCard 
              icon={<ShoppingBag className="h-10 w-10 text-primary" />}
              title="30-Day Guarantee"
              description="Try our products risk-free with our 30-day money-back guarantee"
            />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProductCard 
              imageSrc="/placeholder.svg"
              title="Pro Performance Shoes"
              price="$129.99"
              tag="Bestseller"
            />
            <ProductCard 
              imageSrc="/placeholder.svg"
              title="Elite Training Shirt"
              price="$49.99"
              tag="New"
            />
            <ProductCard 
              imageSrc="/placeholder.svg"
              title="Advanced Compression Shorts"
              price="$39.99"
            />
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="px-8">
              View All Products
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 px-4 md:px-8 bg-primary text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Athletes Say</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/10 border-none shadow-lg backdrop-blur-sm">
              <CardContent className="p-8">
                <p className="text-xl italic mb-6">"APEX gear has completely transformed my training. The quality and performance are unmatched in the industry. I won't train with anything else."</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-white/30"></div>
                  <div className="ml-4">
                    <h4 className="font-bold">Michael Johnson</h4>
                    <p className="text-sm">Professional Runner</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 bg-secondary">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to elevate your game?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">Join thousands of athletes who have already taken their performance to the next level with APEX gear.</p>
          <Button size="lg" variant="default" className="px-8">
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
              <li><Link to="/" className="text-gray-400 hover:text-white">Men</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-white">Women</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-white">Equipment</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-white">Accessories</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">About</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-white">Careers</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-white">Store Locator</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Stay Connected</h4>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for updates and offers.</p>
            <div className="flex">
              <input type="email" placeholder="Your email" className="px-4 py-2 w-full rounded-l-md text-black" />
              <button className="bg-primary px-4 py-2 rounded-r-md">Subscribe</button>
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
