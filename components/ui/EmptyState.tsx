interface EmptyStateProps {
  message: string;
  file: string;
}

export function EmptyState({ message, file }: EmptyStateProps) {
  return (
    <div className="glass p-12 text-center">
      <p className="text-text-secondary text-lg">
        {message} Add entries in{" "}
        <code className="bg-white/10 px-3 py-1.5 rounded text-accent-orange font-mono">{file}</code>.
      </p>
    </div>
  );
}
