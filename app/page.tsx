"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  ChevronDown,
  Brain,
  Server,
  Mail,
  Github,
  Linkedin,
  ArrowRight,
  MapPin,
  Phone,
  Calendar,
  GraduationCap,
  Award,
  User,
  Target,
  Zap,
  BarChart3,
  ExternalLink,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Portfolio() {
  const [typedText, setTypedText] = useState("")
  const [activeSection, setActiveSection] = useState("section-0")
  const fullText = "생성형 AI 데이터사이언티스트"

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 100)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["section-0", "section-1", "section-2", "section-3", "section-4", "section-5", "section-6"]
      const scrollPosition = window.scrollY + 100

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  const skills = [
    {
      category: "LLM & Fine-tuning",
      icon: Brain,
      color: "blue",
      technologies: [
        {
          name: "LLM Fine-tuning",
          description: "KoBERT, KLUE/BERT-base 파인튜닝, SFT(Supervised Fine-Tuning) 데이터 구성 및 학습",
        },
        {
          name: "Model Optimization",
          description: "LoRA, QLoRA 경량화 기법 활용, 파라미터 효율적 파인튜닝 (PEFT) 구현",
        },
        {
          name: "Performance Analysis",
          description: "모델 성능 평가 지표 설계, A/B 테스트, 추론 결과 분석 및 개선 방안 도출",
        },
        {
          name: "PyTorch & Transformers",
          description: "PyTorch 기반 모델 구현, Hugging Face Transformers 라이브러리 활용",
        },
      ],
    },
    {
      category: "생성형 AI 서비스",
      icon: Zap,
      color: "emerald",
      technologies: [
        {
          name: "RAG Systems",
          description: "Retrieval-Augmented Generation 시스템 설계, Vector DB 기반 문서 검색 최적화",
        },
        {
          name: "AI Agent Development",
          description: "LangChain/LangGraph 활용 AI 에이전트 구축, 대화 흐름 제어 및 상태 관리",
        },
        {
          name: "Prompt Engineering",
          description: "Few-shot, Chain-of-Thought 프롬프팅, 프롬프트 최적화 및 성능 개선",
        },
        {
          name: "Service Integration",
          description: "FastAPI 기반 AI 서비스 API 구축, 실시간 추론 시스템 개발",
        },
      ],
    },
    {
      category: "데이터 분석 & 실험",
      icon: BarChart3,
      color: "purple",
      technologies: [
        {
          name: "Experimental Design",
          description: "사용자 데이터 기반 성능 실험 설계, 통계적 유의성 검증",
        },
        {
          name: "Data Processing",
          description: "대규모 텍스트 데이터 전처리, 학습 데이터셋 구성 및 품질 관리",
        },
        {
          name: "Performance Metrics",
          description: "BLEU, ROUGE, BERTScore 등 생성 모델 평가 지표 활용",
        },
        {
          name: "Insight Generation",
          description: "데이터 분석 결과 시각화, 비즈니스 인사이트 도출 및 리포팅",
        },
      ],
    },
  ]

  const experiences = [
    {
      title: "LLM 파인튜닝 전문가",
      description: "SFT & LoRA 기반 모델 최적화",
      details: [
        "KoBERT 모델 SFT 데이터셋 구성 및 파인튜닝 수행",
        "LoRA 기법으로 파라미터 효율적 학습, 메모리 사용량 70% 절약",
        "파인튜닝 전후 성능 분석, 정확도 25% 향상 달성",
      ],
      icon: Brain,
      color: "blue",
    },
    {
      title: "RAG 시스템 아키텍트",
      description: "검색 증강 생성 시스템 설계",
      details: [
        "Hybrid Search + Re-Ranking 기반 RAG 파이프라인 구축",
        "Vector DB 최적화로 검색 속도 3배 개선",
        "프롬프트 엔지니어링으로 응답 품질 40% 향상",
      ],
      icon: Zap,
      color: "emerald",
    },
    {
      title: "AI 서비스 개발자",
      description: "생성형 AI 기반 서비스 구현",
      details: [
        "LangGraph 활용 멀티턴 대화 AI 에이전트 개발",
        "FastAPI 기반 실시간 추론 API 서버 구축",
        "사용자 피드백 기반 모델 성능 지속 개선",
      ],
      icon: Server,
      color: "purple",
    },
    {
      title: "데이터 분석 & 실험 설계자",
      description: "성능 실험 및 인사이트 도출",
      details: [
        "A/B 테스트 설계로 모델 성능 객관적 평가",
        "사용자 행동 데이터 분석 및 개선점 도출",
        "실험 결과 시각화 및 비즈니스 리포팅",
      ],
      icon: BarChart3,
      color: "orange",
    },
  ]

  const projects = [
    {
      title: "KoBERT SFT 파인튜닝",
      subtitle: "감정 분석 모델 성능 최적화",
      period: "6주 (개인 프로젝트)",
      tech: ["KoBERT", "SFT", "LoRA", "PyTorch", "Transformers"],
      description: "한국어 감정 분석을 위한 KoBERT 모델 Supervised Fine-Tuning 및 LoRA 경량화 적용",
      challenges: [
        "SFT 데이터셋 구성: 10만개 한국어 감정 라벨링 데이터 전처리 및 품질 검증",
        "LoRA 파인튜닝: 파라미터 효율적 학습으로 GPU 메모리 사용량 70% 절약",
        "성능 분석: Precision, Recall, F1-Score 기반 모델 성능 평가 및 개선",
        "하이퍼파라미터 튜닝: Learning Rate, Batch Size 최적화로 수렴 안정성 확보",
      ],
      achievement: "베이스라인 대비 F1-Score 25% 향상 (0.72 → 0.90)",
      keyTech: "SFT 데이터 구성 및 LoRA 기반 효율적 파인튜닝",
      color: "blue",
    },
    {
      title: "RAG 기반 QA 시스템",
      subtitle: "문서 검색 증강 생성 서비스",
      period: "8주 (팀 프로젝트, AI 시스템 리드)",
      tech: ["RAG", "LangChain", "Vector DB", "GPT-4", "FAISS"],
      description: "기업 내부 문서 기반 질의응답 시스템, 검색 증강 생성으로 정확도 높은 답변 제공",
      challenges: [
        "RAG 파이프라인: 문서 청킹, 임베딩, 검색, 생성 단계별 최적화",
        "Hybrid Search: BM25 + Dense Retrieval 조합으로 검색 성능 향상",
        "프롬프트 엔지니어링: Few-shot 예시 활용으로 답변 품질 개선",
        "성능 실험: 다양한 청킹 전략과 검색 알고리즘 A/B 테스트",
      ],
      achievement: "답변 정확도 85%, 사용자 만족도 4.2/5.0 달성",
      keyTech: "RAG 시스템 설계 및 검색-생성 파이프라인 최적화",
      color: "emerald",
    },
    {
      title: "AI Agent 대화 시스템",
      subtitle: "멀티턴 대화 AI 에이전트",
      period: "5주 (개인 프로젝트)",
      tech: ["LangGraph", "GPT-4", "FastAPI", "Redis", "Streamlit"],
      description: "상태 기반 멀티턴 대화가 가능한 AI 에이전트, 컨텍스트 유지 및 개인화 응답 제공",
      challenges: [
        "상태 관리: LangGraph로 대화 컨텍스트 및 사용자 세션 상태 관리",
        "개인화: 사용자 프로필 기반 맞춤형 응답 생성 로직 구현",
        "실시간 처리: FastAPI + WebSocket으로 실시간 대화 인터페이스 구축",
        "성능 모니터링: 응답 시간, 만족도 지표 실시간 추적 시스템",
      ],
      achievement: "평균 응답 시간 2초 이내, 대화 지속률 78% 달성",
      keyTech: "LangGraph 기반 상태 관리 및 멀티턴 대화 시스템",
      color: "purple",
    },
  ]

  const getColorClasses = (color: string, type: "bg" | "text" | "border" | "hover") => {
    const colorMap = {
      blue: {
        bg: "bg-blue-50",
        text: "text-blue-600",
        border: "border-blue-200",
        hover: "hover:bg-blue-100",
      },
      emerald: {
        bg: "bg-emerald-50",
        text: "text-emerald-600",
        border: "border-emerald-200",
        hover: "hover:bg-emerald-100",
      },
      purple: {
        bg: "bg-purple-50",
        text: "text-purple-600",
        border: "border-purple-200",
        hover: "hover:bg-purple-100",
      },
      orange: {
        bg: "bg-orange-50",
        text: "text-orange-600",
        border: "border-orange-200",
        hover: "hover:bg-orange-100",
      },
    }
    return colorMap[color as keyof typeof colorMap]?.[type] || ""
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="text-xl font-bold text-gray-900">AI Data Scientist</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {[
                { name: "소개", id: "section-0" },
                { name: "프로필", id: "section-1" },
                { name: "기술", id: "section-3" },
                { name: "경험", id: "section-4" },
                { name: "프로젝트", id: "section-5" },
                { name: "연락처", id: "section-6" },
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-colors font-medium ${
                    activeSection === item.id ? "text-blue-600" : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="section-0" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              {typedText}
              <span className="text-blue-600">|</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              <span className="text-blue-600 font-semibold">LLM 파인튜닝</span>부터{" "}
              <span className="text-emerald-600 font-semibold">RAG 시스템</span>,{" "}
              <span className="text-purple-600 font-semibold">AI 에이전트</span>까지
              <br />
              생성형 AI의 전 영역을 다루는 데이터사이언티스트
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {[
              { name: "LLM Fine-tuning", color: "blue" },
              { name: "RAG Systems", color: "emerald" },
              { name: "AI Agent", color: "purple" },
              { name: "Prompt Engineering", color: "orange" },
              { name: "Performance Analysis", color: "blue" },
            ].map((tag, index) => (
              <span
                key={index}
                className={`px-4 py-2 ${getColorClasses(tag.color, "bg")} ${getColorClasses(
                  tag.color,
                  "text",
                )} rounded-full text-sm font-medium`}
              >
                {tag.name}
              </span>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }}>
            <Button
              onClick={() => scrollToSection("section-1")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-lg"
            >
              포트폴리오 보기
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown className="w-6 h-6 text-gray-400 animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* Profile Section */}
      <section id="section-1" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-16 text-center text-gray-900"
          >
            개인정보
          </motion.h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Profile Photo & Basic Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <Card className="p-8 border-0 shadow-sm text-center">
                <div className="mb-6">
                  <div className="w-48 h-48 mx-auto bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mb-4">
                    <User className="w-24 h-24 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">김AI개발</h3>
                  <p className="text-lg text-blue-600 font-medium">AI Data Scientist</p>
                </div>

                <div className="space-y-4 text-left">
                  <div className="flex items-center text-gray-700">
                    <Calendar className="w-5 h-5 mr-3 text-blue-600" />
                    <span>1996.08.22</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <MapPin className="w-5 h-5 mr-3 text-blue-600" />
                    <span>서울특별시 서초구</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Phone className="w-5 h-5 mr-3 text-blue-600" />
                    <span>010-9876-5432</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Mail className="w-5 h-5 mr-3 text-blue-600" />
                    <span>your.email@example.com</span>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Education & Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="space-y-8">
                {/* Education */}
                <Card className="p-8 border-0 shadow-sm">
                  <CardHeader className="p-0 mb-6">
                    <CardTitle className="text-2xl text-gray-900 flex items-center">
                      <GraduationCap className="w-7 h-7 mr-3 text-blue-600" />
                      학력
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 space-y-6">
                    <div className="border-l-4 border-blue-200 pl-6 py-2">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-semibold text-gray-900">○○대학교 컴퓨터공학과</h4>
                        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                          2015.03 - 2019.02
                        </span>
                      </div>
                      <p className="text-blue-600 font-medium mb-1">데이터사이언스학과 학사</p>
                      <p className="text-gray-600 text-sm">졸업 논문</p>
                    </div>

                    <div className="border-l-4 border-emerald-200 pl-6 py-2">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-semibold text-gray-900">AI 교육과정 수료</h4>
                        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                          2023.01 - 2023.08
                        </span>
                      </div>
                      <p className="text-emerald-600 font-medium mb-1">AI 엔지니어링 과정 수료</p>
                      <p className="text-gray-600 text-sm">NLP 특화 트랙 | 팀 프로젝트 5회 수행</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Certifications */}
                <Card className="p-8 border-0 shadow-sm">
                  <CardHeader className="p-0 mb-6">
                    <CardTitle className="text-2xl text-gray-900 flex items-center">
                      <Award className="w-7 h-7 mr-3 text-purple-600" />
                      자격증 & 수상
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h5 className="font-semibold text-gray-900 mb-3">자격증</h5>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                            <span className="text-blue-800 font-medium">ADsP</span>
                            <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded">2023.03</span>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg">
                            <span className="text-emerald-800 font-medium">TensorFlow Developer</span>
                            <span className="text-xs text-emerald-600 bg-emerald-100 px-2 py-1 rounded">2023.06</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h5 className="font-semibold text-gray-900 mb-3">수상 경력</h5>
                        <div className="space-y-3"></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="section-2" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-16 text-center text-gray-900"
          >
            생성형 AI 전문가
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 border-0 shadow-sm">
                <CardContent className="space-y-6 p-0">
                  <p className="text-lg leading-relaxed text-gray-700">
                    <span className="text-blue-600 font-semibold">LLM 파인튜닝</span>부터{" "}
                    <span className="text-emerald-600 font-semibold">RAG 시스템</span>,{" "}
                    <span className="text-purple-600 font-semibold">AI 에이전트</span> 개발까지 생성형 AI의 전 영역에서
                    실무 경험을 보유하고 있습니다.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    특히 <span className="font-semibold">PyTorch 기반 모델 구현</span>과{" "}
                    <span className="font-semibold">성능 분석 및 최적화</span>에 강점을 가지고 있으며, 고객사 프로젝트
                    경험을 통해 비즈니스 요구사항을 기술적으로 구현하는 능력을 갖추었습니다.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 border-0 shadow-sm">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-xl text-gray-900 flex items-center">
                    <Target className="w-6 h-6 mr-2 text-blue-600" />
                    핵심 역량
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <ul className="space-y-3">
                    {[
                      "LLM SFT 데이터 구성 및 파인튜닝 실무 경험",
                      "LoRA, QLoRA 등 경량화 기법 활용 전문성",
                      "RAG 시스템 설계 및 성능 최적화",
                      "AI 에이전트 개발 및 프롬프트 엔지니어링",
                      "PyTorch 기반 딥러닝 모델 구현 및 분석",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start text-gray-700">
                        <span className="text-blue-600 mr-3 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="section-3" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-16 text-center text-gray-900"
          >
            기술 스택
          </motion.h2>

          <div className="space-y-12">
            {skills.map((skillCategory, categoryIndex) => (
              <motion.div
                key={skillCategory.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              >
                <Card className="p-8 border-0 shadow-sm">
                  <CardHeader className="pb-6">
                    <CardTitle className="text-2xl text-gray-900 flex items-center">
                      <div
                        className={`w-10 h-10 ${getColorClasses(skillCategory.color, "bg")} rounded-lg flex items-center justify-center mr-3`}
                      >
                        <skillCategory.icon className={`w-6 h-6 ${getColorClasses(skillCategory.color, "text")}`} />
                      </div>
                      {skillCategory.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      {skillCategory.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={tech.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: categoryIndex * 0.2 + techIndex * 0.1 }}
                          className={`border-l-4 ${getColorClasses(skillCategory.color, "border")} pl-4 py-2`}
                        >
                          <h4 className="font-semibold text-gray-900 mb-2">{tech.name}</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">{tech.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16"
          >
            <Card className="p-8 border-0 shadow-sm">
              <CardHeader className="text-center mb-8">
                <CardTitle className="text-2xl text-gray-900">기술 스택 상세</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="llm" className="w-full">
                  <TabsList className="grid w-full grid-cols-4 mb-8">
                    <TabsTrigger value="llm" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                      LLM/Fine-tuning
                    </TabsTrigger>
                    <TabsTrigger
                      value="genai"
                      className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white"
                    >
                      생성형 AI
                    </TabsTrigger>
                    <TabsTrigger
                      value="analysis"
                      className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
                    >
                      데이터 분석
                    </TabsTrigger>
                    <TabsTrigger
                      value="tools"
                      className="data-[state=active]:bg-orange-600 data-[state=active]:text-white"
                    >
                      개발 도구
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="llm" className="mt-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {[
                        "PyTorch",
                        "Transformers",
                        "KoBERT",
                        "GPT-4",
                        "LoRA",
                        "QLoRA",
                        "SFT",
                        "PEFT",
                        "Fine-tuning",
                        "Model Optimization",
                        "Performance Analysis",
                        "Hyperparameter Tuning",
                      ].map((tech) => (
                        <div
                          key={tech}
                          className="p-2 text-center bg-blue-50 border border-blue-200 rounded text-blue-700 text-sm hover:bg-blue-100 transition-colors"
                        >
                          {tech}
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="genai" className="mt-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {[
                        "RAG",
                        "LangChain",
                        "LangGraph",
                        "Vector DB",
                        "FAISS",
                        "AI Agent",
                        "Prompt Engineering",
                        "Few-shot Learning",
                        "Chain-of-Thought",
                        "Hybrid Search",
                        "Re-ranking",
                        "Context Management",
                      ].map((tech) => (
                        <div
                          key={tech}
                          className="p-2 text-center bg-emerald-50 border border-emerald-200 rounded text-emerald-700 text-sm hover:bg-emerald-100 transition-colors"
                        >
                          {tech}
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="analysis" className="mt-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {[
                        "A/B Testing",
                        "Statistical Analysis",
                        "Performance Metrics",
                        "BLEU Score",
                        "ROUGE Score",
                        "BERTScore",
                        "Data Visualization",
                        "Experimental Design",
                        "Pandas",
                        "NumPy",
                        "Matplotlib",
                        "Seaborn",
                      ].map((tech) => (
                        <div
                          key={tech}
                          className="p-2 text-center bg-purple-50 border border-purple-200 rounded text-purple-700 text-sm hover:bg-purple-100 transition-colors"
                        >
                          {tech}
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="tools" className="mt-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {[
                        "Python",
                        "FastAPI",
                        "Streamlit",
                        "Docker",
                        "Git",
                        "AWS",
                        "Redis",
                        "PostgreSQL",
                        "Jupyter",
                        "MLflow",
                        "Weights & Biases",
                        "TensorBoard",
                      ].map((tech) => (
                        <div
                          key={tech}
                          className="p-2 text-center bg-orange-50 border border-orange-200 rounded text-orange-700 text-sm hover:bg-orange-100 transition-colors"
                        >
                          {tech}
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="section-4" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-16 text-center text-gray-900"
          >
            주요 경험
          </motion.h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="pb-6">
                    <div className="flex items-center">
                      <div className={`p-3 rounded-lg ${getColorClasses(exp.color, "bg")} mr-4`}>
                        <exp.icon className={`w-8 h-8 ${getColorClasses(exp.color, "text")}`} />
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-gray-900">{exp.title}</CardTitle>
                        <CardDescription className="text-lg text-gray-600 mt-1">{exp.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {exp.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start text-gray-700">
                          <span className={`${getColorClasses(exp.color, "text")} mr-3 mt-1`}>•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="section-5" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-16 text-center text-gray-900"
          >
            주요 프로젝트
          </motion.h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`w-10 h-10 ${getColorClasses(project.color, "bg")} rounded-lg flex items-center justify-center`}
                      >
                        <Server className={`w-6 h-6 ${getColorClasses(project.color, "text")}`} />
                      </div>
                      <div className="px-3 py-1 bg-gray-100 text-gray-600 text-sm font-medium rounded-full">
                        {project.period}
                      </div>
                    </div>
                    <CardTitle className="text-xl text-gray-900 leading-tight mb-2">{project.title}</CardTitle>
                    <div className={`${getColorClasses(project.color, "text")} font-medium mb-3`}>
                      {project.subtitle}
                    </div>
                    <CardDescription className="text-gray-600 text-base leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6 p-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <div
                          key={idx}
                          className={`px-3 py-1 ${getColorClasses(project.color, "bg")} ${getColorClasses(
                            project.color,
                            "text",
                          )} text-sm font-medium rounded-full`}
                        >
                          {tech}
                        </div>
                      ))}
                    </div>

                    <div className="space-y-5">
                      <div>
                        <h4 className="font-bold text-gray-900 text-base mb-3">주요 도전과 해결</h4>
                        <div className="space-y-3">
                          {project.challenges.map((challenge, idx) => (
                            <div key={idx} className="flex items-start text-gray-700 text-sm leading-relaxed">
                              <span className={`${getColorClasses(project.color, "text")} mr-3 mt-1`}>•</span>
                              <span>{challenge}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="border-t border-gray-100 pt-5 space-y-4">
                        <div className={`${getColorClasses(project.color, "bg")} p-4 rounded-lg`}>
                          <h5 className="font-bold text-gray-900 text-sm mb-2">핵심 기술</h5>
                          <p className="text-gray-700 text-sm leading-relaxed">{project.keyTech}</p>
                        </div>
                        <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-amber-200 p-5 rounded-xl shadow-sm">
                          <div className="flex items-center mb-3">
                            <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center mr-2">
                              <span className="text-white text-xs font-bold">✓</span>
                            </div>
                            <h5 className="font-bold text-amber-900 text-base">🏆 주요 성과</h5>
                          </div>
                          <p className="text-amber-800 font-semibold text-base leading-relaxed bg-white/50 p-3 rounded-lg border border-amber-100">
                            {project.achievement}
                          </p>
                        </div>
                        <div className="pt-4 border-t border-gray-100">
                          <div className="flex gap-3">
                            <Button
                              variant="outline"
                              size="sm"
                              className={`flex-1 ${getColorClasses(project.color, "text")} ${getColorClasses(project.color, "hover")} border-current`}
                            >
                              <Github className="w-4 h-4 mr-2" />
                              GitHub
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className={`flex-1 ${getColorClasses(project.color, "text")} ${getColorClasses(project.color, "hover")} border-current`}
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Demo
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="section-6" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-16 text-gray-900"
          >
            연락하기
          </motion.h2>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Card className="p-8 border-0 shadow-sm">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">함께 생성형 AI의 미래를 만들어가요</h3>
                <p className="text-gray-600 text-lg">
                  LLM 파인튜닝과 RAG 시스템 전문가와 함께 혁신적인 AI 서비스를 구축하고 싶으시다면 언제든 연락주세요.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="flex flex-col items-center p-4 bg-blue-50 rounded-lg">
                  <Mail className="w-8 h-8 text-blue-600 mb-2" />
                  <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600 text-sm">ai.datascientist@example.com</p>
                </div>
                <div className="flex flex-col items-center p-4 bg-emerald-50 rounded-lg">
                  <Github className="w-8 h-8 text-emerald-600 mb-2" />
                  <h4 className="font-semibold text-gray-900 mb-1">GitHub</h4>
                  <p className="text-gray-600 text-sm">github.com/ai-datascientist</p>
                </div>
                <div className="flex flex-col items-center p-4 bg-purple-50 rounded-lg">
                  <Linkedin className="w-8 h-8 text-purple-600 mb-2" />
                  <h4 className="font-semibold text-gray-900 mb-1">LinkedIn</h4>
                  <p className="text-gray-600 text-sm">linkedin.com/in/ai-datascientist</p>
                </div>
              </div>

              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-lg">
                <Mail className="w-5 h-5 mr-2" />
                연락하기
              </Button>
            </Card>

            <div className="mt-12 text-gray-500">
              <p>© 2024 AI Data Scientist Portfolio. Built with Next.js</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
