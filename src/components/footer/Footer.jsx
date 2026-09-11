const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12">
          
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center">
              <img 
                src="/logo-text.png" 
                alt="Dev Stack Logo" 
                className="h-8 object-contain" 
              />
            </div>
            
            <p className="text-gray-500 text-sm max-w-sm leading-relaxed">
              Curated tools, technologies, and resources for developers building modern software.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2 text-sm font-semibold text-gray-700">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-purple-600 transition-colors">
                GitHub
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-purple-600 transition-colors">
                Twitter
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-purple-600 transition-colors">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-gray-900 tracking-wider uppercase">Product</h4>
            <ul className="space-y-2 text-sm text-gray-500 font-medium">
              <li><a href="#home" className="hover:text-pink-900 transition-colors">Home</a></li>
              <li><a href="#technologies" className="hover:text-pink-900 transition-colors">Technologies</a></li>
              <li><a href="#projects" className="hover:text-pink-900 transition-colors">Projects</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-pink-900 tracking-wider uppercase">Company</h4>
            <ul className="space-y-2 text-sm text-pink-500 font-medium">
              <li><a href="#about" className="hover:text-gray-900 transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a></li>
              <li><a href="#careers" className="hover:text-gray-900 transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-gray-900 tracking-wider uppercase">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-500 font-medium">
              <li><a href="#privacy" className="hover:text-gray-900 transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-gray-900 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar Area */}
        <div className="border-t border-gray-100 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 font-medium">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-gray-600 transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-gray-600 transition-colors">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;