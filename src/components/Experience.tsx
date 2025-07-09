import { motion } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: 'Mobile Developer',
      company: 'Xoxoday',
      location: 'Bangalore, India',
      period: "Jul '19 – Present",
      description: 'Contributed to the development of rewarding and incentive-based mobile apps using React Native and Expo Go. Integrated RESTful APIs, GraphQL, push notifications, deep linking, animations, Redux, multi-language support, and EAS builds. Published apps on iOS App Store and Google Play Store.',
      achievements: [
        'Developed scalable mobile apps with React Native, Expo Go, and Redux',
        'Integrated RESTful APIs and GraphQL for efficient data communication',
        'Implemented push notifications and deep linking',
        'Added animations for improved user experience',
        'Enabled multi-language support and multi-user account login',
        'Utilized third-party libraries and native libraries for navigation and other functionalities',
        'Deployed apps using EAS builds and published on iOS App Store and Google Play Store',
      ],
      technologies: ['React Native', 'Expo Go', 'Redux', 'RESTful APIs', 'GraphQL', 'EAS', 'iOS', 'Android']
    },
    {
      title: 'iOS Developer (Compass)',
      company: 'Xoxoday',
      location: 'Bangalore, India',
      period: "Jul '19 – Present",
      description: 'Proficient in storyboarding, auto-layout, scalable UIs, and visually appealing animations using UIKit, UIBezierPath, and Swift animation classes. Extensive knowledge of iOS SDK, app architecture, design patterns, OOP, memory management, dependency injection, and third-party libraries.',
      achievements: [
        'Created scalable UIs and smooth animations using UIKit and Swift',
        'Strong grasp of iOS SDK, app architecture, and design patterns',
        'Integrated third-party libraries: Alamofire, Kingfisher, GoogleTagManager, Firebase',
        'Implemented JSON formatted services and Grand Central Dispatch',
        'Wrote comprehensive unit tests with XCTest',
      ],
      technologies: ['Swift', 'UIKit', 'Alamofire', 'Kingfisher', 'GoogleTagManager', 'Firebase', 'CocoaPods']
    },
    {
      title: 'iOS Developer (Empuls)',
      company: 'Xoxoday',
      location: 'Bangalore, India',
      period: "Jul '19 – Present",
      description: 'Developed applications using Swift, Xcode, Interface Builder, Cocoa Touch, and other iOS development tools. Assisted in analysis, design, development, and performance optimization of mobile applications.',
      achievements: [
        'Developed UI screens with UITableView, UIAlertView, UIScrollView',
        'Utilized GIT for codebase management',
        'Worked with Protocols, Delegates, Extensions, Class, and Struct for enhanced app functionality',
      ],
      technologies: ['Swift', 'Xcode', 'Cocoa Touch', 'GIT', 'Protocols', 'Delegates', 'Extensions']
    }
  ]

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey and the impact I've made in various organizations.
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-dark-800 rounded-xl p-6 card-hover"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-semibold text-white mb-1 md:mb-0">
                    {experience.title}
                  </h3>
                  <span className="text-primary-400 font-medium">@ {experience.company}</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-400 mt-2 md:mt-0">
                  <span className="flex items-center gap-1"><MapPin size={16} />{experience.location}</span>
                  <span className="flex items-center gap-1"><Calendar size={16} />{experience.period}</span>
                </div>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {experience.description}
              </p>
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-primary-400 mb-2">Key Achievements:</h4>
                <ul className="space-y-1">
                  {experience.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="text-sm text-gray-400 flex items-start">
                      <span className="text-primary-500 mr-2">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-primary-400 mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-dark-700 rounded-full text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience 