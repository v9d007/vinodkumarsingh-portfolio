import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Code, Globe, Smartphone } from 'lucide-react'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with payment integration, user authentication, and admin dashboard. Features include product management, order tracking, and analytics.',
      image: '/api/placeholder/400/250',
      category: 'fullstack',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
      liveUrl: 'https://ecommerce-demo.com',
      githubUrl: 'https://github.com/vinod/ecommerce-platform',
      features: ['User Authentication', 'Payment Processing', 'Admin Dashboard', 'Order Management', 'Analytics'],
      type: 'Web Application'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team collaboration, and project tracking capabilities.',
      image: '/api/placeholder/400/250',
      category: 'frontend',
      technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: 'https://task-app-demo.com',
      githubUrl: 'https://github.com/vinod/task-management',
      features: ['Real-time Updates', 'Team Collaboration', 'Project Tracking', 'Drag & Drop', 'Notifications'],
      type: 'Web Application'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.',
      image: '/api/placeholder/400/250',
      category: 'frontend',
      technologies: ['React', 'OpenWeather API', 'Chart.js', 'Geolocation API'],
      liveUrl: 'https://weather-dashboard.com',
      githubUrl: 'https://github.com/vinod/weather-dashboard',
      features: ['Location-based Forecast', 'Interactive Maps', 'Weather Analytics', '7-day Forecast', 'Hourly Updates'],
      type: 'Web Application'
    },
    {
      id: 4,
      title: 'Fitness Tracking Mobile App',
      description: 'A comprehensive fitness tracking mobile application with workout plans, progress tracking, and social features.',
      image: '/api/placeholder/400/250',
      category: 'mobile',
      technologies: ['React Native', 'Firebase', 'Redux', 'Expo', 'HealthKit'],
      liveUrl: 'https://fitness-app.com',
      githubUrl: 'https://github.com/vinod/fitness-tracker',
      features: ['Workout Plans', 'Progress Tracking', 'Social Features', 'Health Integration', 'Offline Support'],
      type: 'Mobile Application'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and Framer Motion animations.',
      image: '/api/placeholder/400/250',
      category: 'frontend',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      liveUrl: 'https://vinod-portfolio.com',
      githubUrl: 'https://github.com/vinod/portfolio',
      features: ['Responsive Design', 'Smooth Animations', 'Dark Mode', 'Contact Form', 'SEO Optimized'],
      type: 'Website'
    },
    {
      id: 6,
      title: 'API Management System',
      description: 'A backend API management system with authentication, rate limiting, and comprehensive documentation.',
      image: '/api/placeholder/400/250',
      category: 'backend',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'JWT', 'Swagger'],
      liveUrl: 'https://api-docs.com',
      githubUrl: 'https://github.com/vinod/api-management',
      features: ['Authentication', 'Rate Limiting', 'API Documentation', 'Monitoring', 'Logging'],
      type: 'Backend Service'
    }
  ]

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'mobile', label: 'Mobile' }
  ]

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' ? true : project.category === activeFilter
  )

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Web Application':
        return Globe
      case 'Mobile Application':
        return Smartphone
      case 'Backend Service':
        return Code
      default:
        return Globe
    }
  }

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating my skills in various technologies and domains.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                activeFilter === filter.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-dark-800 text-gray-400 hover:bg-dark-700 hover:text-white'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-dark-800 rounded-xl overflow-hidden card-hover group"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary-500/20 to-purple-500/20 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-600/30 to-purple-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-4">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200"
                        >
                          <ExternalLink size={20} className="text-white" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200"
                        >
                          <Github size={20} className="text-white" />
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center gap-2 px-3 py-1 bg-dark-900/80 backdrop-blur-sm rounded-full">
                      {React.createElement(getTypeIcon(project.type), { size: 16, className: "text-primary-400" })}
                      <span className="text-xs text-gray-300">{project.type}</span>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-dark-700 rounded-full text-xs text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-sm font-semibold text-primary-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-xs text-gray-400 flex items-start">
                          <span className="text-primary-500 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                      {project.features.length > 3 && (
                        <li className="text-xs text-gray-500">
                          +{project.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/vinod"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <Github size={20} />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 