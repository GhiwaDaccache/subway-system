function ViewManagers({ managercard }) {
  const { name, manager } = managercard;

  if (manager != null) {
    const managerName =  manager.name ;
    const managerId =  manager.id ;
    const managerEmail =  manager.email ;
    

    return (
      <div className="admin-cards flex   justify-around">
        <div className=" flex column  justify-around">
          <div>Manager Name:</div>
          <div>Email:</div>
        </div>
        <div className=" flex column  justify-around">
          <div>{managerName}</div>
          <div>{managerEmail}</div>
        </div>
        <div className=" flex column justify-around">
          <div>Manager ID:</div>
          <div>Station Managed:</div>
        </div>
        <div className=" flex column  justify-around">
          <div>{managerId}</div>
          <div>{name}</div>
        </div>
      </div>
    );
  }
}
export default ViewManagers;
