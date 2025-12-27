"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Project } from "@/content/site";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <Link href={`/work/${project.slug}`} className="group block">
      <motion.article
        className="space-y-4"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {/* Image Placeholder */}
        <div className="relative overflow-hidden bg-placeholder aspect-[4/3]">
          <div className="absolute inset-0 flex items-center justify-center text-muted text-sm font-medium">
            {String(index + 1).padStart(2, "0")}
          </div>
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300" />
        </div>

        {/* Content */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted">{project.client}</span>
            <span className="text-sm text-muted">{project.year}</span>
          </div>
          <h3 className="text-lg font-medium group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-muted border border-border px-2 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
