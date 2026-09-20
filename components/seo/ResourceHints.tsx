"use client";

import ReactDOM from "react-dom";
import { site } from "@/content/site";

export function ResourceHints() {
  ReactDOM.preload(site.avatarPath, { as: "image", fetchPriority: "high" });

  return null;
}
