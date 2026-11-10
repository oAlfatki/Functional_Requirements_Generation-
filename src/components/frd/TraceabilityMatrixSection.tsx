import type { TraceabilityItem } from "@/types/frd";

interface TraceabilityMatrixSectionProps {
  items: TraceabilityItem[];
}

export function TraceabilityMatrixSection({
  items,
}: TraceabilityMatrixSectionProps) {
  return (
    <section className="avoid-break">
      <h2>10. مصفوفة تتبع المتطلبات (RTM)</h2>
      <table className="standard-table">
        <thead>
          <tr>
            <th style={{ width: "8%" }}>المعرف</th>
            <th style={{ width: "20%" }}>المتطلب الوظيفي</th>
            <th style={{ width: "10%" }}>حالة الاستخدام</th>
            <th style={{ width: "10%" }}>الأولوية</th>
            <th style={{ width: "12%" }}>اعتماديات NFR</th>
            <th style={{ width: "12%" }}>قواعد العمل المرتبطة</th>
            <th style={{ width: "18%" }}>معايير القبول</th>
            <th style={{ width: "10%" }}>حالة التنفيذ</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.reqId}>
              <td>{item.reqId}</td>
              <td>{item.reqTitle}</td>
              <td>{item.useCaseId}</td>
              <td>{item.priority}</td>
              <td>{item.nfrDependency}</td>
              <td>{item.businessRuleRef}</td>
              <td>{item.acceptanceCriteria}</td>
              <td>{item.implementationStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
