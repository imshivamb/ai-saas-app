"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import {
  Check,
  MessageSquare,
  Music2Icon,
  ImageIcon,
  Code2Icon,
  VideoIcon,
  ZapIcon,
} from "lucide-react";
import { useProModal } from "@/hooks/use-pro-model";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import axios from "axios";
import toast from "react-hot-toast";

const tools = [
  {
    label: "Chat",
    icon: MessageSquare,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    label: "Image Generator",
    icon: ImageIcon,
    color: "text-red-700",
    bgColor: "bg-red-700/10",
  },
  {
    label: "Code Generator",
    icon: Code2Icon,
    color: "text-emerald-700",
    bgColor: "bg-emerald-700/10",
  },
  {
    label: "Music Generator",
    icon: Music2Icon,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
  {
    label: "Video Generator",
    icon: VideoIcon,
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
  },
];

const ProModal = () => {
  const proModal = useProModal();
  const [loading, setLoading] = useState(false);

  const onSubscribe = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/stripe");

      window.location.href = response.data.url;
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };
  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex justify-center items-center flex-col gap-y-4 pb-2">
            <div className="flex items-center gap-x-2 font-bold py-1">
              Upgrade to Genie
              <Badge variant="premium" className="uppercase text-sm py-1">
                pro
              </Badge>
            </div>
          </DialogTitle>
          <DialogDescription className="text-center pt-2 space-y-2 text-zinc-900 font-medium">
            {tools.map((tool) => (
              <Card
                key={tool.label}
                className="flex justify-between items-center border-black/5 p-3"
              >
                <div className="flex items-center gap-x-4">
                  <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                    <tool.icon className={cn("w-6 h-6", tool.color)} />
                  </div>
                  <div className="font-semibold text-sm">{tool.label}</div>
                </div>
                <Check className="text-primary w-5 h-5" />
              </Card>
            ))}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            disabled={loading}
            onClick={onSubscribe}
            size="lg"
            variant="premium"
            className="w-full"
          >
            Upgrade
            <ZapIcon className="w-4 h-4 ml-2 fill-white" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProModal;
