import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <nav className={`
      sticky top-0 
      w-full 
      z-100
      px-8 
      py-6 
      transition-all 
      duration-300 
      ease-in-out
      ${isScrolled ? 'bg-black/80 backdrop-blur-sm' : 'bg-black'}
    `}>
      <div className="max-w-7xl mx-auto flex justify-end items-center space-x-12">
        {['Stories', 'About', 'Resources'].map((item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item.toLowerCase())}
            className="
              font-serif 
              italic 
              text-white 
              text-lg
              hover:text-neutral-300
              transition-colors 
              duration-200
              no-underline
              relative
              after:content-['']
              after:absolute
              after:w-0
              after:h-0.5
              after:bg-white
              after:left-0
              after:-bottom-1
              after:transition-all
              after:duration-300
              hover:after:w-full
              bg-transparent
              border-none
              cursor-pointer
              p-0
            "
          >
            {item}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;