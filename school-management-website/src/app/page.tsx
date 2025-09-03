export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-yellow-50">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Welcome to Little Champ School
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Nurturing young minds with love, care, and quality education. 
            Where every child is a champion in their own way.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a 
              href="/curriculum" 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Explore Our Programs
            </a>
            <a 
              href="/contact" 
              className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-semibold text-gray-900 text-center mb-12">
            Why Choose Little Champ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '🎓',
                title: 'Quality Education',
                description: 'We provide comprehensive educational programs designed to nurture young minds and prepare them for future success.',
              },
              {
                icon: '👨‍👩‍👧‍👦',
                title: 'Parent Partnership',
                description: 'We believe in strong partnerships with parents to ensure the best learning experience for every child.',
              },
              {
                icon: '🌟',
                title: 'Holistic Development',
                description: 'Our curriculum focuses on academic excellence, creativity, and character development.',
              },
              {
                icon: '🏫',
                title: 'Safe Environment',
                description: 'We maintain a secure, nurturing environment where children can learn, play, and grow with confidence.',
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 text-center hover:shadow-lg transition-shadow">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl text-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
