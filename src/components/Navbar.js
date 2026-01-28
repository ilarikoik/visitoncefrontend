import Button from "./Button";

export default function Navbar({ ipAddress }) {
  return (
    <nav className="bg-slate-800 p-4">
      <h1 className="text-2xl font-bold text-white">{ipAddress} Navbar</h1>
    </nav>
  );
}
