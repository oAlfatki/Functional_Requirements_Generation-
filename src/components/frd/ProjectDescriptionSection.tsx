interface ProjectDescriptionSectionProps {
  overview: string;
  features: string[];
}

export function ProjectDescriptionSection({
  overview,
  features,
}: ProjectDescriptionSectionProps) {
  return (
    <section>
      <h2>3. وصف المشروع</h2>
      <p>{overview}</p>
      <ul>
        {features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
    </section>
  );
}
