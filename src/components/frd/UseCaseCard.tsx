import type { UseCase } from "@/types/frd";

interface UseCaseCardProps {
  useCase: UseCase;
}

export function UseCaseCard({ useCase }: UseCaseCardProps) {
  return (
    <div className="use-case-card avoid-break">
      <h3>
        {useCase.id}: {useCase.title}
      </h3>
      <div className="use-case-row">
        <span className="use-case-label">المستخدم (Actor):</span>{" "}
        {useCase.primaryActor}
      </div>
      {useCase.goal && (
        <div className="use-case-row">
          <span className="use-case-label">الهدف:</span> {useCase.goal}
        </div>
      )}
      {useCase.preconditions && (
        <div className="use-case-row">
          <span className="use-case-label">الشروط المسبقة:</span>{" "}
          {useCase.preconditions}
        </div>
      )}
      {useCase.trigger && (
        <div className="use-case-row">
          <span className="use-case-label">المشغّل (Trigger):</span>{" "}
          {useCase.trigger}
        </div>
      )}
      <div className="use-case-row">
        <span className="use-case-label">المسار الأساسي:</span>
        <ol>
          {useCase.mainFlow.map((step, index) => (
            <li key={`${useCase.id}-step-${index}`}>{step}</li>
          ))}
        </ol>
      </div>
      {useCase.alternativeFlow && (
        <div className="use-case-row">
          <span className="use-case-label">المسار البديل:</span>{" "}
          {useCase.alternativeFlow}
        </div>
      )}
      {useCase.postconditions && (
        <div className="use-case-row">
          <span className="use-case-label">الشروط اللاحقة:</span>{" "}
          {useCase.postconditions}
        </div>
      )}
      {useCase.relatedRequirement && (
        <div className="use-case-row">
          <span className="use-case-label">المتطلب المرتبط:</span>{" "}
          {useCase.relatedRequirement}
        </div>
      )}
      {useCase.relatedData && (
        <div className="use-case-row">
          <span className="use-case-label">البيانات ذات الصلة:</span>{" "}
          {useCase.relatedData}
        </div>
      )}
    </div>
  );
}
