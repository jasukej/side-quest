import { motion } from 'framer-motion'

function About() {
  return (
    <div 
      id="about"
      className="max-w-7xl mx-auto px-8 py-[7rem]"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="font-serif italic text-center text-5xl mb-4">About This Project</h2>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col items-start gap-y-6"
        >
        <div className="flex flex-col items-start ">
          <h2 className="font-serif text-3xl mb-4">What It Is</h2>
          <p className="text-base font-light mb-4">
            A collection of stories from the <b>Downtown Eastside</b>.
            </p>
          </div>
          <div className="flex flex-col items-start">
            <h2 className="font-serif text-3xl mb-4">Our Goals</h2>
            <ol className="list-decimal list-inside text-base font-light">
              <li>Rehumanize the homeless communities of Vancouver by sharing their stories.</li>
              <li>Provide accessible, actionable steps to support a more equitable future for everyone.</li>
            </ol>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About