import { Link } from 'react-router-dom';
import { PlayCircle, BookOpen, Users, Star, Clock, Award, TrendingUp, Shield, Zap, Sparkles, Target, BarChart3 } from 'lucide-react';

const EducationPage = () => {
  const farmerVideos = [
    { 
      id: 1, 
      title: "Organic Farming Techniques", 
      youtubeId: "SOcxRMOjXWY", 
      description: "Learn modern organic farming methods to increase yield and sustainability", 
      duration: "41:42",
      views: "125K",
      rating: 4.8,
      instructor: "Dr. Rajesh Kumar",
      category: "Organic Farming"
    },
    { 
      id: 2, 
      title: "Sustainable Agriculture", 
      youtubeId: "MJ0uoV7lURs", 
      description: "Best practices for sustainable farming and environmental conservation", 
      duration: "15:20",
      views: "89K",
      rating: 4.6,
      instructor: "Green Farms Academy",
      category: "Sustainability"
    },
    { 
      id: 3, 
      title: "Crop Rotation Guide", 
      youtubeId: "weovm6S_B_4", 
      description: "How to implement effective crop rotation for better soil health", 
      duration: "08:45",
      views: "67K",
      rating: 4.7,
      instructor: "Agricultural Experts",
      category: "Crop Management"
    },
    { 
      id: 4, 
      title: "Soil Health Management", 
      youtubeId: "H1g01x4lRLM", 
      description: "Improving and maintaining healthy soil for maximum productivity", 
      duration: "18:12",
      views: "94K",
      rating: 4.9,
      instructor: "Soil Science Institute",
      category: "Soil Science"
    },
    { 
      id: 5, 
      title: "Smart Irrigation Systems", 
      youtubeId: "dQw4w9WgXcQ", 
      description: "Modern irrigation techniques to save water and increase efficiency", 
      duration: "22:30",
      views: "78K",
      rating: 4.5,
      instructor: "Water Management Corp",
      category: "Irrigation"
    },
    { 
      id: 6, 
      title: "Pest Control Methods", 
      youtubeId: "dQw4w9WgXcQ", 
      description: "Natural and effective pest control strategies for crops", 
      duration: "14:15",
      views: "112K",
      rating: 4.8,
      instructor: "Pest Management Board",
      category: "Pest Control"
    }
  ];

  const courses = [
    { 
      id: 1, 
      title: 'Modern Farming Fundamentals', 
      provider: 'Agricultural Excellence Institute', 
      duration: '4 weeks', 
      level: 'Beginner',
      students: '2.5K',
      rating: 4.8,
      price: 'Free',
      features: ['Basic Techniques', 'Soil Preparation', 'Crop Selection']
    },
    { 
      id: 2, 
      title: 'Agricultural Business Management', 
      provider: 'Farm Business Academy', 
      duration: '6 weeks', 
      level: 'Intermediate',
      students: '1.8K',
      rating: 4.7,
      price: '₹1,999',
      features: ['Market Analysis', 'Financial Planning', 'Supply Chain']
    },
    { 
      id: 3, 
      title: 'Digital Marketing for Farmers', 
      provider: 'E-Commerce Agriculture', 
      duration: '8 weeks', 
      level: 'Advanced',
      students: '3.2K',
      rating: 4.9,
      price: '₹2,499',
      features: ['Online Sales', 'Brand Building', 'Customer Engagement']
    },
    { 
      id: 4, 
      title: 'Organic Certification Process', 
      provider: 'Organic Farming Board', 
      duration: '3 weeks', 
      level: 'Intermediate',
      students: '1.2K',
      rating: 4.6,
      price: '₹1,499',
      features: ['Certification Steps', 'Quality Standards', 'Market Access']
    }
  ];

  const stats = [
    { number: '50K+', label: 'Farmers Trained', icon: Users },
    { number: '4.8/5', label: 'Average Rating', icon: Star },
    { number: '200+', label: 'Expert Instructors', icon: Award },
    { number: '95%', label: 'Success Rate', icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-lg mb-6 border border-green-200">
            <Sparkles className="text-green-600 mr-3" size={28} />
            <h1 className="text-4xl p-2 font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Farmer Education Hub
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Master modern farming techniques, marketing strategies, and business skills to transform your agricultural enterprise.
          </p>
          
          {/* Stats Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-green-200 text-center">
                  <div className="bg-green-100 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Icon className="text-green-600" size={24} />
                  </div>
                  <div className="text-2xl font-bold text-gray-800">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Enhanced Videos Section */}
        <section className="mb-20">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-8 border border-green-200">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="bg-green-600 p-3 rounded-2xl mr-4">
                  <PlayCircle className="text-white" size={32} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-800">Educational Videos</h2>
                  <p className="text-gray-600 mt-1">Learn from expert farmers and agricultural scientists</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="bg-green-600 text-white px-4 py-2 rounded-xl font-medium hover:bg-green-700 transition-colors">
                  All Videos
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {farmerVideos.map((video) => (
                <div
                  key={video.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-100 group"
                >
                  <div className="relative pt-[56.25%] bg-gray-200 overflow-hidden">
                    <iframe
                      className="absolute top-0 left-0 w-full h-full group-hover:scale-105 transition-transform duration-500"
                      src={`https://www.youtube.com/embed/${video.youtubeId}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                    <div className="absolute bottom-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-sm">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                        {video.category}
                      </span>
                      <div className="flex items-center text-amber-500">
                        <Star size={14} className="fill-current" />
                        <span className="text-sm font-medium ml-1">{video.rating}</span>
                      </div>
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-gray-800 group-hover:text-green-700 transition-colors line-clamp-2">
                      {video.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                      {video.description}
                    </p>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span className="flex items-center">
                        <Users size={14} className="mr-1" />
                        {video.views}
                      </span>
                      <span>{video.instructor}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Courses Section */}
        <section className="mb-20">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-green-200">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <div className="bg-green-600 p-3 rounded-2xl mr-4">
                  <BookOpen className="text-white" size={32} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-800">Marketing & Business Courses</h2>
                  <p className="text-gray-600 mt-1">Boost your farming business with professional courses</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-100 group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center space-x-2">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                        course.level === 'Beginner' ? 'text-green-800 bg-green-100' :
                        course.level === 'Intermediate' ? 'text-yellow-800 bg-yellow-100' :
                        'text-red-800 bg-red-100'
                      }`}>
                        {course.level}
                      </span>
                      <span className="text-sm text-gray-500 flex items-center">
                        <Clock size={14} className="mr-1" />
                        {course.duration}
                      </span>
                    </div>
                    <div className="text-lg font-bold text-green-600">{course.price}</div>
                  </div>
                  
                  <h3 className="font-bold text-xl mb-3 text-gray-800 group-hover:text-green-700 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 mb-4 font-medium">By {course.provider}</p>
                  
                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                    <span className="flex items-center">
                      <Users size={14} className="mr-1" />
                      {course.students} students
                    </span>
                    <span className="flex items-center text-amber-500">
                      <Star size={14} className="fill-current mr-1" />
                      {course.rating}
                    </span>
                  </div>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {course.features.map((feature, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <Link 
                      to="#"
                      className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center"
                    >
                      Enroll Now
                      <Zap size={16} className="ml-2" />
                    </Link>
                    <button className="text-gray-500 hover:text-green-600 transition-colors">
                      <BookOpen size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Additional Resources Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-2xl shadow-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Additional Learning Resources</h2>
              <p className="text-green-100 text-lg max-w-2xl mx-auto">
                Explore our comprehensive collection of articles, guides, and tools designed specifically for modern farmers.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { 
                  title: 'Farming Best Practices', 
                  description: 'Comprehensive guides on modern farming techniques',
                  icon: Target,
                  count: '50+ Articles'
                },
                { 
                  title: 'Market Trends & Analysis', 
                  description: 'Latest agricultural market insights and reports',
                  icon: BarChart3,
                  count: 'Weekly Updates'
                },
                { 
                  title: 'Tools & Calculators', 
                  description: 'Helpful farming tools and financial calculators',
                  icon: Shield,
                  count: '15+ Tools'
                }
              ].map((resource, idx) => {
                const Icon = resource.icon;
                return (
                  <Link
                    key={idx}
                    to="#"
                    className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 border border-white/20 group"
                  >
                    <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="text-white" size={24} />
                    </div>
                    <h3 className="font-bold text-xl mb-2">{resource.title}</h3>
                    <p className="text-green-100 text-sm mb-3">{resource.description}</p>
                    <span className="text-green-200 text-sm font-medium">{resource.count}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-green-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Ready to Transform Your Farming Business?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of successful farmers who have upgraded their skills and increased their profits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="#"
                className="bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                Start Learning Today
                <Sparkles size={20} className="ml-2" />
              </Link>
              <Link 
                to="#"
                className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-green-600 hover:text-white transition-all duration-300"
              >
                Browse All Courses
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EducationPage;