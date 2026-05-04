"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FeaturesType } from "@/types";
import { ArrowRight } from "lucide-react";
import { 
  IconDeviceDesktop, 
  IconPhone, 
  IconBrandVscode, 
  IconCode, 
  IconBrandFigma, 
  IconCloud, 
  IconRocket,
  IconBrandGithub,
  IconPuzzle,
  IconDatabase,
  IconSettings,
} from '@tabler/icons-react';

interface HeroProps {
  data: FeaturesType
}

// Define decorative icons with increased size
const decorativeIcons = [
  // Top section icons
  { Icon: IconDeviceDesktop, color: "#2563eb", position: "top-10 left-4 md:top-28 md:left-60", rotation: "-rotate-12", size: 32, mobileSize: 26 },
  { Icon: IconPhone, color: "#7c3aed", position: "top-8 right-4 md:top-16 md:right-80", rotation: "rotate-12", size: 28, mobileSize: 24 },
  { Icon: IconRocket, color: "#b91c1c", position: "top-4 left-1/2 -translate-x-1/2", rotation: "rotate-6", size: 28, mobileSize: 24 },
  
  // Mid section icons
  { Icon: IconCode, color: "#d97706", position: "top-40 right-6 md:top-40 md:right-28", rotation: "-rotate-12", size: 30, mobileSize: 24 },
  { Icon: IconCloud, color: "#0891b2", position: "top-52 left-6 md:top-48 md:left-32", rotation: "-rotate-6", size: 28, mobileSize: 24 },
  { Icon: IconBrandGithub, color: "#111827", position: "top-72 left-8 md:top-56 md:left-1/4", rotation: "rotate-12", size: 32, mobileSize: 26 },
  { Icon: IconPuzzle, color: "#0d9488", position: "top-64 right-8 md:top-60 md:right-1/4", rotation: "-rotate-6", size: 30, mobileSize: 24 },
  
  // Bottom section icons
  { Icon: IconBrandVscode, color: "#059669", position: "bottom-24 left-6 md:bottom-40 md:left-40", rotation: "rotate-6", size: 28, mobileSize: 24 },
  { Icon: IconBrandFigma, color: "#db2777", position: "bottom-16 right-6 md:bottom-28 md:right-32", rotation: "rotate-12", size: 30, mobileSize: 26 },
  // { Icon: IconBriefcase, color: "#4f46e5", position: "bottom-4 left-1/2 -translate-x-1/2", rotation: "", size: 28, mobileSize: 24 },
  { Icon: IconDatabase, color: "#9333ea", position: "bottom-36 left-8 md:top-80 md:left-16", rotation: "rotate-12", size: 28, mobileSize: 24 },
  { Icon: IconSettings, color: "#475569", position: "bottom-44 right-8 md:top-72 md:right-20", rotation: "-rotate-12", size: 30, mobileSize: 26 },
  // { Icon: IconCpu, color: "#c2410c", position: "bottom-10 left-10 md:bottom-20 md:left-20", rotation: "rotate-45", size: 28, mobileSize: 24 },
];

const Hero: React.FC<HeroProps> = ({ data }) => {
  const { badge, heading, description, tabs } = data;
  
  return (
    <section className="relative pt-20 pb-16 overflow-hidden">
      {/* Decorative Icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {decorativeIcons.map((item, index) => (
          <div 
            key={index} 
            className={`absolute ${item.position} transform ${item.rotation} transition-all duration-700`}
            style={{ 
              animation: `float ${2 + index % 3}s ease-in-out infinite alternate`,
              animationDelay: `${index * 0.2}s`
            }}
          >
            <item.Icon 
              color={item.color} 
              size={item.mobileSize} 
              opacity={0.65} 
              className={`md:w-${item.size} md:h-${item.size}`} 
              aria-hidden="true"
            />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Text with background protection */}
        <div className="flex flex-col items-center gap-6 text-center max-w-3xl mx-auto relative">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background/70 blur-sm rounded-xl -z-10"></div>
          <Badge variant="outline" className="px-4 py-1.5 text-sm font-medium animate-fade-in">{badge}</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight md:text-5xl lg:text-6xl animate-slide-up px-2">
            {heading}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl animate-fade-in-delayed px-4">
            {description}
          </p>
        </div>
        
        <Tabs defaultValue={tabs[0].value} className="mt-16">
          {/* Tabs Container */}
          <div className="relative mb-8">
            <div className="overflow-x-auto scrollbar-hide pb-2">
              <TabsList className="flex items-center justify-start md:justify-center gap-2 md:gap-6 mx-auto max-w-3xl bg-background/70 backdrop-blur-md p-2 rounded-full">
                {tabs.map((tab) => (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    className="flex items-center gap-2 rounded-full px-3 py-2 md:py-3 text-sm font-semibold transition-all duration-300 hover:bg-muted/80 hover:scale-105 text-muted-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground whitespace-nowrap"
                  >
                    <span className="text-base md:text-lg" aria-hidden="true">{tab.icon}</span> 
                    <span className="text-xs sm:text-sm md:text-md">{tab.label}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </div>
          
          {/* Content Area */}
          <div className="mx-auto max-w-screen-xl rounded-3xl bg-gradient-to-br from-background/90 via-muted/80 to-muted/70 backdrop-blur-md shadow-lg p-4 sm:p-6 lg:p-16 border border-muted/20 transition-all duration-300 hover:shadow-xl">
            {tabs.map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="grid items-center gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16 animate-fade-in"
              >
                <div className="flex flex-col gap-4 md:gap-6 bg-background/40 backdrop-blur-sm p-4 rounded-xl">
                  <Badge variant="outline" className="w-fit bg-background/80 backdrop-blur-sm px-4 py-1.5">
                    {tab.content.badge}
                  </Badge>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight lg:text-4xl">
                    {tab.content.title}
                  </h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    {tab.content.description}
                  </p>
                  <Button 
                    className="mt-2 md:mt-4 w-fit gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-all duration-300 hover:translate-x-1" 
                    size="default"
                    aria-label={tab.content.buttonText}
                    asChild
                  >
                    <Link href="/contact">
                      {tab.content.buttonText}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
                
                <div className="relative h-[250px] sm:h-[300px] md:h-[350px] w-full lg:h-[450px] overflow-hidden rounded-2xl">
                  <div className="absolute inset-0 z-10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Image
                    src={tab.content.imageSrc}
                    alt={tab.content.imageAlt}
                    className="h-full w-full object-cover object-center rounded-2xl transition-transform duration-700 group-hover:scale-105"
                    width={700}
                    height={500}
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="eager"
                  />
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>

      {/* Add global CSS keyframes for animations */}
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0); }
          100% { transform: translateY(-5px) rotate(var(--rotation)); }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-in-out;
        }
        
        .animate-fade-in-delayed {
          animation: fadeIn 0.8s ease-in-out 0.3s both;
        }
        
        .animate-slide-up {
          animation: slideUp 0.8s ease-out;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Hero;