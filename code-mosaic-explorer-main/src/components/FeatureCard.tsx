
import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="mb-4 p-3 bg-primary/10 rounded-full">
          {icon}
        </div>
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
