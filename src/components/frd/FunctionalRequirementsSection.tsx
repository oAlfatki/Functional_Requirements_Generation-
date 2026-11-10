import type { FunctionalRequirement } from "@/types/frd";

interface FunctionalRequirementsSectionProps {
  requirements: FunctionalRequirement[];
}

export function FunctionalRequirementsSection({
  requirements,
}: FunctionalRequirementsSectionProps) {
  return (
    <section className="avoid-break">
      <h2>4. المتطلبات الوظيفية</h2>
      <table className="standard-table">
        <thead>
          <tr>
            <th style={{ width: "12%" }}>معرف المتطلب</th>
            <th style={{ width: "30%" }}>الوصف</th>
            <th style={{ width: "10%" }}>الأولوية</th>
            <th style={{ width: "15%" }}>دور المستخدم / المباشِر</th>
            <th style={{ width: "33%" }}>معايير القبول</th>
          </tr>
        </thead>
        <tbody>
          {requirements.map((req) => (
            <tr key={req.id}>
              <td>
                <strong>{req.id}</strong>
              </td>
              <td>{req.description}</td>
              <td>{req.priority}</td>
              <td>{req.userRole}</td>
              <td>{req.acceptanceCriteria}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
