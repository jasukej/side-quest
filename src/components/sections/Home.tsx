function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black px-4">
      {/* Text Section with Slide-up Animation */}
      <div className="text-center min-h-screen flex flex-col items-center justify-center mb-16 opacity-0 translate-y-10 animate-[slideUp_0.8s_ease-out_forwards]">
        <h1 className="text-4xl md:text-6xl font-serif text-neutral-200 mb-8">
          Rehumanizing the Downtown Eastside of Vancouver through <span className="font-serif italic">storytelling</span>
        </h1>
        <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto mt-6 font-light">
          Exploring the human stories that shape our community
        </p>
      </div>

      <div 
        id="docu"
        className="w-full max-w-4xl mb-[8rem] aspect-video bg-neutral-800 rounded-lg overflow-hidden relative group opacity-0 translate-y-10 animate-[slideUp_0.8s_ease-out_0.3s_forwards]">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Ot2ILDZ1uNs?si=rX0lyFq26oo6GV_n" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </div>
  )
}

export default Home