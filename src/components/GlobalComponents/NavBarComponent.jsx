import { useState, useEffect, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/', bgColor: 'bg-[#58151E]' },
    { label: 'Team', path: '/team', bgColor: 'bg-[#1E1E1E]' },
    { label: 'Contact', path: '/contact', bgColor: 'bg-[#1E1E1E]' },
    { label: 'Rules', path: '/rules', bgColor: 'bg-[#987734]' },
    { label: 'Event Flow', path: '/event-flow', bgColor: 'bg-[#1E1E1E]' }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  return (
    <nav className="fixed top-0 left-0 right-0 w-full z-50 pt-2 bg-white bg-opacity-50 border border-gray-600 border-opacity-50 shadow-md backdrop-filter backdrop-blur-lg backdrop-saturate-150 backdrop-contrast-75 backdrop-brightness-125">
      <div className="rounded-lg mt-0 w-11/12 mx-auto ">
        <div className="max-w-[90rem] mx-auto px-4">
          <div className="flex justify-between items-center lg:justify-start lg:gap-8">
            {/* Logo */}
            <Link to="/" aria-label="Go to Homepage">
              <motion.img 
                src="sportics.png"
                alt="Olympiad Logo" 
                className="h-12 w-auto sm:h-16 md:h-20 lg:h-16 xl:h-20"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              />
            </Link>

            <div className="flex justify-end items-center lg:flex-1">
              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center">
                {navItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      className={`text-gray-700 px-4 flex items-center justify-center py-1.5 text-sm xl:text-base hover:opacity-90 transition-all duration-300 ease-in-out`}
                      aria-label={item.label}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}

                {/* Register Now Button */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="hidden lg:block"
                >
                  <Link to="/registration" aria-label="Register Now">
                    <button className="bg-[#FF6F00] text-white px-4 py-2 rounded hover:bg-[#d15c02] transition-all duration-300 ease-in-out transform hover:scale-105">
                      Register Now
                    </button>
                  </Link>
                </motion.div>
              </div>


              {/* Mobile menu button */}
              <button
                onClick={toggleMenu}
                className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 focus:outline-none"
                aria-expanded={isMenuOpen}
                aria-label="Toggle menu"
              >
                <span className="sr-only">Open main menu</span>
                <div className="relative w-6 h-6">
                  <motion.span
                    className="absolute w-6 h-0.5 bg-gray-700 transform transition-all duration-300"
                    animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  />
                  <motion.span
                    className="absolute w-6 h-0.5 bg-gray-700 top-2 transition-all duration-300"
                    animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  />
                  <motion.span
                    className="absolute w-6 h-0.5 bg-gray-700 top-4 transform transition-all duration-300"
                    animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  />
                </div>
              </button>
            </div>
          </div>

          {/* Mobile/Tablet Navigation with Animation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="lg:hidden overflow-hidden rounded-md bg-zinc-900 bg-opacity-90 z-50"
              >
                <div className="px-4 py-3 space-y-3">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Link
                        to={item.path}
                        className={`bg-zinc-800 text-white border border-white px-3 py-2 text-base font-medium block text-center hover:opacity-90 transition-all duration-300 ease-in-out`}
                        onClick={() => setIsMenuOpen(false)}
                        aria-label={item.label}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}

                  {/* Register Now Button */}
                  
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                >
                  <Link to="/registration" aria-label="Register Now" className="bg-[#FF6F00] text-white border border-white px-3 py-2 text-base font-medium block text-center hover:opacity-90 transition-all duration-300 ease-in-out">
                      Register Now
                  </Link>
                </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
});

export default Navbar;