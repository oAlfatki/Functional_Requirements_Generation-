import type { IntroductionContent } from "@/types/frd";

interface IntroductionSectionProps {
  content: IntroductionContent;
}

export function IntroductionSection({ content }: IntroductionSectionProps) {
  return (
    <section>
      <h2>1. المقدمة</h2>
      <p>{content.overview}</p>
      <p>{content.coreModulesIntro}</p>
      <ul>
        {content.coreModules.map((module) => (
          <li key={module}>{module}</li>
        ))}
      </ul>
      {content.supportingModulesNote && <p>{content.supportingModulesNote}</p>}
      {content.outOfScope && <p>{content.outOfScope}</p>}

      <h3>أهداف النظام:</h3>
      <ul>
        {content.goals.map((goal) => (
          <li key={goal}>{goal}</li>
        ))}
      </ul>
      <p>
        <strong>الجمهور المستهدف:</strong> {content.targetAudience}
      </p>
      <p>
        <strong>المراجع:</strong> {content.references}
      </p>
    </section>
  );
}
