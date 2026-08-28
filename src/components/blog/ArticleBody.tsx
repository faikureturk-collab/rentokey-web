import { Fragment, type ReactNode } from "react";
import type { Block } from "@/lib/blog";

function renderText(text: string): ReactNode {
  return text.split(/\*\*(.+?)\*\*/g).map((part, index) =>
    index % 2 === 1 ? (
      <strong key={index} className="font-bold text-brand-navy">
        {part}
      </strong>
    ) : (
      <Fragment key={index}>{part}</Fragment>
    ),
  );
}

export default function ArticleBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="article-body">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "h2":
            return (
              <h2 key={index} id={block.id} className="scroll-mt-28">
                {block.text}
              </h2>
            );
          case "h3":
            return <h3 key={index}>{block.text}</h3>;
          case "p":
            return <p key={index}>{renderText(block.text)}</p>;
          case "ul":
            return (
              <ul key={index}>
                {block.items.map((item, i) => (
                  <li key={i}>{renderText(item)}</li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={index}>
                {block.items.map((item, i) => (
                  <li key={i}>{renderText(item)}</li>
                ))}
              </ol>
            );
          case "quote":
            return (
              <blockquote key={index}>
                <p>{renderText(block.text)}</p>
              </blockquote>
            );
          case "callout":
            return (
              <aside key={index} className="article-callout">
                <p className="article-callout-title">{block.title}</p>
                <p>{renderText(block.text)}</p>
              </aside>
            );
          case "table":
            return (
              <div key={index} className="article-table-wrap">
                <table>
                  <thead>
                    <tr>
                      {block.head.map((cell) => (
                        <th key={cell}>{cell}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, i) => (
                      <tr key={i}>
                        {row.map((cell, j) => (
                          <td key={j}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
