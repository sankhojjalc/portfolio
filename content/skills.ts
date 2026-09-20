interface SkillGroup {
  title: string;
  items: string[];
  dot: string;
  label: string;
  chip: string;
}

export const skillGroups: SkillGroup[] = [
  {
    title: "AI & LLMs",
    items: [
      "RAG",
      "AI Agents",
      "Prompt Engineering",
      "Tool Calling",
      "Multimodal LLMs",
      "Document AI & OCR",
      "Conversational AI",
      "LLM APIs",
      "LLM Inference & Serving",
      "Evals & Guardrails",
    ],
    dot: "bg-accent-orange",
    label: "text-orange-700 [[data-theme=dark]_&]:text-accent-orange",
    chip: "border border-orange-500/40 text-orange-700 bg-orange-500/10 [[data-theme=dark]_&]:border-accent-orange/30 [[data-theme=dark]_&]:text-accent-orange [[data-theme=dark]_&]:bg-accent-orange/10",
  },
  {
    title: "AI Stack",
    items: [
      "Python",
      "LangChain",
      "LangGraph",
      "LlamaIndex",
      "Hugging Face Transformers",
      "FastAPI",
      "olmOCR",
      "Pinecone",
      "PostgreSQL",
      "LangSmith",
    ],
    dot: "bg-accent-teal",
    label: "text-cyan-700 [[data-theme=dark]_&]:text-accent-teal",
    chip: "border border-cyan-600/40 text-cyan-700 bg-cyan-600/10 [[data-theme=dark]_&]:border-accent-teal/30 [[data-theme=dark]_&]:text-accent-teal [[data-theme=dark]_&]:bg-accent-teal/10",
  },
  {
    title: "Full-Stack",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "ExpressJS",
      "GraphQL",
      "REST APIs",
      "MongoDB",
      "Tailwind CSS",
    ],
    dot: "bg-green-400",
    label: "text-green-700 [[data-theme=dark]_&]:text-green-400",
    chip: "border border-green-700/40 text-green-800 bg-green-700/10 [[data-theme=dark]_&]:border-green-400/30 [[data-theme=dark]_&]:text-green-400 [[data-theme=dark]_&]:bg-green-400/10",
  },
  {
    title: "Engineering",
    items: [
      "System Design",
      "Tech Leadership",
      "Micro-frontends",
      "Jest & RTL",
      "CI/CD",
      "Web Performance",
      "Accessibility",
      "PWA",
      "SEO",
    ],
    dot: "bg-purple-400",
    label: "text-purple-700 [[data-theme=dark]_&]:text-purple-400",
    chip: "border border-purple-600/40 text-purple-700 bg-purple-600/10 [[data-theme=dark]_&]:border-purple-400/30 [[data-theme=dark]_&]:text-purple-400 [[data-theme=dark]_&]:bg-purple-400/10",
  },
];
