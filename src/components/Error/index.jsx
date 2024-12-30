import notFoundImage from "../../assets/404.svg"
function Error() {
  return (
    <div className="error-page">
      <h2>Oups...</h2>
      <img src={notFoundImage} alt="not-found" ></img>
      <h2>Oups 🙈 this page doesn't exist</h2>
    </div>
  );
}

export default Error;
