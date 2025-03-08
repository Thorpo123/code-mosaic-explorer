
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

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
        <img src={imageSrc} alt={title} className="w-full h-64 object-cover" />
        
        {tag && (
          <div className="absolute top-3 right-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
            {tag}
          </div>
        )}
        
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
          <Button className="bg-white text-black hover:bg-white/90">
            <ShoppingCart className="mr-2 h-4 w-4" /> Quick View
          </Button>
        </div>
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-bold text-lg mb-1">{title}</h3>
        <div className="flex justify-between items-center">
          <span className="font-bold text-primary">{price}</span>
          <Button variant="ghost" size="sm" className="p-0 hover:bg-transparent">
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
