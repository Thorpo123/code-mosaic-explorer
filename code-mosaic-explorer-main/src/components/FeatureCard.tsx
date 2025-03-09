
import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white group">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="mb-4 p-3 bg-orange-100 rounded-full group-hover:bg-orange-200 transition-colors duration-300">
          {icon}
        </div>
        <h3 className="font-bold text-xl mb-2 group-hover:text-orange-500 transition-colors">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
