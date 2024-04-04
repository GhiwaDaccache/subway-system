function ReviewCard({review}) {
  const {rating,description,ride_id,user}=review;

  const userName=user ? user.name : 'no username'
    return (
      <div className="admin-cards flex   justify-around">
        <div className=" flex column  justify-around">
          <div>Passenger Name:</div>
          <div>Ride Number:</div>
          
        </div>
        <div className=" flex column  justify-around">
          <div>{userName}</div>
          <div>{ride_id}</div>
          
        </div>
        <div className=" flex column justify-around">
        <div>Description:</div>
          <div>Rating:</div>
          
        </div>
        <div className=" flex column  justify-around">
        <div>{description}</div>
          <div>{rating}</div>
         
        </div>
      </div>
    );
  }
  export default ReviewCard;
  