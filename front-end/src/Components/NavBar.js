import ScrollDot from "./ScrollDot";

function NavBar() {
  return (
    <div>
      <nav className="bg-gray-800 p-4 flex fixed w-screen">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-20">
          <a href="#intro" className="text-white hover:border-b-2 hover:border-white hover:py-1">Home</a>
            <a href="#section-about" className="text-white hover:border-b-2 hover:border-white hover:py-1">About</a>
            <a href="#section-experience" className="text-white hover:border-b-2 hover:border-white hover:py-1">Experience</a>
            <a href="#section-contact" className="text-white hover:border-b-2 hover:border-white hover:py-1">Contact</a>
          </div>
        </div>
      </nav>
      <ScrollDot />
    </div>
  );
}

export default NavBar;
