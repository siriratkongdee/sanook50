export default function About() {
  return (
    <div className="min-h-screen bg-rose-50">
      <div className="bg-rose-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="text-5xl mb-4">🐾</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Sanook50</h1>
          <p className="text-xl text-rose-100 max-w-2xl mx-auto">The story behind the name and the mission</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl p-10 shadow-md mb-8">
          <h2 className="text-3xl font-bold text-rose-900 mb-6">What Does Sanook Mean?</h2>
          <p className="text-rose-700 text-lg mb-4">
            Sanook (สนุก) is a Thai word that means <strong>fun, enjoyment, and pleasure</strong>. It's the feeling of being fully alive, engaged, and happy in the moment.
          </p>
          <p className="text-rose-700 text-lg mb-4">
            We chose this name because we believe turning 50 should feel exactly like that — fun, exciting, and full of possibility. Not a decline. Not a crisis. A beginning.
          </p>
        </div>
        <div className="bg-white rounded-2xl p-10 shadow-md mb-8">
          <h2 className="text-3xl font-bold text-rose-900 mb-6">Our Mission</h2>
          <p className="text-rose-700 text-lg mb-4">
            Sanook50 exists to give women in their 50s the honest, practical, and empowering information they need to thrive — not just survive — this incredible chapter of life.
          </p>
          <p className="text-rose-700 text-lg">
            We cover health and menopause, financial planning for semi-retirement, and career strategies for staying relevant in a rapidly changing world. All written for women who are experienced, ambitious, and ready for what's next.
          </p>
        </div>
        <div className="bg-rose-600 rounded-2xl p-10 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-rose-100 text-lg mb-6">Connect with thousands of women thriving in their 50s and beyond.</p>
          <button className="bg-white text-rose-600 font-bold py-3 px-8 rounded-full hover:bg-rose-50 transition-colors">
            Subscribe to Our Newsletter
          </button>
        </div>
      </div>
    </div>
  );
}
