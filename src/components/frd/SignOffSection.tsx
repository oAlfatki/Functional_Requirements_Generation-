import type { SignOff } from "@/types/frd";

interface SignOffSectionProps {
  signOffs: SignOff[];
}

export function SignOffSection({ signOffs }: SignOffSectionProps) {
  return (
    <section className="avoid-break">
      <h2>12. الاعتماد والتوقيعات</h2>
      <table className="standard-table" style={{ marginTop: "20px" }}>
        <thead>
          <tr>
            <th style={{ width: "35%" }}>صاحب المصلحة / المسؤول</th>
            <th style={{ width: "40%" }}>التوقيع والمسمى الوظيفي</th>
            <th style={{ width: "25%" }}>التاريخ</th>
          </tr>
        </thead>
        <tbody>
          {signOffs.map((signOff) => (
            <tr key={signOff.stakeholder} style={{ height: "45px" }}>
              <td>{signOff.stakeholder}</td>
              <td>{signOff.signatureAndTitle}</td>
              <td>{signOff.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
