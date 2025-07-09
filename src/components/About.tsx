import { motion } from 'framer-motion'
import { User, MapPin, Calendar, Mail, Phone, GraduationCap } from 'lucide-react'

const About = () => {
  const personalInfo = [
    { icon: User, label: 'Name', value: 'Vinod Kumar Singh' },
    { icon: MapPin, label: 'Location', value: 'Bangalore, India' },
    { icon: Calendar, label: 'Experience', value: '5+ Years' },
    { icon: Mail, label: 'Email', value: 'v9d200@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 7054117364' },
  ]

  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Mobile Developer with a strong background in React Native, iOS, and cross-platform app development. Passionate about building scalable, high-quality applications and always eager to learn new technologies.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap size={22} className="text-primary-400" /> Education
            </motion.h3>
            <div className="bg-dark-800 rounded-lg p-4 mb-4">
              <div className="font-bold text-white">Indian Institute of Technology Kanpur</div>
              <div className="text-gray-400 text-sm">Bachelor of Technology | Electrical Engineering</div>
              <div className="text-gray-400 text-xs">Aug '15 – Jul '19</div>
            </div>
            <div className="space-y-4">
              {personalInfo.map((info) => (
                <div
                  key={info.label}
                  className="flex items-center space-x-4 p-4 bg-dark-800 rounded-lg hover:bg-dark-700 transition-colors duration-200"
                >
                  <div className="flex-shrink-0">
                    <info.icon className="w-5 h-5 text-primary-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    <p className="text-white font-medium">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - About Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-6">
              My Story
            </h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I am a Mobile Developer with experience in React Native, iOS (Swift), and cross-platform app development. I have contributed to the development of scalable, high-quality mobile apps, integrating RESTful APIs, GraphQL, push notifications, deep linking, and more. I am passionate about clean code, modular architecture, and delivering seamless user experiences.
              </p>
              <p>
                I enjoy collaborating with teams, mentoring juniors, and continuously learning new technologies. My background in Electrical Engineering from IIT Kanpur has given me a strong foundation in problem-solving and analytical thinking.
              </p>
            </div>
            {/* Key Highlights */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center p-4 bg-dark-800 rounded-lg">
                <div className="text-2xl font-bold text-primary-400 mb-2">5+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-dark-800 rounded-lg">
                <div className="text-2xl font-bold text-primary-400 mb-2">IITK</div>
                <div className="text-sm text-gray-400">Alumnus</div>
              </div>
            </div>

            {/* Achievements */}
            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-4 gradient-text">Academic Achievements</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Secured All India SC Rank 110, in <b>Joint Entrance Exam Advanced</b> among 1.5 million candidates</li>
                <li>Awarded Merit certificate, selected as top 1 percent <b>Dakshana Scholar</b> among 600 JNVs in India</li>
                <li>Got selected for <b>Super-30 Patna</b> among more than thousands of students</li>
                <li>Successfully contributed in winning General Championship for three consecutive years in Inter IIT sports meet</li>
              </ul>
            </div>

            {/* Extra Curricular Activities */}
            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-4 gradient-text">Extra Curricular Activities</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Involved as a <b>Event Manager</b> in Udghosh’17 and <b>Senior executive</b> in Josh’16 for smooth conduction of the events</li>
                <li>Contributed as a <b>Football Coordinator</b> in InterIIT’16 to ensure the extraordinary hosting</li>
                <li>Accomplished athlete with a proven track record of excellence - recognized as a two-time national football player at school level with a strong work ethic and commitment to teamwork</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 