export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-sm bg-white sticky top-0">
      <h1 className="font-bold text-blue-600">
        Simple Web Solutions
      </h1>

      <div className="hidden md:flex gap-6 text-sm">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Portfolio</a>
        <a href="#">Contact</a>
      </div>

      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
        Get Quote
      </button>
    </nav>
  );
}
