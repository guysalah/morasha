import { useParams, Link } from "react-router-dom";
function HillPage() {
  const parems = useParams();
  return (
    <div>
      {parems.hillId}
      <Link to=".." relative="path">
       גבעות
      </Link>
    </div>
  );
}

export default HillPage;
