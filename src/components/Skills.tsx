import { motion } from 'framer-motion'
import { Code, Database, Wrench, Cloud, Palette } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code,
      skills: [
        { name: 'Swift', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'HTML', level: 80 },
        { name: 'CSS', level: 80 },
      ]
    },
    {
      title: 'Frameworks / Libraries',
      icon: Wrench,
      skills: [
        { name: 'Alamofire', level: 85 },
        { name: 'Kingfisher', level: 80 },
        { name: 'Firebase', level: 85 },
        { name: 'Expo', level: 80 },
        { name: 'Axios', level: 80 },
        { name: 'React Native', level: 90 },
        { name: 'Redux', level: 85 },
        { name: 'React Native Paper', level: 75 },
      ]
    },
    {
      title: 'Databases / Storage',
      icon: Database,
      skills: [
        { name: 'User Defaults', level: 80 },
        { name: 'Keychains', level: 75 },
        { name: 'Core Data', level: 80 },
        { name: 'Async Storage', level: 80 },
      ]
    },
    {
      title: 'Tools / Platforms',
      icon: Cloud,
      skills: [
        { name: 'Xcode', level: 90 },
        { name: 'VS Code', level: 90 },
        { name: 'Postman', level: 85 },
        { name: 'Git', level: 90 },
        { name: 'GitHub', level: 90 },
        { name: 'GitHub Desktop', level: 80 },
        { name: 'Firebase', level: 85 },
      ]
    },
    {
      title: 'Others',
      icon: Palette,
      skills: [
        { name: 'Figma', level: 80 },
        { name: 'Agile/Scrum', level: 85 },
        { name: 'App Store Connect', level: 80 },
        { name: 'Google Play Console', level: 80 },
      ]
    }
  ]

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are the technologies, tools, and platforms I work with, as highlighted in my resume.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-dark-800 rounded-xl p-6 card-hover"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary-500/10 rounded-lg mr-4">
                  <category.icon className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                      <span className="text-primary-400 text-sm font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-dark-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 