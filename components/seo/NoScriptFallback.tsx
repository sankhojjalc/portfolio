import { site } from "@/content/site";

export function NoScriptFallback() {
  return (
    <noscript>
      <div className="flex items-center justify-center min-h-screen bg-primary text-text-primary p-4">
        <div className="text-center max-w-md space-y-4">
          <h1 className="text-4xl font-bold">{site.userName}</h1>
          <p className="text-lg">{site.description}</p>
          <p>
            <strong>Email:</strong>{" "}
            <a href={`mailto:${site.email}`} className="hover:underline">
              {site.email}
            </a>
          </p>
          <p>
            <strong>Phone:</strong> {site.phoneDisplay}
          </p>
          <p>
            <a href={site.linkedInUrl} className="hover:underline">
              LinkedIn Profile
            </a>
          </p>
          <p>
            <a href={site.githubUrl} className="hover:underline">
              GitHub Profile
            </a>
          </p>
        </div>
      </div>
    </noscript>
  );
}
