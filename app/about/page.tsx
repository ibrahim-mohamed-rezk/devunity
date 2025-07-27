import React from 'react';
import { Code, Zap, Users, Award, ArrowRight, Globe, Shield, Lightbulb } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { number: '500+', label: 'Projects Delivered' },
    { number: '50+', label: 'Team Members' },
    { number: '15+', label: 'Countries Served' },
    { number: '99.9%', label: 'Uptime Guarantee' }
  ];

  const values = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Technical Excellence',
      description: 'We push the boundaries of what\'s possible with cutting-edge technology and innovative solutions.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Collaborative Spirit',
      description: 'Our diverse team works together to create solutions that exceed expectations and drive success.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Security First',
      description: 'Every solution we build prioritizes security, ensuring your data and systems remain protected.'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Innovation Drive',
      description: 'We constantly explore emerging technologies to keep our clients ahead of the competition.'
    }
  ];

  const team = [
    {
      name: 'Sarah Chen',
      role: 'Chief Technology Officer',
      description: 'Former Google engineer with 15+ years in distributed systems and cloud architecture.'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Head of Engineering',
      description: 'Full-stack expert specializing in scalable web applications and DevOps practices.'
    },
    {
      name: 'Aisha Patel',
      role: 'Lead Data Scientist',
      description: 'PhD in Machine Learning with expertise in AI solutions and predictive analytics.'
    },
    {
      name: 'David Kim',
      role: 'Product Director',
      description: 'Product strategist focused on user experience and technical product development.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-green-600/5"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-8 border border-green-200">
            <Globe className="w-4 h-4 text-green-600" />
            <span style={{ color: '#658880' }}>Building the Future of Technology</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent leading-tight">
            We are <span style={{ color: '#21C38B' }}>TechForward</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed" style={{ color: '#658880' }}>
            A passionate team of engineers, designers, and innovators crafting next-generation software solutions that transform businesses and empower growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="group flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl" 
                    style={{ backgroundColor: '#21C38B' }}>
              Our Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 rounded-xl font-semibold border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg bg-white/80 backdrop-blur-sm"
                    style={{ borderColor: '#658880', color: '#658880' }}>
              Join Our Team
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-green-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#21C38B' }}>
                    {stat.number}
                  </div>
                  <div className="text-sm font-medium" style={{ color: '#658880' }}>
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Our Story
              </h2>
              <div className="space-y-6 text-lg leading-relaxed" style={{ color: '#658880' }}>
                <p>
                  Founded in 2018 by a group of engineers who believed technology should empower, not complicate, TechForward has grown from a small startup to a global technology partner.
                </p>
                <p>
                  We started with a simple mission: create software solutions that are not just functional, but transformative. Today, we work with companies ranging from innovative startups to Fortune 500 enterprises.
                </p>
                <p>
                  Our approach combines deep technical expertise with human-centered design, ensuring every solution we build serves real people and solves real problems.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center">
                <div className="w-32 h-32 rounded-2xl flex items-center justify-center" style={{ backgroundColor: '#21C38B' }}>
                  <Zap className="w-16 h-16 text-white" />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-2xl flex items-center justify-center bg-white shadow-xl border border-green-100">
                <Award className="w-12 h-12" style={{ color: '#658880' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-green-50/80 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              What Drives Us
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#658880' }}>
              Our values shape every decision we make and every solution we create
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-green-100 hover:shadow-xl transition-all duration-300 hover:scale-105 h-full">
                  <div className="mb-6 p-3 rounded-xl w-fit" style={{ backgroundColor: '#21C38B', opacity: 0.1 }}>
                    <div style={{ color: '#21C38B' }}>
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    {value.title}
                  </h3>
                  <p className="leading-relaxed" style={{ color: '#658880' }}>
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Meet Our Leaders
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#658880' }}>
              The brilliant minds behind our innovative solutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-green-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="w-20 h-20 rounded-2xl mb-4 bg-gradient-to-br flex items-center justify-center text-white font-bold text-xl"
                       style={{ backgroundColor: index % 2 === 0 ? '#21C38B' : '#658880' }}>
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-lg font-bold mb-1 text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium mb-3" style={{ color: '#21C38B' }}>
                    {member.role}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: '#658880' }}>
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Let's discuss how we can help transform your ideas into powerful, scalable solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="group flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl" 
                    style={{ backgroundColor: '#21C38B' }}>
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 rounded-xl font-semibold border-2 border-gray-600 text-gray-300 transition-all duration-300 hover:scale-105 hover:border-gray-400 hover:text-white">
              Schedule a Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;