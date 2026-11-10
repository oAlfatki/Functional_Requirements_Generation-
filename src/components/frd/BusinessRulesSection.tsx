import type { BusinessRuleGroup } from "@/types/frd";

interface BusinessRulesSectionProps {
  ruleGroups: BusinessRuleGroup[];
}

export function BusinessRulesSection({ ruleGroups }: BusinessRulesSectionProps) {
  return (
    <section>
      <h2>9. قواعد العمل (Business Rules)</h2>
      {ruleGroups.map((group) => (
        <div key={group.moduleName}>
          <h3>{group.moduleName}</h3>
          <ul>
            {group.rules.map((rule) => (
              <li key={rule.id}>
                <strong>{rule.id}:</strong> {rule.description}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
