import type { Assumption, Dependency } from "@/types/frd";

interface AssumptionsDependenciesSectionProps {
  assumptions: Assumption[];
  dependencies: Dependency[];
}

export function AssumptionsDependenciesSection({
  assumptions,
  dependencies,
}: AssumptionsDependenciesSectionProps) {
  return (
    <section className="avoid-break">
      <h2>11. الافتراضات والاعتماديات</h2>

      <h3>الافتراضات</h3>
      <table className="standard-table">
        <thead>
          <tr>
            <th style={{ width: "20%" }}>معرف الافتراض</th>
            <th style={{ width: "45%" }}>الافتراض</th>
            <th style={{ width: "35%" }}>الأثر المترتب في حال عدم صحته</th>
          </tr>
        </thead>
        <tbody>
          {assumptions.map((assumption) => (
            <tr key={assumption.id}>
              <td>
                <strong>{assumption.id}</strong>
              </td>
              <td>{assumption.description}</td>
              <td>{assumption.impactIfInvalid}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>الاعتماديات</h3>
      <table className="standard-table">
        <thead>
          <tr>
            <th style={{ width: "20%" }}>معرف الاعتمادية</th>
            <th style={{ width: "35%" }}>الاعتمادية</th>
            <th style={{ width: "20%" }}>الوحدة / المتطلب المرتبط</th>
            <th style={{ width: "25%" }}>الأثر عند عدم التحقق</th>
          </tr>
        </thead>
        <tbody>
          {dependencies.map((dependency) => (
            <tr key={dependency.id}>
              <td>
                <strong>{dependency.id}</strong>
              </td>
              <td>{dependency.description}</td>
              <td>{dependency.relatedModule}</td>
              <td>{dependency.impactIfNotMet}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
