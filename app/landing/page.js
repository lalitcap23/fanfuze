import { useEffect, useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

// Mock functions for demonstration - replace with your actual utils
const getFanID = async () => null;
const getClubID = async () => null;

export default function Landing() {
  const [loading, setLoading] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const checkUserType = async () => {
      try {
        const fanId = await getFanID();
        const clubId = await getClubID();
        if (fanId) {
          console.log("fan id is ", fanId);
          // router.push("/fandrops")
        } else if (clubId) {
          console.log("club id is ", clubId);
          // router.push("/clubshome")
        } else {
          // router.push("/onboarding")
        }
      } catch (error) {
        console.log("error checking user type ", error);
      }
      setLoading(false);
    };
    checkUserType();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute inset-0 w-16 h-16 border-4 border-blue-500 border-b-transparent rounded-full animate-spin animate-reverse"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"
          style={{
            left: mousePos.x - 192,
            top: mousePos.y - 192,
            transition: 'all 0.3s ease-out'
          }}
        ></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-2xl animate-pulse"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 backdrop-blur-md bg-black/50 border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              FanFuse
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="/alldrops" className="hover:text-purple-400 transition-colors">Explore Drops</a>
              <a href="/fandrops" className="hover:text-purple-400 transition-colors">My Fan Drops</a>
              <a href="/previousdrop" className="hover:text-purple-400 transition-colors">Past Drops</a>
              <a href="/myorders" className="hover:text-purple-400 transition-colors">My Collection</a>
              <a href="/clubshome" className="hover:text-purple-400 transition-colors">Club Portal</a>
              <a href="/dropslist" className="hover:text-purple-400 transition-colors">Upcoming</a>
              <ConnectButton />
            </div>
            {/* Mobile Menu Button */}
            <button className="md:hidden text-white hover:text-purple-400 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          {/* Mobile Menu */}
          <div className="md:hidden mt-4 space-y-4">
            <a href="/alldrops" className="block hover:text-purple-400 transition-colors">Explore Drops</a>
            <a href="/fandrops" className="block hover:text-purple-400 transition-colors">My Fan Drops</a>
            <a href="/previousdrop" className="block hover:text-purple-400 transition-colors">Past Drops</a>
            <a href="/myorders" className="block hover:text-purple-400 transition-colors">My Collection</a>
            <a href="/clubshome" className="block hover:text-purple-400 transition-colors">Club Portal</a>
            <a href="/dropslist" className="block hover:text-purple-400 transition-colors">Upcoming</a>
            <div className="pt-2">
              <ConnectButton />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-block">
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold animate-pulse">
                  🚀 Blockchain-Powered Fan Rewards
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                  Transform
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Fan Loyalty
                </span> 
                <br />
                <span className="text-white">Forever</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                Experience the future of fan engagement with Token-Gated Flash Drops. 
                Where your passion meets exclusive rewards on the Chiliz blockchain.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105 hover:shadow-2xl">
                  Start Your Journey
                </button>
                <button className="border border-white/20 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all transform hover:scale-105">
                  Watch Demo
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-lg border border-white/10 rounded-3xl p-8 transform hover:scale-105 transition-all duration-500">
                  <img 
                    src="https://theanalyst.com/wp-content/uploads/2021/07/club-vs-country-analyst-banner.jpg" 
                    alt="Sports Illustration" 
                    className="rounded-2xl w-full shadow-2xl"
                  />
                </div>
              </div>
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-xl animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {[
              { number: "5+", label: "Fan Tokens", color: "from-purple-500 to-pink-500" },
              { number: "Chiliz", label: "Global Sports Partners", color: "from-blue-500 to-cyan-500" },
              { number: "20+", label: "Ecosystem Users", color: "from-green-500 to-emerald-500" },
              { number: "∞", label: "Possibilities", color: "from-orange-500 to-red-500" }
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/10 p-8 rounded-2xl text-center hover:border-white/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
                  <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-4`}>
                    {stat.number}
                  </div>
                  <p className="text-gray-300 font-medium">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Chiliz Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Powered by Chiliz
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The leading blockchain platform connecting sports and entertainment with Web3
            </p>
          </div>

          {/* Team Logos */}
          <div className="flex justify-center items-center space-x-6 mb-16 overflow-x-auto">
            {['PSG', 'Inter', 'Napoli', 'Man City', 'Manchester'].map((team, index) => (
              <div key={team} className="flex-shrink-0 group">
                <div className="w-20 h-20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-full flex items-center justify-center hover:border-purple-400 transition-all duration-300 transform hover:scale-110">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {team.slice(0, 2)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Feature Card */}
          <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-xl border border-white/10 rounded-3xl p-12 hover:border-white/20 transition-all duration-500">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block">
                  <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    ⚡ Flash Drops
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold">
                  <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                    Token-Gated
                  </span>
                  <br />
                  <span className="text-purple-400">Exclusive Access</span>
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Unlock exclusive, time-sensitive opportunities with your fan tokens. 
                  Experience rewards designed for the most dedicated supporters.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">
                    Secure blockchain technology ensures transparent and fair distribution
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">
                    Limited-time drops create urgency and exclusivity
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">
                    Direct connection between clubs and their most passionate fans
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-black to-purple-900/20 border-t border-white/10">
        <div className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
              FanFuse
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Transforming fan loyalty through blockchain-powered rewards and exclusive experiences.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
              <div className="space-y-3">
                {['Features', 'About', 'Tokens', 'Community'].map((link) => (
                  <a key={link} href="#" className="block text-gray-300 hover:text-purple-400 transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-6">Legal</h4>
              <div className="space-y-3">
                {['Terms', 'Privacy', 'Cookies', 'Contact'].map((link) => (
                  <a key={link} href="#" className="block text-gray-300 hover:text-purple-400 transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
        
        .animate-reverse {
          animation-direction: reverse;
        }
      `}</style>
    </div>
  );
}