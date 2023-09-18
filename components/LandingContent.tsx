"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const testimonials = [
  {
    name: "Shivam",
    avatar: "S",
    title: "Web Developer",
    description: "This is the best AI tool I have used for my work!",
  },
  {
    name: "Glenn",
    avatar: "G",
    title: "Web Developer",
    description: "This is the best AI tool I have used for my work!",
  },
  {
    name: "Adrian",
    avatar: "A",
    title: "Web Developer",
    description: "This is the best AI tool I have used for my work!",
  },
  {
    name: "Matthew",
    avatar: "M",
    title: "Web Developer",
    description: "This is the best AI tool I have used for my work!",
  },
];

const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card
            key={item.title}
            className="bg-[#1a1c34] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-slate-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LandingContent;
