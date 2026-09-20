import { writingPosts } from "@/content/writing";
import { WritingCard } from "@/components/cards/WritingCard";
import { EmptyState } from "@/components/ui/EmptyState";
import { Section } from "@/components/ui/Section";

export function Writing() {
  return (
    <Section
      id="writing"
      title="Writing"
      subtitle="Notes on LLMs, agents, and applied AI engineering."
      tinted
    >
      {writingPosts.length === 0 ? (
        <EmptyState message="Articles coming soon." file="content/writing.ts" />
      ) : (
        <div className="space-y-6">
          {writingPosts.map((post) => (
            <WritingCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </Section>
  );
}
