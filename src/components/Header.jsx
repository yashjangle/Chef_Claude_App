import chefClaude from "../../public/images/Chef Claude Icon.png";

export default function Header() {
  return (
    <header className="head">
      <img src={chefClaude} alt="chefClaude" />
      <h1>Chef Claude</h1>
    </header>
  );
}
