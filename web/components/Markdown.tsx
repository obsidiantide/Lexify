import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

/** Lesson text renderer (GitHub-flavoured: tables, strikethrough). react-markdown ignores raw HTML, so admin content can't inject scripts. */
export function Markdown({ children }: { children: string }) {
  return (
    <div className="prose-lx">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{children}</ReactMarkdown>
    </div>
  );
}
