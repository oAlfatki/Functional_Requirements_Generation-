interface TableOfContentsProps {
  items: string[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  return (
    <div className="toc-section">
      <div className="toc-title">جدول المحتويات</div>
      <ul className="toc-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
