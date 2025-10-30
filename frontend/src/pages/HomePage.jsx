import { useState, useEffect } from 'react';
import { ArrowRight, Shield, FileCheck, TrendingUp, Coins, Target, Users, CheckCircle, Star, Globe, Lock, Zap, Award, Calendar, BarChart3 } from 'lucide-react';

export default function HomePage() {
  const [isHoveredFarmer, setIsHoveredFarmer] = useState(false);
  const [isHoveredBuyer, setIsHoveredBuyer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50">
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-emerald-400/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className={`relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Revolutionizing
                <span className="block bg-gradient-to-r from-emerald-200 to-green-100 bg-clip-text text-transparent">
                  Contract Farming
                </span>
              </h1>
              
              <p className="text-xl mb-8 text-green-100 leading-relaxed">
                Secure pre-harvest contracts, transparent transactions, and guaranteed payments 
                between farmers and buyers through blockchain technology.
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                <a 
                  href="/connect-wallet" 
                  className="group bg-white text-green-700 px-8 py-4 rounded-xl font-semibold text-center hover:bg-green-50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  Connect Wallet 
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="/learn-more" 
                  className="border-2 border-white/30 bg-white/5 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold text-center hover:bg-white/10 transition-all duration-300"
                >
                  Learn More
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="mt-12 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 bg-green-500 rounded-full border-2 border-white"></div>
                    ))}
                  </div>
                  <span className="text-green-100">500+ Farmers Joined</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-300 fill-current" />
                  <span className="text-green-100">4.9/5 Rating</span>
                </div>
              </div>
            </div>
            
            <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-2xl p-2 border border-white/20 shadow-2xl">
                <img 
                  src="https://terra-droneagri.com/wp-content/uploads/2024/01/header-compress.png" 
                  alt="Blockchain farming illustration" 
                  className="rounded-xl shadow-2xl h-96"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - NEW */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: "50K+", label: "Contracts Executed", icon: FileCheck },
              { number: "$10M+", label: "In Transactions", icon: Coins },
              { number: "98%", label: "Success Rate", icon: Award },
              { number: "24/7", label: "Platform Availability", icon: Zap }
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="bg-green-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-100 transition-colors">
                  <stat.icon className="text-green-600" size={28} />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Value Proposition */}
      <section className="py-20 relative">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-green-700/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Why Choose SMART AGRI?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our blockchain platform solves traditional contract farming problems with 
              transparent, secure, and immutable smart contracts.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Secure Contracts", desc: "Smart contracts that self-execute and cannot be tampered with once deployed." },
              { icon: FileCheck, title: "Transparent Terms", desc: "All contract terms visible on blockchain, ensuring complete transparency." },
              { icon: TrendingUp, title: "Advance Funding", desc: "Farmers receive partial payment upfront to fund crop production." },
              { icon: Coins, title: "Escrow Protection", desc: "Payments held in secure escrow until delivery conditions are verified." }
            ].map((item, index) => (
              <div 
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 hover:border-green-200 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative">
                  <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="text-white" size={28} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle size={14} className="text-green-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced How It Works */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-20 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            How SMART AGRI Works
          </h2>
          
          <div className="relative">
            {/* Connection line */}
            <div className="hidden lg:block absolute top-16 left-1/4 right-1/4 h-1 bg-gradient-to-r from-green-200 to-emerald-200"></div>
            
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {[
                { step: "1", title: "Create Smart Contract", desc: "Buyers create contracts specifying crop type, quantity, quality parameters, pricing, and delivery terms." },
                { step: "2", title: "Secure Agreement", desc: "Farmers review and accept contracts, receiving advance payment to begin cultivation." },
                { step: "3", title: "Fulfillment & Payment", desc: "Upon delivery and verification, the smart contract automatically releases remaining payment." }
              ].map((item, index) => (
                <div key={index} className="relative text-center group">
                  <div className="relative inline-flex mb-6">
                    <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-20 h-20 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {item.step}
                    </div>
                    <div className="absolute -inset-4 bg-green-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - NEW */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            What Our Users Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Raj Kumar", role: "Farmer", text: "FarmBazaar helped me secure funding before planting. No more worrying about market prices!", rating: 5 },
              { name: "Green Foods Ltd", role: "Buyer", text: "Reliable supply chain with transparent tracking. Reduced our procurement risks significantly.", rating: 5 },
              { name: "Priya Sharma", role: "Farmer", text: "The advance payment feature transformed my farming operations. Highly recommended!", rating: 4 }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className={`${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">{testimonial.name}</div>
                    <div className="text-green-600 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced User Types */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-20 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Who Benefits from FarmBazaar?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div 
              className={`relative bg-white p-10 rounded-3xl shadow-xl border border-gray-100 transition-all duration-500 ${
                isHoveredFarmer ? 'shadow-2xl transform -translate-y-4 border-green-200' : ''
              }`}
              onMouseEnter={() => setIsHoveredFarmer(true)}
              onMouseLeave={() => setIsHoveredFarmer(false)}
            >
              <div className="absolute -top-4 left-8 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-full font-bold shadow-lg">
                For Farmers
              </div>
              
              <div className="mt-4">
                <div className="flex items-center mb-6">
                  <Users className="text-green-600 mr-3" size={32} />
                  <h3 className="text-2xl font-bold text-gray-800">Agricultural Producers</h3>
                </div>
                
                <ul className="space-y-4">
                  {[
                    "Secure advance funding before harvest",
                    "Guaranteed buyers for crops before planting",
                    "Protection from price volatility",
                    "Build verifiable reputation on blockchain"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start group">
                      <div className="bg-green-100 p-2 rounded-full mr-4 mt-1 group-hover:scale-110 transition-transform">
                        <CheckCircle size={16} className="text-green-600" />
                      </div>
                      <span className="text-gray-700 text-lg leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <a href="/for-farmers" className="group text-green-600 font-semibold text-lg flex items-center hover:text-green-700">
                    Learn more about farmer benefits
                    <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
            
            <div 
              className={`relative bg-white p-10 rounded-3xl shadow-xl border border-gray-100 transition-all duration-500 ${
                isHoveredBuyer ? 'shadow-2xl transform -translate-y-4 border-green-200' : ''
              }`}
              onMouseEnter={() => setIsHoveredBuyer(true)}
              onMouseLeave={() => setIsHoveredBuyer(false)}
            >
              <div className="absolute -top-4 left-8 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-full font-bold shadow-lg">
                For Buyers
              </div>
              
              <div className="mt-4">
                <div className="flex items-center mb-6">
                  <Target className="text-green-600 mr-3" size={32} />
                  <h3 className="text-2xl font-bold text-gray-800">Agricultural Buyers</h3>
                </div>
                
                <ul className="space-y-4">
                  {[
                    "Secure supply of specific quality produce",
                    "Lock in pricing and avoid market fluctuations",
                    "Transparent farming practices and origin tracking",
                    "Direct relationship with verified producers"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start group">
                      <div className="bg-green-100 p-2 rounded-full mr-4 mt-1 group-hover:scale-110 transition-transform">
                        <CheckCircle size={16} className="text-green-600" />
                      </div>
                      <span className="text-gray-700 text-lg leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <a href="/for-buyers" className="group text-green-600 font-semibold text-lg flex items-center hover:text-green-700">
                    Learn more about buyer benefits
                    <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid - NEW */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Advanced Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: BarChart3, title: "Real-time Analytics", desc: "Monitor contract performance and market trends" },
              { icon: Calendar, title: "Season Planning", desc: "Plan multiple seasons with automated scheduling" },
              { icon: Globe, title: "Global Marketplace", desc: "Connect with buyers and farmers worldwide" },
              { icon: Zap, title: "Instant Notifications", desc: "Get real-time updates on contract milestones" },
              { icon: Shield, title: "Insurance Integration", desc: "Protect against crop failure and natural disasters" },
              { icon: FileCheck, title: "Digital Documentation", desc: "All documents securely stored on blockchain" }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-green-200 transition-colors group">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                  <feature.icon className="text-green-600" size={24} />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA */}
      <section className="relative py-24 bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-emerald-400/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Ready to Transform
            <span className="block bg-gradient-to-r from-emerald-200 to-green-100 bg-clip-text text-transparent">
              Agricultural Commerce?
            </span>
          </h2>
          
          <p className="text-xl mb-12 max-w-3xl mx-auto text-green-100 leading-relaxed">
            Join SMART AGRI today and experience the future of contract farming 
            powered by cutting-edge blockchain technology.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-6 sm:space-y-0 sm:space-x-8">
            <a 
              href="/connect-wallet" 
              className="group bg-white text-green-700 px-10 py-4 rounded-xl font-semibold hover:bg-green-50 transition-all duration-300 transform hover:-translate-y-1 shadow-2xl hover:shadow-2xl flex items-center justify-center"
            >
              Connect Wallet Now
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="/marketplace" 
              className="border-2 border-white/30 bg-white/5 backdrop-blur-sm text-white px-10 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
            >
              Explore Contracts
            </a>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-green-200">
            <div className="flex items-center">
              <Shield size={20} className="mr-2" />
              <span>100% Secure</span>
            </div>
            <div className="flex items-center">
              <FileCheck size={20} className="mr-2" />
              <span>Transparent</span>
            </div>
            <div className="flex items-center">
              <TrendingUp size={20} className="mr-2" />
              <span>Guaranteed</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}