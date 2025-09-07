import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 bg-black/70 backdrop-blur-md text-red-400 shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-white">My Portfolio</h1>
        <div className="space-x-6">
          <Link to="/" className="hover:text-white">Home</Link>
          <Link to="/about" className="hover:text-white">About</Link>
          <Link to="/projects" className="hover:text-white">Projects</Link>
          <Link to="/contact" className="hover:text-white">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
