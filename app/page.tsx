import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f1219] via-[#1a1d2e] to-[#0f1219]">
      <header className="fixed top-0 w-full bg-[#1a1d2e]/80 backdrop-blur-md z-50 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Image src="/logo.png" alt="TraxBingo Logo" width={200} height={50} className="h-12 w-auto" />
          <nav className="hidden md:flex gap-8 text-sm">
            <a href="#features" className="text-gray-300 hover:text-cyan-400 transition-colors">Features</a>
            <a href="#screenshots" className="text-gray-300 hover:text-cyan-400 transition-colors">Screenshots</a>
            <a href="#pricing" className="text-gray-300 hover:text-cyan-400 transition-colors">Pricing</a>
            <a href="#contact" className="text-gray-300 hover:text-cyan-400 transition-colors">Contact</a>
          </nav>
          <a href="#pricing" className="bg-gradient-to-r from-cyan-500 to-pink-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-pink-500/50 transition-all">
            Get Started
          </a>
        </div>
      </header>

      <main className="pt-24">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="flex justify-center mb-8">
            <Image src="/logo.png" alt="TraxBingo" width={400} height={100} className="h-24 w-auto" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 bg-clip-text text-transparent">
            Professional Music Bingo Software
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Run unforgettable music bingo nights with zero friction. Import. Generate. Game. Win.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#pricing" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all transform hover:scale-105">
              Start Free Trial
            </a>
            <a href="#features" className="bg-white/10 backdrop-blur-sm text-white px-10 py-4 rounded-full text-lg font-semibold border border-white/20 hover:bg-white/20 transition-all">
              Learn More
            </a>
          </div>
        </section>

        <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            Everything You Need for <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">Perfect Bingo Events</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:shadow-xl hover:shadow-cyan-500/20 transition-all">
              <div className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Music Library Manager</h3>
              <p className="text-gray-300 leading-relaxed">Organize your music collection, add metadata, and manage your song database with ease. Support for multiple decades and genres.</p>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:shadow-xl hover:shadow-purple-500/20 transition-all">
              <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Bingo Card Generator</h3>
              <p className="text-gray-300 leading-relaxed">Create custom bingo games with decade and genre filters. Generate multiple unique cards instantly with customizable options.</p>
            </div>

            <div className="bg-gradient-to-br from-pink-500/10 to-rose-500/10 backdrop-blur-sm border border-pink-500/20 rounded-2xl p-8 hover:shadow-xl hover:shadow-pink-500/20 transition-all">
              <div className="w-14 h-14 bg-gradient-to-r from-pink-500 to-rose-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Live Game Interface</h3>
              <p className="text-gray-300 leading-relaxed">Run live bingo events with real-time game management. Professional interface for seamless event execution.</p>
            </div>
          </div>
        </section>

        <section id="screenshots" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            See TraxBingo <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">In Action</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-500/50 transition-all hover:shadow-2xl hover:shadow-cyan-500/20">
              <Image src="/images/traxbingo_suite_home_01.png" alt="TraxBingo Suite Home" width={800} height={600} className="w-full h-auto" />
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all hover:shadow-2xl hover:shadow-purple-500/20">
              <Image src="/images/traxbingo_generator_overview.png" alt="Card Generator" width={800} height={600} className="w-full h-auto" />
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/10 hover:border-pink-500/50 transition-all hover:shadow-2xl hover:shadow-pink-500/20">
              <Image src="/images/traxbingo_manager_edit-metadata_02.png" alt="Library Manager" width={800} height={600} className="w-full h-auto" />
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all hover:shadow-2xl hover:shadow-blue-500/20">
              <Image src="/images/traxbingo_trial.png" alt="TraxBingo Trial" width={800} height={600} className="w-full h-auto" />
            </div>
          </div>
        </section>

        <section id="pricing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-white">
            Simple, <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">Transparent Pricing</span>
          </h2>
          <p className="text-xl text-gray-300 text-center mb-16 max-w-2xl mx-auto">Choose the plan that works best for you</p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border-2 border-cyan-500/30 rounded-3xl p-10 hover:shadow-2xl hover:shadow-cyan-500/30 transition-all transform hover:scale-105">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-4">Monthly Subscription</h3>
                <div className="mb-6">
                  <span className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">$29</span>
                  <span className="text-gray-300 text-xl">/month</span>
                </div>
                <p className="text-gray-300">Perfect for regular events</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-200">
                  <svg className="w-6 h-6 text-cyan-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Full access to all features
                </li>
                <li className="flex items-center text-gray-200">
                  <svg className="w-6 h-6 text-cyan-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Unlimited games and cards
                </li>
                <li className="flex items-center text-gray-200">
                  <svg className="w-6 h-6 text-cyan-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Priority support
                </li>
                <li className="flex items-center text-gray-200">
                  <svg className="w-6 h-6 text-cyan-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Regular updates
                </li>
              </ul>
              <a href="https://traxbingo.lemonsqueezy.com/buy/99df41e5-4182-486e-8d75-50cf9b96af08" className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:shadow-cyan-500/50 transition-all">
                Start Monthly Plan
              </a>
            </div>

            <div className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 backdrop-blur-sm border-2 border-pink-500/30 rounded-3xl p-10 hover:shadow-2xl hover:shadow-pink-500/30 transition-all transform hover:scale-105 relative">
              <div className="absolute -top-4 right-8 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Best Value
              </div>
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-4">Perpetual License</h3>
                <div className="mb-6">
                  <span className="text-6xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">$499</span>
                  <span className="text-gray-300 text-xl"> once</span>
                </div>
                <p className="text-gray-300">One-time payment, yours forever</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-200">
                  <svg className="w-6 h-6 text-pink-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Full access to all features
                </li>
                <li className="flex items-center text-gray-200">
                  <svg className="w-6 h-6 text-pink-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Unlimited games and cards
                </li>
                <li className="flex items-center text-gray-200">
                  <svg className="w-6 h-6 text-pink-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Lifetime updates
                </li>
                <li className="flex items-center text-gray-200">
                  <svg className="w-6 h-6 text-pink-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  No recurring fees
                </li>
              </ul>
              <a href="https://traxbingo.lemonsqueezy.com/buy/99df41e5-4182-486e-8d75-50cf9b96af08" className="block w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white text-center px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:shadow-pink-500/50 transition-all">
                Buy Perpetual License
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-white/10 rounded-3xl p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Need Help? <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">We&apos;re Here</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Have questions about TraxBingo? Our support team is ready to help you get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:support@traxbingo.com" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:shadow-cyan-500/50 transition-all inline-flex items-center justify-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Support
              </a>
              <a href="#pricing" className="bg-white/10 backdrop-blur-sm text-white px-10 py-4 rounded-full text-lg font-semibold border border-white/20 hover:bg-white/20 transition-all inline-flex items-center justify-center">
                Start Free Trial
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 bg-[#0f1219]/80 backdrop-blur-md mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <Image src="/logo.png" alt="TraxBingo" width={150} height={40} className="h-10 w-auto" />
              <p className="text-gray-400">Professional Music Bingo Software</p>
            </div>
            <div className="flex gap-8 text-sm text-gray-400">
              <a href="#features" className="hover:text-cyan-400 transition-colors">Features</a>
              <a href="#pricing" className="hover:text-cyan-400 transition-colors">Pricing</a>
              <a href="#contact" className="hover:text-cyan-400 transition-colors">Support</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
            <p>&copy; 2024 TraxBingo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
