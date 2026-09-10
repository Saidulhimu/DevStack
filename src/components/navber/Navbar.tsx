const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <div className="flex lg:hidden">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><a href="">Home</a></li>
                <li><a href="">Technologies</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <img src="/logo-text.png" alt="Dev Stack Logo" className="h-8 w-auto object-contain" />
          </div>

          <div className="hidden lg:flex items-center gap-8 font-medium text-sm text-gray-600">
            <a href="" className="hover:text-pink-600">Home</a>
            <a href="" className="hover:text-pink-600">Technologies</a>
            <a href="" className="hover:text-pink-600">Projects</a>
            <a href="" className="hover:text-pink-600">About</a>
            <a href="" className="hover:text-pink-600">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <button className="text-sm font-semibold text-gray-700 px-2 py-1 hover:text-pink-600">
              Sign In
            </button>
            <button className="btn btn-sm brand-gradient-bg text-white border-none rounded-full px-5 font-medium shadow-sm">
              Sign Up
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;