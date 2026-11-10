import type { DataEntity } from "@/types/frd";

interface DataDictionarySectionProps {
  entities: DataEntity[];
}

export function DataDictionarySection({ entities }: DataDictionarySectionProps) {
  return (
    <section>
      <h2>8. قاموس البيانات / البيانات المرجعية</h2>

      {entities.map((entity) => (
        <div key={entity.entityName}>
          <h3>جدول بيانات: {entity.entityName}</h3>
          <table className="standard-table avoid-break">
            <thead>
              <tr>
                <th style={{ width: "25%" }}>اسم الحقل</th>
                <th style={{ width: "15%" }}>نوع البيانات</th>
                <th style={{ width: "15%" }}>إجباري</th>
                <th style={{ width: "45%" }}>الملاحظات والشروط</th>
              </tr>
            </thead>
            <tbody>
              {entity.fields.map((field) => (
                <tr key={`${entity.entityName}-${field.name}`}>
                  <td>{field.name}</td>
                  <td>{field.type}</td>
                  <td>{field.required ? "نعم" : "لا"}</td>
                  <td>{field.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </section>
  );
}
