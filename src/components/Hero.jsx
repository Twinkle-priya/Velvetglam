import heroImg from '../assets/images/hero.png'

function HeroSection() {
  return (
    <div className="grid md:grid-cols-2 items-center px-10 py-20 bg-lime-100">
      
      {/* Text Section */}
      <div>
        <h1 className="text-3xl font-bold text-pink-600 leading-tight">
          💋🌷 Unleash your inner glam with VelvetGlam 💄✨  
          <br />
          Because you deserve to sparkle every day 💎
        </h1>

        <button className="mt-8 bg-purple-700 text-white px-6 py-3 rounded-lg hover:bg-purple-800">
          Shop Now
        </button>
      </div>

      {/* Image Section */}
      <div>
        <img
          src={heroImg}
          alt="hero"
          className="rounded-2xl shadow-lg"
        />
      </div>

    </div>
  )
}

export default HeroSection