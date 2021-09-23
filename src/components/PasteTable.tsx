import styles from "../css/PasteTable.module.css";
import { IPaste } from "./IPaste";
// import { Link } from "react-router-dom";

interface PasteTableProps {
  pastes: IPaste[];
}

export default function PasteTable({ pastes }: PasteTableProps): JSX.Element {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th className={styles.rowTitle}>Public Pastes</th>
          </tr>
        </thead>
        <tbody>
          {pastes.map((paste) => (
            <tr key={paste.paste_id}>
              {/* <Link to={`/pastes/${paste.paste_id}`}> */}
              <td>{paste.title}</td>
              {/* </Link> */}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
