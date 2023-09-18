"use client";

import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  MessageSquare,
  Music2Icon,
  ImageIcon,
  Code2Icon,
  VideoIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const tools = [
  {
    label: "Chat",
    icon: MessageSquare,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    href: "/chat",
  },
  {
    label: "Image Generator",
    icon: ImageIcon,
    color: "text-red-700",
    bgColor: "bg-red-700/10",
    href: "/image",
  },
  {
    label: "Code Generator",
    icon: Code2Icon,
    color: "text-emerald-700",
    bgColor: "bg-emerald-700/10",
    href: "/code",
  },
  {
    label: "Music Generator",
    icon: Music2Icon,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    href: "/music",
  },
  {
    label: "Video Generator",
    icon: VideoIcon,
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
    href: "/video",
  },
];
const DashboardPage = () => {
  const router = useRouter();
  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Unleash AI Magic – Forge Creative Adventures
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Elevate Your Insights - Embark on an AI-Powered Journey
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className="p-4 border-black/5 flex items-center justify-between 
            hover:shadow-md transition cursor-pointer"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>
              <div className="font-semibold">{tool.label}</div>
            </div>

            <ArrowRight className="w-5 h-5 " />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
