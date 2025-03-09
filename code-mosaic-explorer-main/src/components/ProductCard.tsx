
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart } from "lucide-react";

interface ProductCardProps {
  imageSrc: string;
  title: string;
  price: string;
  tag?: string;
}

const ProductCard = ({ imageSrc, title, price, tag }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 group">
      <div className="relative">
        <img src={imageSrc} alt={title} className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110" />
        
        {tag && (
          <div className="absolute top-3 right-3 bg-gradient-to-r from-orange-400 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            {tag}
          </div>
        )}
        
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
          <div className="flex flex-col gap-2">
            <Button className="bg-white text-black hover:bg-white/90 transform transition-transform -translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 duration-300">
              <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 transform transition-transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 duration-300">
              <Heart className="mr-2 h-4 w-4" /> Wishlist
            </Button>
          </div>
        </div>
      </div>
      
      <CardContent className="p-4 bg-gradient-to-b from-white to-orange-50">
        <h3 className="font-bold text-lg mb-1">{title}</h3>
        <div className="flex justify-between items-center">
          <span className="font-bold text-orange-600">{price}</span>
          <div className="flex">
            <span className="text-yellow-500">★★★★</span><span className="text-gray-300">★</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
