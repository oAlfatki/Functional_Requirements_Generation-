import type { NonFunctionalRequirement } from "@/types/frd";

interface NonFunctionalRequirementsSectionProps {
  requirements: NonFunctionalRequirement[];
}

export function NonFunctionalRequirementsSection({
  requirements,
}: NonFunctionalRequirementsSectionProps) {
  return (
    <section>
      <h2>5. المتطلبات غير الوظيفية</h2>
      <table className="standard-table">
        <thead>
          <tr>
            <th style={{ width: "10%" }}>المعرف</th>
            <th style={{ width: "15%" }}>التصنيف</th>
            <th style={{ width: "25%" }}>الوصف</th>
            <th style={{ width: "8%" }}>الأولوية</th>
            <th style={{ width: "17%" }}>طريقة التحقق / الاختبار</th>
            <th style={{ width: "15%" }}>معايير القبول</th>
            <th style={{ width: "10%" }}>الاعتماديات</th>
          </tr>
        </thead>
        <tbody>
          {requirements.map((req) => (
            <tr key={req.id}>
              <td>
                <strong>{req.id}</strong>
              </td>
              <td>{req.category}</td>
              <td>{req.description}</td>
              <td>{req.priority}</td>
              <td>{req.verificationMethod}</td>
              <td>{req.acceptanceCriteria}</td>
              <td>{req.dependencies}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
