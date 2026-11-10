import type { DocumentMetadata } from "@/types/frd";

interface DocHeaderProps {
  metadata: DocumentMetadata;
}

export function DocHeader({ metadata }: DocHeaderProps) {
  return (
    <div className="doc-cover-page">
      <div className="doc-cover-title">
        <h1>{metadata.title}</h1>
      </div>
      
      <div className="doc-cover-info">
        <div className="doc-cover-row">
          <span className="doc-cover-label">المجال:</span>
          <span className="doc-cover-value">{metadata.domain}</span>
        </div>
        <div className="doc-cover-row">
          <span className="doc-cover-label">المشروع:</span>
          <span className="doc-cover-value">{metadata.projectName}</span>
        </div>
      </div>
      
      <div className="doc-cover-author">
        <div className="doc-cover-author-label">إعداد:</div>
        <div className="doc-cover-author-name">{metadata.author}</div>
      </div>
    </div>
  );
}
