import React from "react";
import { cn } from "@/lib/utils";
import { Code, Database, Palette, Globe } from "lucide-react";

const getTagIcon = (tag: string) => {
  const t = tag.toLowerCase();
  if (t.includes("react") || t.includes("jsx")) return <Code className="w-3 h-3" aria-hidden="true" />;
  if (t.includes("django") || t.includes("drf") || t.includes("python") || t.includes("fastapi"))
    return <Database className="w-3 h-3" aria-hidden="true" />;
  if (t.includes("css") || t.includes("tailwind") || t.includes("shad cn") || t.includes("framer motion"))
    return <Palette className="w-3 h-3" aria-hidden="true" />;
  if (t.includes("html") || t.includes("js")) return <Globe className="w-3 h-3" aria-hidden="true" />;
  if (t.includes("postgres") || t.includes("mongodb")) return <Database className="w-3 h-3" aria-hidden="true" />;
  if (t.includes("firebase") || t.includes("google auth")) return <Globe className="w-3 h-3" aria-hidden="true" />;
  return <Code className="w-3 h-3" aria-hidden="true" />;
};

const getTagColor = (tag: string) => {
  const t = tag.toLowerCase();
  if (t.includes("react") || t.includes("jsx")) return "bg-blue-500/10 text-blue-400 border-blue-500/20";
  if (t.includes("django") || t.includes("drf") || t.includes("python") || t.includes("fastapi"))
    return "bg-green-500/10 text-green-400 border-green-500/20";
  if (t.includes("postgres")) return "bg-indigo-500/10 text-indigo-400 border-indigo-500/20";
  if (t.includes("mongodb")) return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
  if (t.includes("tailwind") || t.includes("shad cn")) return "bg-cyan-500/10 text-cyan-400 border-cyan-500/20";
  if (t.includes("framer motion")) return "bg-pink-500/10 text-pink-400 border-pink-500/20";
  if (t.includes("firebase")) return "bg-orange-500/10 text-orange-400 border-orange-500/20";
  if (t.includes("html") || t.includes("js")) return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";
  if (t.includes("google auth")) return "bg-red-500/10 text-red-400 border-red-500/20";
  if (t.includes("gemini")) return "bg-purple-500/10 text-purple-400 border-purple-500/20";
  if (t.includes("editor js")) return "bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/20";
  if (t.includes("react toastify")) return "bg-teal-500/10 text-teal-400 border-teal-500/20";
  return "bg-gray-500/10 text-gray-400 border-gray-500/20";
};

interface TagBadgeProps {
  tag: string;
}

const TagBadge = ({ tag }: TagBadgeProps) => {
  return (
    <span
      className={cn(
        "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all duration-200",
        "hover:scale-105",
        getTagColor(tag)
      )}
    >
      {getTagIcon(tag)}
      {tag}
    </span>
  );
};

export default TagBadge;
