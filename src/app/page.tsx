'use client'

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-white to-rose-50">
      <div className="text-center space-y-8 p-8 max-w-2xl mx-auto">
        {/* Main Hello World Heading */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-red-600 via-rose-600 to-red-800 bg-clip-text text-transparent animate-pulse">
            Hello World
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-rose-500 mx-auto rounded-full"></div>
        </div>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
          Welcome to your beautiful Next.js application
        </p>

        {/* Description */}
        <div className="space-y-4">
          <p className="text-lg text-gray-500 max-w-lg mx-auto">
            This is a simple, elegant Hello World page built with Next.js, TypeScript, and Tailwind CSS.
          </p>
        </div>

        {/* Interactive Elements */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <div className="px-8 py-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-red-100 hover:border-red-200">
            <p className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Framework</p>
            <p className="text-2xl font-bold text-red-600">Next.js 14</p>
          </div>
          
          <div className="px-8 py-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-rose-100 hover:border-rose-200">
            <p className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Styling</p>
            <p className="text-2xl font-bold text-rose-600">Tailwind CSS</p>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-8 mt-12 border-t border-gray-200">
          <p className="text-sm text-gray-400">
            Ready to build something amazing? 🚀
          </p>
        </div>
      </div>
    </main>
  )
}