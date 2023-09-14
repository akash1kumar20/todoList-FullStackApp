const Update = () => {
  return (
    <div className="updateDetails">
      <form>
        <input
          type="text"
          placeholder="Type Here....."
          required
          className="inputAreaUpdate"
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Update;
