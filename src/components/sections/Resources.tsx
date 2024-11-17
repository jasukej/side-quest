import React from 'react'
import { motion } from 'framer-motion'

// Placeholder data - in a real app, this would likely come from an API or database
const charities = [
  {
    id: 1,
    name: "Downtown Eastside Women's Centre",
    cause: "Women's Support & Safety",
    description: "Providing a safe space and essential services for women and children in Vancouver's Downtown Eastside.",
    learnMoreUrl: "https://dewc.ca",
    donateUrl: "https://dewc.ca/donate",
  },
  {
    id: 2,
    name: "Union Gospel Mission",
    cause: "Homelessness & Recovery",
    description: "Serving meals, providing shelter, and offering recovery programs to transform lives in Vancouver.",
    learnMoreUrl: "https://www.ugm.ca",
    donateUrl: "https://www.ugm.ca/donate",
  },
  {
    id: 3,
    name: "Covenant House Vancouver",
    cause: "Youth Homelessness",
    description: "Supporting youth experiencing homelessness with shelter, food, and counseling services.",
    learnMoreUrl: "https://www.covenanthousebc.org",
    donateUrl: "https://www.covenanthousebc.org/ways-to-give",
  },
]

function Resources() {
  return (
    <div 
      id="resources"
      className="min-h-screen relative bg-red-500"
      style={{
        backgroundImage: `url('/resources-bg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        filter: 'grayscale(100%)'
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative container mx-auto px-4 py-[5rem]">
        <h1 className="text-5xl italic font-serif mb-8 text-center text-white">How You Can Help</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-[4rem]">
          {charities.map((charity, index) => (
            <motion.div
              key={charity.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.1 }}
              className="bg-black backdrop-blur-sm rounded-lg relative border border-neutral-100 shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <h3 className="text-2xl font-serif mb-2">{charity.name}</h3>
                <div className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mb-[1rem]">
                  {charity.cause}
                </div>
                <ol className="text-gray-400 mb-[4rem]">{charity.description}</ol>
                <div className="flex space-x-2 items-center justify-between w-[88%] absolute bottom-[1.5rem]">
                  <a
                    href={charity.learnMoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                  >
                    Learn More →
                  </a>
                  <a
                    href={charity.donateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-4 py-2 rounded-md text-center hover:bg-blue-700 transition-colors duration-300"
                  >
                    Donate Now
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Resources