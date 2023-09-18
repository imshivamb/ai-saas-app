"use client";

import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  ImageIcon,
  Code2Icon,
  MessageSquare,
  VideoIcon,
  Music2Icon,
  SettingsIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Router } from "next/router";
import { number } from "zod";
import { FreeCounter } from "./FreeCounter";

const monteserrat = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Chat",
    icon: MessageSquare,
    href: "/chat",
    color: "text-green-500",
  },
  {
    label: "Code Generator",
    icon: Code2Icon,
    href: "/code",
    color: "text-emerald-700",
  },
  {
    label: "Image Generator",
    icon: ImageIcon,
    href: "/image",
    color: "text-red-700",
  },
  {
    label: "Video Generator",
    icon: VideoIcon,
    href: "/video",
    color: "text-orange-700",
  },
  {
    label: "Music Generator",
    icon: Music2Icon,
    href: "/music",
    color: "text-yellow-500",
  },
  {
    label: "Settings",
    icon: SettingsIcon,
    href: "/settings",
  },
];

interface SidebarProps {
  apiLimitCount: number;
  isPro: boolean;
}
const Sidebar = ({ apiLimitCount = 0, isPro = false }: SidebarProps) => {
  const pathName = usePathname();
  return (
    <div
      className="space-y-4 py-4 flex flex-col h-full
        bg-[#111827] text-white"
    >
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">
            <Image fill alt="Logo" src="/logo.png" />
          </div>
          <h1 className={cn("text-2xl font-bold", monteserrat.className)}>
            Genie
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                pathName === route.href
                  ? "text-white bg-white/10"
                  : "text-zinc-400"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <FreeCounter apiLimitCount={apiLimitCount} isPro={isPro} />
    </div>
  );
};

export default Sidebar;
