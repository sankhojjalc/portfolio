# Hi there! 👋 I'm Sankhojjal Chatterjee 👨‍💻

<p align="left"> <img src="https://komarev.com/ghpvc/?username=sankhojjalc&color=brightgreen&base=1234&style=for-the-badge" alt="sankhojjal chatterjee" /> </p>

**AI Engineer** building LLM applications, RAG pipelines and AI agents, on top of a production full-stack foundation in React, Next.js and TypeScript and 9+ years of software engineering. I care as much about latency, security, testing and user experience as I do about model quality.

Currently a **Senior Software Engineer at Sber Bank**, based in Bangalore, India.

## 🤖 What I Work On

- **AI-powered Compliance Copilot:** designing a Cross-Border Payments & Compliance Copilot for internal banking operations, combining Generative AI, RAG and agentic workflows (LangGraph) to assist teams with transaction investigations, regulatory-policy discovery, document analysis and case resolution.
- **Production RAG for banking:** built a hybrid RAG pipeline (dense embeddings, BM25 keyword retrieval, metadata filtering and reranking) across banking policies, regulatory documents and internal knowledge sources, with human-in-the-loop review and Keycloak/RBAC-gated tool access for sensitive actions.
- **AI guardrails & observability:** shipped structured Pydantic schemas, prompt-injection protection, context isolation and audit logging, and track retrieval relevance, answer faithfulness, tool-call accuracy and latency in production.
- **AI-assisted code review:** architected an internal LLM-powered PR review system that flags common issues before human review, cutting average PR turnaround time by ~40%.

Earlier, at Publicis Sapient, I built an internal RAG-powered knowledge assistant for a UK e-commerce platform serving 20M+ monthly active users, covering document ingestion, chunking, embedding-based retrieval and prompt design.

## 🚀 Technologies & Tools

| Area             | Skills                                                                                                                                                         |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **AI & LLMs**    | RAG, AI agents, agentic workflows, prompt engineering, tool calling, LLM APIs, human-in-the-loop workflows, evals & guardrails                                 |
| **AI stack**     | Python, FastAPI, LangGraph, hybrid search (dense embeddings + BM25), reranking, Pydantic, Keycloak / RBAC, PostgreSQL                                          |
| **Full-stack**   | React, Next.js, TypeScript, JavaScript, Node.js, Express.js, GraphQL, REST APIs, MongoDB, Tailwind CSS                                                         |
| **Engineering**  | System design, tech leadership, Jest & RTL, CI/CD, web performance, accessibility, PWA, SEO                                                                    |
| **Data & cloud** | MySQL, Cassandra, Redis, AWS, Firebase                                                                                                                         |

## 💡 Currently Exploring

Deepening evaluation and observability practices for agentic systems in production — retrieval relevance, answer faithfulness, tool-call accuracy — and scaling guardrail patterns for LLMs in regulated environments.

## 📫 Let's Connect!

- **GitHub :** [sankhojjalc](https://github.com/sankhojjalc)
- **LinkedIn :** [sankhojjalchatterjee](https://www.linkedin.com/in/sankhojjalchatterjee/)
- **Portfolio:** [sankhojjal-dev.web.app](https://sankhojjal-dev.web.app/)

Feel free to reach out if you're interested in collaborating on AI products or simply want to chat about LLMs, RAG and agents. Let's build something great together! ✨

## 🧩 About This Repository

This repo is the source of my portfolio: a statically exported **Next.js 16** site (App Router, TypeScript, Tailwind CSS, Framer Motion, `next-themes`) hosted on **Firebase Hosting** and deployed with **GitHub Actions**.

**Quick start** (Node 22, see `.nvmrc`):

```bash
yarn install
yarn dev        # http://localhost:3000
yarn check      # lint + typecheck + tests
yarn build      # static export to out/
```