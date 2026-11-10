interface ProjectBackgroundSectionProps {
  content: string;
}

export function ProjectBackgroundSection({
  content,
}: ProjectBackgroundSectionProps) {
  return (
    <section>
      <h2>2. خلفية المشروع</h2>
      <p>{content}</p>
    </section>
  );
}
