import type { UseCase } from "@/types/frd";
import { UseCaseCard } from "./UseCaseCard";

interface UseCasesSectionProps {
  useCases: UseCase[];
}

export function UseCasesSection({ useCases }: UseCasesSectionProps) {
  return (
    <section>
      <h2>6. حالات الاستخدام / سيناريوهات المستخدم</h2>
      {useCases.map((useCase) => (
        <UseCaseCard key={useCase.id} useCase={useCase} />
      ))}
    </section>
  );
}
