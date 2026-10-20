import logo from "../assets/logo.svg";

export default function Logo({ className = "" }) {
  return <img className={`logo ${className}`} src={logo} alt="" width="210" height="194" />;
}
