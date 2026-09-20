"use client";

import { Calendar, Clock, ExternalLink } from "lucide-react";
import { gaEvent } from "@/lib/analytics/gaEvent";
import { gaCategories } from "@/content/ga-categories";
import type { WritingPost } from "@/content/writing";

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });

export function WritingCard({ post }: { post: WritingPost }) {
  return (
    <div className="glass p-6 hover:bg-white/15 transition-all duration-300 group">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2 group-hover:text-accent-orange transition">
            {post.title}
          </h3>
          <p className="text-text-secondary mb-4 text-sm leading-relaxed">{post.excerpt}</p>

          <div className="flex items-center gap-4 text-xs text-text-secondary mb-3">
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>{formatDate(post.date)}</span>
            </div>
            {post.readTimeMinutes && (
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>{post.readTimeMinutes} min read</span>
              </div>
            )}
          </div>

          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs rounded-full bg-accent-orange/10 text-accent-orange border border-accent-orange/30"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {post.externalUrl && (
          <a
            href={post.externalUrl}
            onClick={() =>
              gaEvent({
                category: gaCategories.viewWriting,
                action: "Article Clicked",
                label: post.title,
              })
            }
            className="flex-shrink-0 p-2 text-accent-orange hover:bg-white/10 rounded-lg transition-all duration-300 group-hover:scale-110"
            aria-label="Read article"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        )}
      </div>
    </div>
  );
}
