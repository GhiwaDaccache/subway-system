import ViewBranches from "./components/branch-card";
import "./index.css";

function EditBranches() {
  return (
    <div className="admin-container flex column">
      
 
      <div className="admin-view flex column">
        <ViewBranches/>
 

      </div>
      
    </div>
  );
}
export default EditBranches;