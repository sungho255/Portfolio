"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
  Calendar,
  GraduationCap,
  User,
  Code,
  Database,
  Brain,
  Cloud,
  ExternalLink,
  Github,
  ArrowUp,
} from "lucide-react"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [showScrollTop, setShowScrollTop] = useState(false)

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setShowScrollTop(scrollPosition > 300)

      // Update active section based on scroll position
      const sections = ["home", "about", "skills", "projects", "contact"]
      const sectionElements = sections.map((id) => document.getElementById(id))

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = sectionElements[i]
        if (element && scrollPosition >= element.offsetTop - 100) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const navItems = [
    { id: "home", label: "홈" },
    { id: "about", label: "소개" },
    { id: "skills", label: "기술" },
    { id: "projects", label: "프로젝트" },
    { id: "contact", label: "연락처" },
  ]

  const skills = [
    {
      category: "AI/ML",
      icon: <Brain className="w-6 h-6" />,
      items: [
        "Python을 활용한 머신러닝 모델 개발 및 최적화",
        "TensorFlow, PyTorch를 이용한 딥러닝 모델 구현",
        "LangChain, OpenAI API를 활용한 LLM 기반 서비스 개발",
        "자연어처리(NLP) 및 컴퓨터 비전 프로젝트 경험",
      ],
    },
    {
      category: "데이터 처리",
      icon: <Database className="w-6 h-6" />,
      items: [
        "Pandas, NumPy를 활용한 대용량 데이터 전처리",
        "SQL을 이용한 데이터베이스 설계 및 쿼리 최적화",
        "Apache Spark를 활용한 분산 데이터 처리",
        "데이터 시각화 및 분석 리포트 작성",
      ],
    },
    {
      category: "백엔드 개발",
      icon: <Code className="w-6 h-6" />,
      items: [
        "FastAPI, Flask를 활용한 RESTful API 개발",
        "Docker를 이용한 컨테이너화 및 배포 자동화",
        "Redis, PostgreSQL 등 데이터베이스 운영 경험",
        "마이크로서비스 아키텍처 설계 및 구현",
      ],
    },
    {
      category: "클라우드 & DevOps",
      icon: <Cloud className="w-6 h-6" />,
      items: [
        "AWS, GCP를 활용한 클라우드 인프라 구축",
        "Kubernetes를 이용한 컨테이너 오케스트레이션",
        "CI/CD 파이프라인 구축 및 자동화",
        "모니터링 및 로깅 시스템 구축",
      ],
    },
  ]

  const projects = [
    {
      title: "AI 챗봇 서비스",
      description: "LangChain과 OpenAI API를 활용한 고객 상담 챗봇 개발",
      tech: ["Python", "LangChain", "FastAPI", "PostgreSQL"],
      achievements: ["고객 문의 응답 시간 70% 단축", "월 10,000건 이상의 문의 자동 처리", "고객 만족도 85% 향상"],
      color: "blue",
      link: "https://github.com/example/chatbot",
      demo: "https://demo.chatbot.com",
    },
    {
      title: "실시간 추천 시스템",
      description: "머신러닝 기반 개인화 상품 추천 엔진 구축",
      tech: ["Python", "TensorFlow", "Apache Spark", "Redis"],
      achievements: ["추천 정확도 40% 향상", "실시간 처리 성능 5배 개선", "매출 전환율 25% 증가"],
      color: "emerald",
      link: "https://github.com/example/recommendation",
      demo: "https://demo.recommendation.com",
    },
    {
      title: "데이터 파이프라인 자동화",
      description: "ETL 프로세스 자동화 및 데이터 품질 관리 시스템",
      tech: ["Python", "Apache Airflow", "Docker", "AWS"],
      achievements: ["데이터 처리 시간 60% 단축", "데이터 품질 오류 90% 감소", "운영 비용 30% 절감"],
      color: "purple",
      link: "https://github.com/example/pipeline",
      demo: "https://demo.pipeline.com",
    },
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600",
      emerald: "from-emerald-500 to-emerald-600",
      purple: "from-purple-500 to-purple-600",
      orange: "from-orange-500 to-orange-600",
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg"></div>
              <span className="text-xl font-bold gradient-text">AI Developer</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.id ? "text-blue-600" : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-100"
            >
              <div className="container mx-auto px-6 py-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left py-2 text-gray-600 hover:text-gray-900"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20 px-6 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                <span className="gradient-text">AI Developer</span>
                <br />
                <span className="text-gray-900">포트폴리오</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                생성형 AI와 데이터 사이언스를 통해
                <br />
                혁신적인 솔루션을 만들어갑니다
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                >
                  프로젝트 보기
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-all duration-300"
                >
                  연락하기
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-400 via-purple-500 to-emerald-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 bg-white rounded-full shadow-2xl flex items-center justify-center">
                  <Brain className="w-24 h-24 text-blue-600" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 gradient-text">개인정보</h2>
            <p className="text-gray-600 text-lg">저에 대해 소개합니다</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <div className="w-48 h-48 mx-auto lg:mx-0 mb-8 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center">
                <User className="w-24 h-24 text-white" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-3">
                <User className="w-5 h-5 text-blue-600" />
                <span className="text-gray-900 font-medium">김AI개발자</span>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <span className="text-gray-900">ai.developer@email.com</span>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-600" />
                <span className="text-gray-900">010-1234-5678</span>
              </div>

              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="text-gray-900">서울특별시</span>
              </div>

              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-blue-600" />
                <span className="text-gray-900">1995.01.01</span>
              </div>

              <div className="flex items-start space-x-3">
                <GraduationCap className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <div className="text-gray-900 font-medium">컴퓨터공학과 학사</div>
                  <div className="text-gray-600">서울대학교 (2013-2017)</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 gradient-text">기술 스택</h2>
            <p className="text-gray-600 text-lg">보유하고 있는 기술과 경험을 소개합니다</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-sm card-hover"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 bg-blue-100 rounded-lg text-blue-600">{skill.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900">{skill.category}</h3>
                </div>
                <ul className="space-y-3">
                  {skill.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 gradient-text">주요 프로젝트</h2>
            <p className="text-gray-600 text-lg">진행했던 프로젝트들을 소개합니다</p>
          </motion.div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden card-hover"
              >
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                      <p className="text-gray-600 text-lg mb-4">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-3 mt-4 lg:mt-0">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span>코드</span>
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center space-x-2 px-4 py-2 bg-gradient-to-r ${getColorClasses(project.color)} text-white rounded-lg hover:shadow-lg transition-all`}
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>데모</span>
                      </a>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg p-6">
                    <h4 className="text-white font-bold mb-3 flex items-center">
                      <span className="mr-2">🏆</span>
                      성과
                    </h4>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-white leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 gradient-text">연락처</h2>
            <p className="text-gray-600 text-lg">언제든지 연락주세요</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-8 shadow-sm"
          >
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-3">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <Mail className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900">이메일</h3>
                <p className="text-gray-600">ai.developer@email.com</p>
              </div>

              <div className="space-y-3">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                  <Phone className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="font-bold text-gray-900">전화</h3>
                <p className="text-gray-600">010-1234-5678</p>
              </div>

              <div className="space-y-3">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                  <MapPin className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-bold text-gray-900">위치</h3>
                <p className="text-gray-600">서울특별시</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors z-40 flex items-center justify-center"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
