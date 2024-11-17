import React from 'react'

function Navbar() {
  return (
    <div className="flex sticky top-0 justify-around p-4 bg-gray-100 font-serif">
      <a href="#home" className="text-black no-underline hover:text-blue-500">Home</a>
      <a href="#stories" className="text-black no-underline hover:text-blue-500">Stories</a>
      <a href="#about" className="text-black no-underline hover:text-blue-500">About</a>
      <a href="#resources" className="text-black no-underline hover:text-blue-500">Resources</a>
    </div>
  )
}

export default Navbar