import { useState, useEffect, useCallback } from 'react';
import { 
  ChevronRight, 
  ChevronLeft, 
  Sparkles, 
  MessageSquare, 
  Lightbulb, 
  Heart, 
  Wand2,
  UserCircle,
  CheckCircle,
  Menu,
  X,
  ExternalLink,
  Copy,
  Check,
  Mic,
  Globe,
  Brain,
  BookOpen,
  Camera,
  FileText,
  Zap
} from 'lucide-react';
import './App.css';

// Slide types
interface SlideProps {
  isActive: boolean;
  onNext: () => void;
  onPrev: () => void;
}

// Progress Bar Component
const ProgressBar = ({ current, total }: { current: number; total: number }) => {
  const progress = ((current + 1) / total) * 100;
  return (
    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
      <div 
        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

// Copy Button Component
const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button 
      onClick={copy}
      className="ml-2 p-2 hover:bg-gray-100 rounded-lg transition-colors"
      title="Copy to clipboard"
    >
      {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 text-gray-400" />}
    </button>
  );
};

// Slide 1: Hero
const HeroSlide = ({ isActive, onNext }: SlideProps) => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (isActive) {
      setTimeout(() => setAnimated(true), 100);
    }
  }, [isActive]);

  return (
    <div className="slide-container bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-purple-300 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        <div className={`transition-all duration-700 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 px-5 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
            <Sparkles className="w-4 h-4" /> 1 Hour Hands-On Course
          </span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
          <span className={`block transition-all duration-700 delay-100 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Welcome to the
          </span>
          <span className={`block text-blue-200 transition-all duration-700 delay-200 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            AI Course
          </span>
        </h1>

        <p className={`text-xl text-blue-100 max-w-2xl mx-auto transition-all duration-700 delay-300 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Learn to use Google Gemini and ChatGPT with confidence. Ask questions, create custom assistants, use voice and images, and get helpful answers from AI.
        </p>

        <p className={`text-blue-200/80 text-sm font-medium transition-all duration-700 delay-300 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
           Made By Junyu
        </p>

        <div className={`flex flex-wrap justify-center gap-4 transition-all duration-700 delay-400 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <Mic className="w-5 h-5 text-blue-200" />
            <span className="text-sm">Voice Commands</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <Camera className="w-5 h-5 text-blue-200" />
            <span className="text-sm">Image Recognition</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <Wand2 className="w-5 h-5 text-blue-200" />
            <span className="text-sm">Create Custom AI</span>
          </div>
        </div>

        <button
          onClick={onNext}
          className={`bg-white text-blue-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-xl ${animated ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
        >
          Start Learning <ChevronRight className="inline ml-2" />
        </button>
      </div>

      {/* Bottom Info Bar */}
      <div className={`absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-sm py-4 transition-all duration-700 delay-600 ${animated ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="max-w-4xl mx-auto px-4 flex justify-center items-center gap-8 text-sm">
          <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-200" /> Free to Use</span>
          <span className="flex items-center gap-2"><Heart className="w-4 h-4 text-blue-200" /> Easy to Follow</span>
          <span className="flex items-center gap-2"><Lightbulb className="w-4 h-4 text-blue-200" /> Step-by-Step</span>
        </div>
      </div>
    </div>
  );
};

// Slide 2: What is AI
const WhatIsAISlide = ({ isActive, onNext, onPrev }: SlideProps) => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (isActive) setTimeout(() => setAnimated(true), 100);
  }, [isActive]);

  return (
    <div className="slide-container bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <span className={`inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4 transition-all duration-500 ${animated ? 'opacity-100' : 'opacity-0'}`}>
            Lesson 1 of 10
          </span>
          <h2 className={`text-3xl sm:text-4xl font-bold text-gray-800 transition-all duration-700 delay-100 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            What is AI?
          </h2>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-8 mb-8">
          <div className={`flex items-start gap-6 transition-all duration-700 delay-200 ${animated ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}`}>
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Brain className="w-10 h-10 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">AI = Artificial Intelligence</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-3">
                AI is computer technology that can understand questions, have conversations, write text, analyze images, and help with many tasks—just by typing or speaking to it naturally.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Think of AI as a very smart assistant that's always available to help. It has read millions of books, articles, and websites, so it knows about almost any topic. You can ask it questions in plain English, and it will respond in a helpful, friendly way.
              </p>
            </div>
          </div>
        </div>

        {/* Real World Examples */}
        <div className={`bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-6 mb-6 transition-all duration-700 delay-300 ${animated ? 'opacity-100' : 'opacity-0'}`}>
          <h4 className="font-bold text-gray-800 mb-4 text-lg">💡 What Can AI Help You With?</h4>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-4">
              <p className="text-gray-700"><span className="font-semibold">💬 Answer questions:</span> "What's the weather like?" or "How do I cook salmon?"</p>
            </div>
            <div className="bg-white rounded-xl p-4">
              <p className="text-gray-700"><span className="font-semibold">✍️ Write messages:</span> Help compose emails, birthday cards, or thank you notes</p>
            </div>
            <div className="bg-white rounded-xl p-4">
              <p className="text-gray-700"><span className="font-semibold">📚 Explain things:</span> Break down complex topics into simple language</p>
            </div>
            <div className="bg-white rounded-xl p-4">
              <p className="text-gray-700"><span className="font-semibold">🎯 Give suggestions:</span> Recommend recipes, activities, or gift ideas</p>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { icon: MessageSquare, title: "Chat", desc: "Have conversations" },
            { icon: Mic, title: "Speak", desc: "Use your voice" },
            { icon: Camera, title: "See Images", desc: "Analyze photos" },
            { icon: FileText, title: "Write", desc: "Create documents" },
          ].map((item, i) => (
            <div 
              key={i}
              className={`bg-white rounded-2xl p-6 shadow-md text-center transition-all duration-500 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${400 + i * 100}ms` }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-blue-600" />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className={`bg-blue-50 rounded-2xl p-6 transition-all duration-700 delay-700 ${animated ? 'opacity-100' : 'opacity-0'}`}>
          <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
            <CheckCircle className="w-5 h-5" /> You Might Already Be Using AI:
          </h4>
          <ul className="grid sm:grid-cols-2 gap-3 text-gray-700">
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-500" /> Voice assistants (Siri, Alexa)</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-500" /> Movie recommendations (Netflix)</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-500" /> GPS navigation apps</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-500" /> Spell check in emails</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-500" /> Photo organization</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-500" /> Smart home devices</li>
          </ul>
        </div>

        <div className={`flex justify-center gap-4 mt-8 transition-all duration-500 delay-800 ${animated ? 'opacity-100' : 'opacity-0'}`}>
          <button onClick={onPrev} className="px-8 py-3 rounded-full font-semibold border-2 border-gray-300 text-gray-600 hover:bg-gray-100 transition-all">
            <ChevronLeft className="inline mr-2" /> Back
          </button>
          <button onClick={onNext} className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 hover:scale-105 transition-all shadow-lg">
            Next: Meet Gemini <ChevronRight className="inline ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Slide 3: Google Gemini Overview
const GeminiOverviewSlide = ({ isActive, onNext, onPrev }: SlideProps) => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (isActive) setTimeout(() => setAnimated(true), 100);
  }, [isActive]);

  const features = [
    { icon: MessageSquare, title: "Text Chat", desc: "Type questions and get detailed answers" },
    { icon: Mic, title: "Voice Input", desc: "Tap the microphone and speak instead of typing" },
    { icon: Globe, title: "Web Search", desc: "Gemini can search the web for current information" },
    { icon: FileText, title: "Summarize", desc: "Paste long articles and get short summaries" },
    { icon: Zap, title: "Fast Answers", desc: "Get instant responses to your questions" },
    { icon: Wand2, title: "Gems", desc: "Create custom AI assistants for specific tasks" },
  ];

  return (
    <div className="slide-container bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className={`inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4 transition-all duration-500 ${animated ? 'opacity-100' : 'opacity-0'}`}>
            Lesson 2 of 10
          </span>
          <h2 className={`text-3xl sm:text-4xl font-bold text-gray-800 transition-all duration-700 delay-100 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Meet Google Gemini
          </h2>
          <p className={`text-gray-600 mt-4 text-lg transition-all duration-700 delay-200 ${animated ? 'opacity-100' : 'opacity-0'}`}>
            Google's friendly AI assistant - Free to use and easy to learn!
          </p>
        </div>

        {/* Why Gemini */}
        <div className={`bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mb-8 transition-all duration-700 delay-250 ${animated ? 'opacity-100' : 'opacity-0'}`}>
          <h3 className="text-xl font-bold text-gray-800 mb-3">✨ Why We're Learning Gemini</h3>
          <p className="text-gray-700 leading-relaxed">
            Gemini is made by Google, the same company behind Google Search. It's <span className="font-semibold">completely free to use</span>, works on your phone, tablet, or computer, and understands your questions in natural, everyday language. Best of all, it connects with other Google services you might already use like Gmail, Google Docs, and Google Photos!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {features.map((feature, i) => (
            <div 
              key={i}
              className={`bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-500 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${300 + i * 100}ms` }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">{feature.title}</h4>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Voice Feature Highlight */}
        <div className={`bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 text-white mb-8 transition-all duration-700 delay-800 ${animated ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <Mic className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">🎤 Voice Input (Perfect if You Don't Like Typing!)</h3>
              <p className="text-blue-100 mb-4">
                Instead of typing, just tap the microphone icon and speak your question. Gemini will understand your voice and respond - it's like having a conversation with a helpful friend!
              </p>
              <div className="bg-white/10 rounded-xl p-4">
                <p className="text-sm font-semibold text-blue-200 mb-2">How to use voice (4 easy steps):</p>
                <ol className="text-sm space-y-2">
                  <li className="flex gap-2"><span className="font-bold">1.</span> Open Gemini on your phone or computer</li>
                  <li className="flex gap-2"><span className="font-bold">2.</span> Look for the microphone icon 🎤 in the chat box</li>
                  <li className="flex gap-2"><span className="font-bold">3.</span> Tap it and speak your question clearly</li>
                  <li className="flex gap-2"><span className="font-bold">4.</span> Gemini will transcribe your words and answer!</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div className={`flex justify-center gap-4 transition-all duration-500 delay-900 ${animated ? 'opacity-100' : 'opacity-0'}`}>
          <button onClick={onPrev} className="px-8 py-3 rounded-full font-semibold border-2 border-gray-300 text-gray-600 hover:bg-gray-100 transition-all">
            <ChevronLeft className="inline mr-2" /> Back
          </button>
          <button onClick={onNext} className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 hover:scale-105 transition-all shadow-lg">
            Next: Using Gemini <ChevronRight className="inline ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Slide 4: How to Use Gemini
const UsingGeminiSlide = ({ isActive, onNext, onPrev }: SlideProps) => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (isActive) setTimeout(() => setAnimated(true), 100);
  }, [isActive]);

  return (
    <div className="slide-container bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <span className={`inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4 transition-all duration-500 ${animated ? 'opacity-100' : 'opacity-0'}`}>
            Lesson 3 of 10
          </span>
          <h2 className={`text-3xl sm:text-4xl font-bold text-gray-800 transition-all duration-700 delay-100 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            How to Access Gemini
          </h2>
        </div>

        <div className="space-y-6">
          {/* Step 1 */}
          <div className={`bg-white rounded-2xl p-6 flex items-start gap-6 shadow-md transition-all duration-700 delay-200 ${animated ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}`}>
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">1</div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Open Your Web Browser</h3>
              <p className="text-gray-600 mb-4">Use Chrome, Safari, Edge, or any browser.</p>
              <div className="bg-gray-50 rounded-xl p-4 border-2 border-blue-200">
                <p className="text-sm text-gray-500 mb-2">Go to:</p>
                <div className="flex items-center bg-white rounded-lg px-4 py-3 shadow-sm">
                  <span className="text-blue-600 font-mono text-lg">gemini.google.com</span>
                  <CopyButton text="gemini.google.com" />
                  <a 
                    href="https://gemini.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="ml-auto text-blue-600 hover:text-blue-800"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className={`bg-white rounded-2xl p-6 flex items-start gap-6 shadow-md transition-all duration-700 delay-300 ${animated ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}`}>
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">2</div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Sign In With Google</h3>
              <p className="text-gray-600 mb-4">If you have Gmail or YouTube, you already have an account.</p>
              <div className="flex items-center gap-3 text-sm">
                <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-lg">
                  <UserCircle className="w-5 h-5 text-blue-600" />
                  <span>Click "Sign In"</span>
                </div>
                <span className="text-gray-400">→</span>
                <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-lg">
                  <span>Enter Gmail</span>
                </div>
                <span className="text-gray-400">→</span>
                <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-lg">
                  <span>Enter password</span>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className={`bg-white rounded-2xl p-6 flex items-start gap-6 shadow-md transition-all duration-700 delay-400 ${animated ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}`}>
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">3</div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Start Chatting</h3>
              <p className="text-gray-600 mb-4">Type in the box or tap the microphone to speak.</p>
              <div className="bg-blue-50 rounded-xl p-4 border-2 border-blue-200">
                <div className="bg-white rounded-lg px-4 py-3 flex items-center gap-3 shadow-sm">
                  <div className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-gray-400 text-sm">
                    Type or speak your question...
                  </div>
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <Mic className="w-5 h-5 text-gray-500" />
                  </div>
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`flex justify-center gap-4 mt-8 transition-all duration-500 delay-500 ${animated ? 'opacity-100' : 'opacity-0'}`}>
          <button onClick={onPrev} className="px-8 py-3 rounded-full font-semibold border-2 border-gray-300 text-gray-600 hover:bg-gray-100 transition-all">
            <ChevronLeft className="inline mr-2" /> Back
          </button>
          <button onClick={onNext} className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 hover:scale-105 transition-all shadow-lg">
            Next: Asking Questions <ChevronRight className="inline ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Slide 5: Asking Questions
const AskingQuestionsSlide = ({ isActive, onNext, onPrev }: SlideProps) => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (isActive) setTimeout(() => setAnimated(true), 100);
  }, [isActive]);

  const examples = [
    { bad: "Tell me about dogs", good: "What are the best small dog breeds for apartment living with older adults?" },
    { bad: "Help with email", good: "Write a warm, friendly email to my grandson thanking him for the birthday gift" },
    { bad: "Healthy food", good: "Suggest 5 easy, heart-healthy dinner recipes that take under 30 minutes and use common ingredients" },
  ];

  return (
    <div className="slide-container bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <span className={`inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4 transition-all duration-500 ${animated ? 'opacity-100' : 'opacity-0'}`}>
            Lesson 4 of 10
          </span>
          <h2 className={`text-3xl sm:text-4xl font-bold text-gray-800 transition-all duration-700 delay-100 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            How to Ask Good Questions
          </h2>
        </div>

        {/* The Formula */}
        <div className={`bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white mb-8 transition-all duration-700 delay-200 ${animated ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Lightbulb className="w-6 h-6" /> The Secret Formula
          </h3>
          <div className="bg-white/20 rounded-xl p-4 text-center">
            <p className="text-lg font-medium">What you want + Details + How you want it</p>
          </div>
        </div>

        {/* Examples */}
        <div className="space-y-4 mb-8">
          {examples.map((example, i) => (
            <div 
              key={i}
              className={`bg-white rounded-2xl shadow-md overflow-hidden border transition-all duration-500 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${300 + i * 100}ms` }}
            >
              <div className="grid sm:grid-cols-2">
                <div className="p-5 bg-red-50 border-r border-red-100">
                  <p className="text-sm text-red-600 font-semibold mb-2 flex items-center gap-2">
                    <span className="w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center text-xs">✗</span>
                    Too Vague
                  </p>
                  <p className="text-gray-700">"{example.bad}"</p>
                </div>
                <div className="p-5 bg-green-50">
                  <p className="text-sm text-green-600 font-semibold mb-2 flex items-center gap-2">
                    <span className="w-5 h-5 bg-green-500 text-white rounded-full flex items-center justify-center text-xs">✓</span>
                    Much Better!
                  </p>
                  <p className="text-gray-700">"{example.good}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tips */}
        <div className={`bg-blue-50 rounded-2xl p-6 transition-all duration-700 delay-600 ${animated ? 'opacity-100' : 'opacity-0'}`}>
          <h4 className="font-bold text-blue-800 mb-4">Quick Tips:</h4>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <p className="text-gray-700 text-sm">Include who it's for</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <p className="text-gray-700 text-sm">Mention any restrictions</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <p className="text-gray-700 text-sm">Say how detailed you want it</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <p className="text-gray-700 text-sm">Ask follow-up questions!</p>
            </div>
          </div>
        </div>

        <div className={`flex justify-center gap-4 mt-8 transition-all duration-500 delay-700 ${animated ? 'opacity-100' : 'opacity-0'}`}>
          <button onClick={onPrev} className="px-8 py-3 rounded-full font-semibold border-2 border-gray-300 text-gray-600 hover:bg-gray-100 transition-all">
            <ChevronLeft className="inline mr-2" /> Back
          </button>
          <button onClick={onNext} className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 hover:scale-105 transition-all shadow-lg">
            Next: Creating Gems <ChevronRight className="inline ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Slide 6: Creating Gems
const CreatingGemsSlide = ({ isActive, onNext, onPrev }: SlideProps) => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (isActive) setTimeout(() => setAnimated(true), 100);
  }, [isActive]);

  const gemIdeas = [
    { name: "Recipe Helper", desc: "Suggests meals based on ingredients you have" },
    { name: "Email Writer", desc: "Helps write polite, friendly emails quickly" },
    { name: "Health Explainer", desc: "Explains medical terms in simple language" },
    { name: "Travel Planner", desc: "Plans trips based on your preferences" },
    { name: "Exercise Coach", desc: "Suggests gentle exercises for your level" },
    { name: "Memory Helper", desc: "Helps organize and recall information" },
  ];

  return (
    <div className="slide-container bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <span className={`inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4 transition-all duration-500 ${animated ? 'opacity-100' : 'opacity-0'}`}>
            Lesson 5 of 10
          </span>
          <h2 className={`text-3xl sm:text-4xl font-bold text-gray-800 transition-all duration-700 delay-100 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Creating Gems in Gemini
          </h2>
          <p className={`text-gray-600 mt-4 transition-all duration-700 delay-200 ${animated ? 'opacity-100' : 'opacity-0'}`}>
            Custom AI assistants for your specific needs
          </p>
        </div>

        {/* What are Gems */}
        <div className={`bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 text-white mb-8 transition-all duration-700 delay-300 ${animated ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Wand2 className="w-6 h-6" /> What is a Gem?
          </h3>
          <p className="text-purple-100">
            A Gem is a custom AI assistant you train for one specific task. Instead of explaining what you need every time, create a Gem once and use it whenever you need!
          </p>
        </div>

        {/* Step by Step */}
        <h3 className={`text-xl font-bold text-gray-800 mb-4 transition-all duration-700 delay-400 ${animated ? 'opacity-100' : 'opacity-0'}`}>
          How to Create a Gem:
        </h3>

        <div className="space-y-4 mb-8">
          {[
            "Click 'Gems' in the left sidebar (look for the sparkle icon)",
            "Click 'New Gem' or the + button",
            "Give your Gem a name and describe what it should do",
            "Click 'Save' - your Gem appears in the sidebar for quick access"
          ].map((step, i) => (
            <div 
              key={i}
              className={`flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm transition-all duration-500 ${animated ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}`}
              style={{ transitionDelay: `${500 + i * 100}ms` }}
            >
              <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">{i + 1}</div>
              <p className="text-gray-700 pt-2">{step}</p>
            </div>
          ))}
        </div>

        {/* Gem Ideas */}
        <div className={`bg-purple-50 rounded-2xl p-6 transition-all duration-700 delay-900 ${animated ? 'opacity-100' : 'opacity-0'}`}>
          <h4 className="font-bold text-purple-800 mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5" /> Helpful Gem Ideas:
          </h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {gemIdeas.map((gem, i) => (
              <div key={i} className="bg-white rounded-xl p-4 shadow-sm">
                <p className="font-semibold text-gray-800">{gem.name}</p>
                <p className="text-gray-600 text-sm">{gem.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={`flex justify-center gap-4 mt-8 transition-all duration-500 delay-1000 ${animated ? 'opacity-100' : 'opacity-0'}`}>
          <button onClick={onPrev} className="px-8 py-3 rounded-full font-semibold border-2 border-gray-300 text-gray-600 hover:bg-gray-100 transition-all">
            <ChevronLeft className="inline mr-2" /> Back
          </button>
          <button onClick={onNext} className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 hover:scale-105 transition-all shadow-lg">
            Next: Meet ChatGPT <ChevronRight className="inline ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Slide 7: ChatGPT Introduction
const ChatGPTSlide = ({ isActive, onNext, onPrev }: SlideProps) => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (isActive) setTimeout(() => setAnimated(true), 100);
  }, [isActive]);

  const features = [
    { icon: MessageSquare, title: "Conversations", desc: "Natural back-and-forth chat" },
    { icon: BookOpen, title: "Knowledge", desc: "Trained on vast information" },
    { icon: Zap, title: "Creative", desc: "Writes stories, poems, and more" },
    { icon: Camera, title: "Vision", desc: "Can analyze images you upload" },
    { icon: Mic, title: "Voice", desc: "Speak to it on mobile apps" },
    { icon: FileText, title: "Documents", desc: "Read and summarize files" },
  ];

  return (
    <div className="slide-container bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className={`inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4 transition-all duration-500 ${animated ? 'opacity-100' : 'opacity-0'}`}>
            Lesson 6 of 10
          </span>
          <h2 className={`text-3xl sm:text-4xl font-bold text-gray-800 transition-all duration-700 delay-100 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Meet ChatGPT
          </h2>
          <p className={`text-gray-600 mt-4 transition-all duration-700 delay-200 ${animated ? 'opacity-100' : 'opacity-0'}`}>
            OpenAI's conversational AI assistant
          </p>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white mb-10">
          <div className={`flex items-start gap-6 transition-all duration-700 delay-300 ${animated ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}`}>
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
              <MessageSquare className="w-10 h-10" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">What is ChatGPT?</h3>
              <p className="text-green-100 text-lg leading-relaxed">
                ChatGPT is an AI chatbot created by OpenAI. Like Gemini, you can ask it questions, have conversations, get help with writing, and much more. Many people find it helpful for everyday tasks.
              </p>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {features.map((feature, i) => (
            <div 
              key={i}
              className={`bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-500 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${400 + i * 100}ms` }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">{feature.title}</h4>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* How to Access */}
        <div className={`bg-green-50 rounded-2xl p-6 transition-all duration-700 delay-900 ${animated ? 'opacity-100' : 'opacity-0'}`}>
          <h4 className="font-bold text-green-800 mb-4">How to Access ChatGPT:</h4>
          <div className="flex flex-wrap items-center gap-4">
            <div className="bg-white rounded-xl px-6 py-4 shadow-sm flex items-center gap-3">
              <span className="text-green-600 font-mono">chatgpt.com</span>
              <CopyButton text="chatgpt.com" />
              <a 
                href="https://chatgpt.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-800"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-600 text-sm">Create a free account to start chatting</p>
          </div>
        </div>

        <div className={`flex justify-center gap-4 mt-8 transition-all duration-500 delay-1000 ${animated ? 'opacity-100' : 'opacity-0'}`}>
          <button onClick={onPrev} className="px-8 py-3 rounded-full font-semibold border-2 border-gray-300 text-gray-600 hover:bg-gray-100 transition-all">
            <ChevronLeft className="inline mr-2" /> Back
          </button>
          <button onClick={onNext} className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 hover:scale-105 transition-all shadow-lg">
            Next: Image Recognition <ChevronRight className="inline ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Slide 8: Image Recognition
const ImageRecognitionSlide = ({ isActive, onNext, onPrev }: SlideProps) => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (isActive) setTimeout(() => setAnimated(true), 100);
  }, [isActive]);

  const realExamples = [
    { 
      icon: "🌱",
      title: "Identify Plants", 
      example: "Take a photo of a flower in your garden",
      question: "What kind of plant is this? Is it safe for pets?"
    },
    { 
      icon: "💊",
      title: "Read Medicine Labels", 
      example: "Photo of your prescription bottle",
      question: "What does this medicine label say? What are the instructions?"
    },
    { 
      icon: "📋",
      title: "Read Small Print", 
      example: "Photo of a document or letter",
      question: "Can you read this text to me and summarize what it says?"
    },
    { 
      icon: "🍲",
      title: "Identify Food", 
      example: "Photo of ingredients in your fridge",
      question: "What meals can I make with these ingredients?"
    },
    { 
      icon: "🔧",
      title: "Fix Things", 
      example: "Photo of a broken appliance or remote",
      question: "How do I fix this? What button do I press?"
    },
    { 
      icon: "🗺️",
      title: "Translate Signs", 
      example: "Photo of foreign text or signs",
      question: "What does this sign say? Translate it to English."
    },
  ];

  return (
    <div className="slide-container bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <span className={`inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4 transition-all duration-500 ${animated ? 'opacity-100' : 'opacity-0'}`}>
            Lesson 7 of 10
          </span>
          <h2 className={`text-3xl sm:text-4xl font-bold text-gray-800 transition-all duration-700 delay-100 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Using Image Recognition in ChatGPT
          </h2>
          <p className={`text-gray-600 mt-4 text-lg transition-all duration-700 delay-200 ${animated ? 'opacity-100' : 'opacity-0'}`}>
            Show ChatGPT a picture and get instant answers about what's in it
          </p>
        </div>

        {/* What is it? */}
        <div className={`bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-6 text-white mb-6 transition-all duration-700 delay-300 ${animated ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Camera className="w-6 h-6" /> What is Image Recognition?
          </h3>
          <p className="text-orange-100 text-lg leading-relaxed">
            ChatGPT can "see" and understand photos you show it. Take a picture with your phone or tablet, upload it to ChatGPT, and ask questions about it. It's like having someone look at the photo and explain it to you!
          </p>
        </div>

        {/* Step by Step Guide */}
        <div className={`bg-white rounded-2xl p-6 shadow-sm mb-6 transition-all duration-700 delay-400 ${animated ? 'opacity-100' : 'opacity-0'}`}>
          <h3 className="text-xl font-bold text-gray-800 mb-5 flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-orange-500" /> Step-by-Step: How to Use It
          </h3>

          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">1</div>
              <div className="flex-1">
                <p className="font-bold text-gray-800 text-lg mb-2">Open ChatGPT</p>
                <p className="text-gray-600">Go to <span className="font-semibold">chatgpt.com</span> or open the ChatGPT app on your phone</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">2</div>
              <div className="flex-1">
                <p className="font-bold text-gray-800 text-lg mb-2">Find the Camera Icon</p>
                <p className="text-gray-600 mb-2">In the chat box at the bottom, look for one of these:</p>
                <div className="bg-orange-50 p-3 rounded-lg">
                  <p className="text-gray-700">📎 <span className="font-semibold">Paperclip icon</span> - Click this, then choose "Upload from device"</p>
                  <p className="text-gray-700 mt-1">📷 <span className="font-semibold">Camera icon</span> - Click to take a photo or upload one</p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">3</div>
              <div className="flex-1">
                <p className="font-bold text-gray-800 text-lg mb-2">Choose Your Photo</p>
                <p className="text-gray-600">You can either:</p>
                <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                  <li><span className="font-semibold">Take a new photo</span> with your camera</li>
                  <li><span className="font-semibold">Upload an existing photo</span> from your gallery</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">4</div>
              <div className="flex-1">
                <p className="font-bold text-gray-800 text-lg mb-2">Ask Your Question</p>
                <p className="text-gray-600 mb-2">Type what you want to know about the image. Examples:</p>
                <div className="bg-blue-50 p-3 rounded-lg space-y-2">
                  <p className="text-gray-700">💬 "What is this plant called?"</p>
                  <p className="text-gray-700">💬 "Read this label for me"</p>
                  <p className="text-gray-700">💬 "What does this say?"</p>
                  <p className="text-gray-700">💬 "Explain what's in this picture"</p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">5</div>
              <div className="flex-1">
                <p className="font-bold text-gray-800 text-lg mb-2">Press Send and Wait</p>
                <p className="text-gray-600">ChatGPT will look at your photo and give you an answer in a few seconds!</p>
              </div>
            </div>
          </div>
        </div>

        {/* Real Life Examples */}
        <div className={`bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 mb-6 transition-all duration-700 delay-600 ${animated ? 'opacity-100' : 'opacity-0'}`}>
          <h3 className="text-xl font-bold text-gray-800 mb-5 flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-orange-500" /> Real-Life Examples You Can Try
          </h3>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {realExamples.map((example, i) => (
              <div 
                key={i} 
                className="bg-white rounded-xl p-5 shadow-sm transition-all duration-500 hover:shadow-md"
                style={{ transitionDelay: `${700 + i * 50}ms` }}
              >
                <div className="text-3xl mb-3">{example.icon}</div>
                <h4 className="font-bold text-gray-800 mb-2">{example.title}</h4>
                <p className="text-gray-600 text-sm mb-2">
                  <span className="font-semibold">Example: </span>{example.example}
                </p>
                <div className="bg-blue-50 p-3 rounded-lg mt-3">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">Ask: </span>"{example.question}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Important Tips */}
        <div className={`bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-6 transition-all duration-700 delay-800 ${animated ? 'opacity-100' : 'opacity-0'}`}>
          <h3 className="text-lg font-bold text-yellow-900 mb-3 flex items-center gap-2">
            💡 Helpful Tips for Better Results
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <span><span className="font-semibold">Take clear photos:</span> Make sure the image isn't blurry</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <span><span className="font-semibold">Good lighting:</span> Take photos in bright light so text is readable</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <span><span className="font-semibold">Be specific:</span> Instead of "What is this?", ask "What plant is this and how do I care for it?"</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <span><span className="font-semibold">Privacy:</span> Don't upload photos with personal information like credit cards or passwords</span>
            </li>
          </ul>
        </div>

        <div className={`flex flex-wrap justify-center gap-4 mt-8 transition-all duration-500 delay-1000 ${animated ? 'opacity-100' : 'opacity-0'}`}>
          <button onClick={onPrev} className="px-8 py-4 rounded-full font-semibold border-2 border-gray-300 text-gray-600 hover:bg-gray-100 transition-all text-lg">
            <ChevronLeft className="inline mr-2" /> Back
          </button>
          <button onClick={onNext} className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 hover:scale-105 transition-all shadow-lg text-lg">
            Next: Safety Tips <ChevronRight className="inline ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Slide 9: Try It Out Now!
const PracticeSlide = ({ isActive, onPrev }: SlideProps) => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (isActive) setTimeout(() => setAnimated(true), 100);
  }, [isActive]);

  return (
    <div className="slide-container bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <span className={`inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4 transition-all duration-500 ${animated ? 'opacity-100' : 'opacity-0'}`}>
            Lesson 9 & 10 of 10
          </span>
          <h2 className={`text-3xl sm:text-4xl font-bold text-gray-800 transition-all duration-700 delay-100 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Try It Out Now!
          </h2>
          <p className={`text-gray-600 mt-4 text-lg transition-all duration-700 delay-200 ${animated ? 'opacity-100' : 'opacity-0'}`}>
            Let's practice what you've learned with three hands-on activities
          </p>
        </div>

        <div className="space-y-6">
          {/* Activity 1: Chat with Gemini */}
          <div className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 ${animated ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`} style={{ transitionDelay: '300ms' }}>
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold">1</div>
                <div>
                  <h3 className="text-2xl font-bold">Chat with Gemini</h3>
                  <p className="text-blue-100">Practice asking questions to AI</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <h4 className="font-bold text-gray-800 mb-2 text-lg">📝 What to do:</h4>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>Go to <span className="font-semibold text-blue-600">gemini.google.com</span></li>
                  <li>Sign in with your Google account (if needed)</li>
                  <li>Try asking one of these questions:</li>
                </ol>
              </div>

              <div className="space-y-3 mb-4">
                <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                  <p className="text-gray-800 mb-2">💬 "What are 5 simple exercises I can do at home for 10 minutes daily?"</p>
                  <CopyButton text="What are 5 simple exercises I can do at home for 10 minutes daily?" />
                </div>
                <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                  <p className="text-gray-800 mb-2">💬 "Explain what a podcast is in simple terms"</p>
                  <CopyButton text="Explain what a podcast is in simple terms" />
                </div>
                <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                  <p className="text-gray-800 mb-2">💬 "I have chicken, potatoes, and carrots. What can I cook?"</p>
                  <CopyButton text="I have chicken, potatoes, and carrots. What can I cook?" />
                </div>
              </div>

              <a 
                href="https://gemini.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 transition-all shadow-md"
              >
                Open Gemini <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Activity 2: ChatGPT Image Recognition */}
          <div className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 ${animated ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`} style={{ transitionDelay: '400ms' }}>
            <div className="bg-gradient-to-r from-orange-600 to-red-600 p-6 text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold">2</div>
                <div>
                  <h3 className="text-2xl font-bold">ChatGPT Image Recognition</h3>
                  <p className="text-orange-100">Upload a photo and ask about it</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <h4 className="font-bold text-gray-800 mb-2 text-lg">📸 What to do:</h4>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>Go to <span className="font-semibold text-green-600">chatgpt.com</span></li>
                  <li>Click the <span className="font-semibold">📎 paperclip icon</span> at the bottom</li>
                  <li>Upload a photo (or take one)</li>
                  <li>Ask ChatGPT about the photo</li>
                </ol>
              </div>

              <div className="bg-orange-50 rounded-lg p-4 mb-4 border-l-4 border-orange-500">
                <h4 className="font-bold text-gray-800 mb-2">💡 Photo Ideas to Try:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span>🌿</span>
                    <span>Take a photo of a <span className="font-semibold">plant or flower</span> and ask "What is this plant?"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>📋</span>
                    <span>Photo of a <span className="font-semibold">food label or document</span> and ask "Read this for me"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>🍎</span>
                    <span>Photo of <span className="font-semibold">ingredients</span> and ask "What can I make with these?"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>🔧</span>
                    <span>Photo of a <span className="font-semibold">remote control</span> and ask "What does each button do?"</span>
                  </li>
                </ul>
              </div>

              <a 
                href="https://chatgpt.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full font-bold hover:bg-green-700 transition-all shadow-md"
              >
                Open ChatGPT <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Activity 3: Create a Gem */}
          <div className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 ${animated ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`} style={{ transitionDelay: '500ms' }}>
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold">3</div>
                <div>
                  <h3 className="text-2xl font-bold">Create Your First Gem</h3>
                  <p className="text-purple-100">Make a custom AI assistant in Gemini</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <h4 className="font-bold text-gray-800 mb-2 text-lg">✨ What to do:</h4>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>Go to <span className="font-semibold text-blue-600">gemini.google.com</span></li>
                  <li>Look for <span className="font-semibold">⭐ "Gem manager"</span> on the left side</li>
                  <li>Click <span className="font-semibold">"New Gem"</span></li>
                  <li>Give it a name and instructions</li>
                  <li>Click <span className="font-semibold">"Save"</span> and start chatting!</li>
                </ol>
              </div>

              <div className="bg-purple-50 rounded-lg p-4 mb-4 border-l-4 border-purple-500">
                <h4 className="font-bold text-gray-800 mb-3">💎 Try Creating One of These Gems:</h4>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h5 className="font-bold text-purple-700 mb-2">📚 "Simple Explainer"</h5>
                    <p className="text-sm text-gray-600 mb-2">Perfect for understanding complicated topics</p>
                    <div className="bg-gray-50 p-3 rounded text-sm text-gray-700">
                      <p className="font-semibold mb-1">Instructions to copy:</p>
                      <p className="italic">"You are a helpful assistant who explains everything in very simple terms. Use short sentences and everyday words. Never use technical jargon. Give examples to help me understand."</p>
                      <div className="flex justify-end mt-2">
                        <CopyButton text="You are a helpful assistant who explains everything in very simple terms. Use short sentences and everyday words. Never use technical jargon. Give examples to help me understand." />
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h5 className="font-bold text-purple-700 mb-2">👨‍🍳 "Recipe Helper"</h5>
                    <p className="text-sm text-gray-600 mb-2">Get recipe ideas from what you have</p>
                    <div className="bg-gray-50 p-3 rounded text-sm text-gray-700">
                      <p className="font-semibold mb-1">Instructions to copy:</p>
                      <p className="italic">"You are a friendly cooking assistant. When I tell you what ingredients I have, suggest simple recipes that are easy to follow. Give clear step-by-step instructions. Include cooking times and temperatures."</p>
                      <div className="flex justify-end mt-2">
                        <CopyButton text="You are a friendly cooking assistant. When I tell you what ingredients I have, suggest simple recipes that are easy to follow. Give clear step-by-step instructions. Include cooking times and temperatures." />
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h5 className="font-bold text-purple-700 mb-2">✍️ "Letter Writer"</h5>
                    <p className="text-sm text-gray-600 mb-2">Help writing emails and messages</p>
                    <div className="bg-gray-50 p-3 rounded text-sm text-gray-700">
                      <p className="font-semibold mb-1">Instructions to copy:</p>
                      <p className="italic">"You help me write polite emails and letters. Ask me who I'm writing to and what I want to say. Then write it in a clear, friendly, and respectful way. Keep it brief and easy to read."</p>
                      <div className="flex justify-end mt-2">
                        <CopyButton text="You help me write polite emails and letters. Ask me who I'm writing to and what I want to say. Then write it in a clear, friendly, and respectful way. Keep it brief and easy to read." />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a 
                href="https://gemini.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-full font-bold hover:bg-purple-700 transition-all shadow-md"
              >
                Open Gemini <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Encouragement Box */}
        <div className={`mt-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 text-white text-center transition-all duration-700 delay-700 ${animated ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <h3 className="text-2xl font-bold mb-3">🎉 Congratulations!</h3>
          <p className="text-lg text-green-50 mb-2">You've completed the AI Course!</p>
          <p className="text-green-50">You now know how to use Gemini and ChatGPT, ask good questions, create Gems, and use image recognition.</p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <a 
              href="https://gemini.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-6 py-3 rounded-full font-bold hover:bg-blue-50 transition-all shadow-lg inline-flex items-center gap-2"
            >
              Try Gemini <ExternalLink className="w-5 h-5" />
            </a>
            <a 
              href="https://chatgpt.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-green-600 px-6 py-3 rounded-full font-bold hover:bg-green-50 transition-all shadow-lg inline-flex items-center gap-2"
            >
              Try ChatGPT <ExternalLink className="w-5 h-5" />
            </a>
            <button onClick={() => window.location.reload()} className="px-6 py-3 rounded-full font-semibold border-2 border-white text-white hover:bg-white/10 transition-all">
              Start Over
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className={`text-center mt-10 text-gray-600 transition-all duration-700 delay-1000 ${animated ? 'opacity-100' : 'opacity-0'}`}>
          <p className="flex items-center justify-center gap-2">
            Made by Junyu <Heart className="w-4 h-4 text-red-500 fill-red-500" />
          </p>
        </div>

        <div className={`flex justify-center mt-8 transition-all duration-500 delay-800 ${animated ? 'opacity-100' : 'opacity-0'}`}>
          <button onClick={onPrev} className="px-8 py-4 rounded-full font-semibold border-2 border-gray-300 text-gray-600 hover:bg-gray-100 transition-all text-lg">
            <ChevronLeft className="inline mr-2" /> Back
          </button>
        </div>
      </div>
    </div>
  );
};

// Slide 10: Safety & Comparison
const SafetySlide = ({ isActive, onNext, onPrev }: SlideProps) => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (isActive) setTimeout(() => setAnimated(true), 100);
  }, [isActive]);

  const safetyTips = [
    { title: "Never share passwords", desc: "AI will never ask for your bank password or PIN" },
    { title: "Don't share personal info", desc: "Avoid giving out your full address, SSN, or credit card" },
    { title: "Double-check important info", desc: "AI can make mistakes - verify medical or legal advice" },
    { title: "It's okay to start over", desc: "If confused, start a new chat" },
  ];

  return (
    <div className="slide-container bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <span className={`inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-4 transition-all duration-500 ${animated ? 'opacity-100' : 'opacity-0'}`}>
            Lesson 8 of 10
          </span>
          <h2 className={`text-3xl sm:text-4xl font-bold transition-all duration-700 delay-100 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Safety Tips & Quick Comparison
          </h2>
        </div>

        {/* Safety Tips */}
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {safetyTips.map((tip, i) => (
            <div 
              key={i}
              className={`bg-white/10 backdrop-blur-sm rounded-2xl p-5 transition-all duration-500 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-yellow-800 font-bold">!</span>
                </div>
                <div>
                  <h4 className="font-bold mb-1">{tip.title}</h4>
                  <p className="text-blue-100 text-sm">{tip.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison */}
        <div className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-10 transition-all duration-700 delay-600 ${animated ? 'opacity-100' : 'opacity-0'}`}>
          <h3 className="text-xl font-bold mb-4">Gemini vs ChatGPT - Quick Guide</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-blue-200 mb-2 flex items-center gap-2">
                <Sparkles className="w-5 h-5" /> Gemini (Google)
              </h4>
              <ul className="text-sm text-blue-100 space-y-1">
                <li>• Great web search integration</li>
                <li>• Excellent voice input</li>
                <li>• Gems for custom assistants</li>
                <li>• Works well with Google services</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-green-200 mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5" /> ChatGPT (OpenAI)
              </h4>
              <ul className="text-sm text-blue-100 space-y-1">
                <li>• Very natural conversations</li>
                <li>• Strong creative writing</li>
                <li>• Excellent image recognition</li>
                <li>• Large knowledge base</li>
              </ul>
            </div>
          </div>
          <p className="text-center text-blue-200 mt-4 text-sm">💡 Tip: Try both and use the one you prefer!</p>
        </div>

        {/* Congratulations */}
        <div className={`bg-white rounded-3xl p-8 text-gray-800 text-center transition-all duration-700 delay-800 ${animated ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold mb-3">Congratulations!</h3>
          <p className="text-gray-600 mb-6 max-w-lg mx-auto">
            You've completed the AI Course! You now know how to use Gemini and ChatGPT, ask good questions, create Gems, and use image recognition.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://gemini.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg inline-flex items-center gap-2"
            >
              Try Gemini <ExternalLink className="w-5 h-5" />
            </a>
            <a 
              href="https://chatgpt.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-6 py-3 rounded-full font-bold hover:bg-green-700 transition-all shadow-lg inline-flex items-center gap-2"
            >
              Try ChatGPT <ExternalLink className="w-5 h-5" />
            </a>
            <button onClick={onNext} className="px-6 py-3 rounded-full font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-lg">
              Continue to Activities <ChevronRight className="inline ml-2" />
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className={`text-center mt-10 text-blue-200 transition-all duration-700 delay-1000 ${animated ? 'opacity-100' : 'opacity-0'}`}>
          <p className="flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-400" /> for learning AI
          </p>
        </div>

        <div className={`flex justify-center mt-8 transition-all duration-500 delay-900 ${animated ? 'opacity-100' : 'opacity-0'}`}>
          <button onClick={onPrev} className="px-8 py-4 rounded-full font-semibold border-2 border-white/50 text-white hover:bg-white/10 transition-all text-lg">
            <ChevronLeft className="inline mr-2" /> Back
          </button>
        </div>
      </div>
    </div>
  );
};

// Main App Component
function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  const slides = [
    { component: HeroSlide, title: "Home" },
    { component: WhatIsAISlide, title: "What is AI?" },
    { component: GeminiOverviewSlide, title: "Meet Gemini" },
    { component: UsingGeminiSlide, title: "Access Gemini" },
    { component: AskingQuestionsSlide, title: "Ask Questions" },
    { component: CreatingGemsSlide, title: "Create Gems" },
    { component: ChatGPTSlide, title: "Meet ChatGPT" },
    { component: ImageRecognitionSlide, title: "Image Recognition" },
    { component: SafetySlide, title: "Safety & Finish" },
    { component: PracticeSlide, title: "Try It Out Now!" },
  ];

  const nextSlide = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(prev => prev + 1);
      window.scrollTo(0, 0);
    }
  }, [currentSlide, slides.length]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
      window.scrollTo(0, 0);
    }
  }, [currentSlide]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setShowMenu(false);
    window.scrollTo(0, 0);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl text-gray-800 hidden sm:block">AI Course</span>
            </div>

            {/* Progress Bar */}
            <div className="flex-1 max-w-md mx-4 sm:mx-8">
              <ProgressBar current={currentSlide} total={slides.length} />
            </div>

            {/* Menu Button */}
            <button 
              onClick={() => setShowMenu(!showMenu)}
              className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-blue-100 hover:text-blue-600 transition-all duration-300 flex items-center justify-center"
            >
              {showMenu ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Dropdown Menu */}
        {showMenu && (
          <div className="absolute top-16 right-4 bg-white rounded-2xl shadow-xl p-4 w-64 animate-fade-in border max-h-96 overflow-y-auto">
            <p className="text-sm font-semibold text-gray-500 mb-3">Jump to Lesson</p>
            <div className="space-y-2">
              {slides.map((slide, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 ${
                    i === currentSlide 
                      ? 'bg-blue-600 text-white' 
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  <span className="text-sm font-medium">{i + 1}.</span> {slide.title}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-16">
        <CurrentSlideComponent 
          isActive={true} 
          onNext={nextSlide} 
          onPrev={prevSlide}
        />
      </main>

      {/* Desktop Navigation */}
      <div className="fixed bottom-8 right-8 hidden sm:flex gap-4 z-40">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="w-14 h-14 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed border"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="w-14 h-14 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className="fixed bottom-4 left-4 right-4 sm:hidden z-40">
        <div className="bg-white rounded-full shadow-lg p-2 flex justify-between items-center">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="w-12 h-12 rounded-full hover:bg-gray-100 transition-all flex items-center justify-center disabled:opacity-50"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <span className="text-sm font-medium text-gray-600">
            {currentSlide + 1} / {slides.length}
          </span>
          
          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="w-12 h-12 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all flex items-center justify-center disabled:opacity-50"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
