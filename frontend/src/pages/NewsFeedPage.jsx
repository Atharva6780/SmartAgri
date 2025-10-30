import { useState, useEffect } from 'react';
import { ArrowUpCircle, ExternalLink, Newspaper, Search, Calendar, Filter, RefreshCw, TrendingUp, Shield, Zap, Sparkles } from 'lucide-react';
import { format } from 'date-fns';

export default function NewsFeedPage() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [refreshing, setRefreshing] = useState(false);

  // Function to fetch news from the backend
  const fetchNews = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:3000/api/v1/news');

      if (!response.ok) {
        throw new Error('Failed to fetch news');
      }

      const data = await response.json();
      setNews(data.articles || []);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching news:', err);
      setError(err.message);
      setLoading(false);
    }
  };

  const refreshNews = async () => {
    setRefreshing(true);
    await fetchNews();
    setTimeout(() => setRefreshing(false), 1000);
  };

  useEffect(() => {
    fetchNews();

    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const formatDate = (dateString) => {
    try {
      return format(new Date(dateString), 'MMM dd, yyyy • h:mm a');
    } catch (e) {
      return dateString;
    }
  };

  // Enhanced sample fallback data with categories and excerpts
  const sampleNews = [
    {
      id: 1,
      title: "New agricultural policy aims to boost farmer income in rural India",
      link: "https://example.com/news1",
      published: "2025-04-19T10:30:00Z",
      source: "Agricultural Daily",
      category: "policy",
      excerpt: "Government announces comprehensive initiatives to support farmers and increase rural income through innovative agricultural practices and subsidies."
    },
    {
      id: 2,
      title: "Climate change affects crop patterns in northern states",
      link: "https://example.com/news2",
      published: "2025-04-18T14:45:00Z",
      source: "Climate Monitor",
      category: "weather",
      excerpt: "Changing weather patterns and unpredictable monsoon seasons force farmers to adapt new crop cycles and modern irrigation methods."
    },
    {
      id: 3,
      title: "Government announces subsidies for organic farming equipment",
      link: "https://example.com/news3",
      published: "2025-04-18T09:15:00Z",
      source: "Economy Times",
      category: "policy",
      excerpt: "New subsidy scheme launched to promote organic farming and sustainable agriculture practices across the country."
    },
    {
      id: 4,
      title: "New pest resistant varieties of wheat developed by agricultural scientists",
      link: "https://example.com/news4",
      published: "2025-04-17T16:20:00Z",
      source: "Science Today",
      category: "technology",
      excerpt: "Breakthrough in agricultural research leads to development of high-yield pest-resistant wheat varieties with 30% better productivity."
    },
    {
      id: 5,
      title: "Farmers in Maharashtra adopt innovative irrigation techniques",
      link: "https://example.com/news5",
      published: "2025-04-17T08:50:00Z",
      source: "Rural Herald",
      category: "technology",
      excerpt: "Drip irrigation and smart water management systems gain popularity among progressive farmers, reducing water consumption by 40%."
    },
    {
      id: 6,
      title: "Global wheat prices surge due to supply chain disruptions",
      link: "https://example.com/news6",
      published: "2025-04-16T11:30:00Z",
      source: "Market Watch",
      category: "prices",
      excerpt: "International market fluctuations and geopolitical factors impact domestic wheat prices and export opportunities for Indian farmers."
    },
    {
      id: 7,
      title: "Blockchain technology transforms agricultural supply chains",
      link: "https://example.com/news7",
      published: "2025-04-16T09:45:00Z",
      source: "Tech Agriculture",
      category: "technology",
      excerpt: "Farmers and distributors embrace blockchain for transparent and efficient supply chain management, reducing fraud and improving traceability."
    },
    {
      id: 8,
      title: "Monsoon forecast predicts above-average rainfall this season",
      link: "https://example.com/news8",
      published: "2025-04-15T14:20:00Z",
      source: "Weather Bureau",
      category: "weather",
      excerpt: "Favorable monsoon conditions expected to boost kharif crop production across the country, with 15% above average rainfall predicted."
    },
    {
      id: 9,
      title: "Organic food exports reach record high in Q1 2025",
      link: "https://example.com/news9",
      published: "2025-04-15T10:15:00Z",
      source: "Export Times",
      category: "prices",
      excerpt: "Growing global demand for organic produce drives Indian agricultural exports to new heights, with 25% year-over-year growth."
    }
  ];

  const categories = [
    { id: 'all', name: 'All News', icon: Newspaper, count: sampleNews.length },
    { id: 'prices', name: 'Crop Prices', icon: TrendingUp, count: sampleNews.filter(n => n.category === 'prices').length },
    { id: 'policy', name: 'Government Policies', icon: Shield, count: sampleNews.filter(n => n.category === 'policy').length },
    { id: 'weather', name: 'Weather', icon: Zap, count: sampleNews.filter(n => n.category === 'weather').length },
    { id: 'technology', name: 'Technology', icon: Filter, count: sampleNews.filter(n => n.category === 'technology').length }
  ];

  const displayedNews = news.length > 0 ? news : sampleNews;

  const filteredNews = displayedNews.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category) => {
    const colors = {
      policy: 'bg-blue-100 text-blue-700 border-blue-200',
      weather: 'bg-cyan-100 text-cyan-700 border-cyan-200',
      technology: 'bg-purple-100 text-purple-700 border-purple-200',
      prices: 'bg-amber-100 text-amber-700 border-amber-200',
      general: 'bg-green-100 text-green-700 border-green-200'
    };
    return colors[category] || colors.general;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-lg mb-6 border border-green-200">
            <Sparkles className="text-green-600 mr-3" size={28} />
            <h1 className="text-4xl p-2 font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Agriculture News Hub
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Stay informed with the latest agricultural developments, market trends, and policy updates
          </p>
        </div>

        {/* Enhanced Search and Controls Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 mb-8 border border-green-200">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Enhanced Search Bar */}
            <div className="flex-1 w-full lg:max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search agricultural news, policies, market trends..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white/50"
                />
              </div>
            </div>

            {/* Refresh Button */}
            <button
              onClick={refreshNews}
              disabled={refreshing}
              className="flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <RefreshCw size={20} className={refreshing ? 'animate-spin' : ''} />
              <span>Refresh News</span>
            </button>
          </div>

          {/* Enhanced Category Pills */}
          <div className="flex flex-wrap gap-3 mt-6">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-xl transition-all duration-300 ${
                    isActive
                      ? 'bg-green-600 text-white shadow-lg transform -translate-y-0.5'
                      : 'bg-white text-gray-700 border border-gray-300 hover:border-green-300 hover:bg-green-50'
                  }`}
                >
                  <Icon size={18} />
                  <span className="font-semibold">{category.name}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    isActive ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {category.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Enhanced News Grid */}
        <div className="mb-12">
          {loading ? (
            <div className="flex justify-center items-center py-16">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
                <p className="text-gray-600">Loading latest agricultural news...</p>
              </div>
            </div>
          ) : (
            <>
              {/* Results Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    Latest News {filteredNews.length > 0 && <span className="text-green-600">({filteredNews.length})</span>}
                  </h2>
                  <p className="text-gray-600 mt-1">
                    {activeCategory === 'all' ? 'All agricultural updates' : `${categories.find(c => c.id === activeCategory)?.name} updates`}
                  </p>
                </div>
                <div className="flex items-center text-gray-500 bg-white/50 px-4 py-2 rounded-xl border border-gray-200">
                  <Calendar size={18} className="mr-2" />
                  <span className="text-sm font-medium">{format(new Date(), 'MMMM dd, yyyy')}</span>
                </div>
              </div>

              {/* Enhanced News Cards */}
              {filteredNews.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredNews.map((item, index) => (
                    <article
                      key={item.id || index}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden group"
                    >
                      <div className="p-6">
                        {/* Category Badge */}
                        <div className="flex justify-between items-start mb-4">
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(item.category)}`}>
                            {item.category?.charAt(0).toUpperCase() + item.category?.slice(1) || 'General'}
                          </span>
                          <div className="w-2 h-2 bg-green-400 rounded-full group-hover:scale-150 transition-transform"></div>
                        </div>

                        {/* Title */}
                        <h2 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-green-700 transition-colors leading-tight">
                          {item.title}
                        </h2>
                        
                        {/* Excerpt */}
                        {item.excerpt && (
                          <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                            {item.excerpt}
                          </p>
                        )}

                        {/* Source and Date */}
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4 pt-3 border-t border-gray-100">
                          <span className="flex items-center font-medium">
                            <Newspaper size={14} className="mr-2" />
                            {item.source || 'Agricultural News'}
                          </span>
                          <span className="flex items-center">
                            <Calendar size={14} className="mr-1" />
                            {formatDate(item.published)}
                          </span>
                        </div>

                        {/* Read More Button */}
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-full bg-green-50 text-green-700 py-3 rounded-xl font-semibold hover:bg-green-100 transition-all duration-300 group/link border border-green-200"
                        >
                          Read Full Article
                          <ExternalLink size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-white rounded-2xl shadow-lg border border-gray-200">
                  <Newspaper size={64} className="mx-auto text-gray-400 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">No news articles found</h3>
                  <p className="text-gray-500 max-w-md mx-auto">
                    {searchQuery ? `No results found for "${searchQuery}". Try adjusting your search terms.` : 'No articles available in this category.'}
                  </p>
                </div>
              )}
            </>
          )}

          {/* Enhanced Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6 text-center mb-6">
              <div className="text-red-600 font-semibold mb-2 text-lg">Unable to fetch latest news</div>
              <p className="text-red-500">Showing sample agricultural news data instead</p>
            </div>
          )}
        </div>

        {/* Enhanced Footer Info */}
        <div className="text-center py-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-green-200">
            <p className="text-gray-600 mb-2 font-medium">
              📰 Agricultural News Data sourced from Google News via RSS feed
            </p>
            <p className="text-gray-500 text-sm">
              Stay updated with real-time agricultural insights and market intelligence
            </p>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll to Top Button */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-22 right-7 bg-green-600 text-white p-4 rounded-2xl shadow-2xl hover:bg-green-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-3xl group"
          aria-label="Scroll to top"
        >
          <ArrowUpCircle size={20} className="group-hover:scale-110 transition-transform" />
        </button>
      )}
    </div>
  );
}