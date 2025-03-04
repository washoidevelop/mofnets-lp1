import React from 'react';
import { Quote } from 'lucide-react';

const CaseStudiesSection = () => {
  const companyLogos = [
    { name: 'Company A', industry: 'IT' },
    { name: 'Company B', industry: 'Marketing' },
    { name: 'Company C', industry: 'Finance' },
    { name: 'Company D', industry: 'Healthcare' },
    { name: 'Company E', industry: 'Manufacturing' }
  ];

  const caseStudies = [
    {
      company: '営業支援ツール商材のA社',
      result: 'CPA5,000円以下で月15件の商談獲得に成功',
      description: 'フォーム送信＋テレアポのコンボで短期間に大きくリードを拡大',
      quote: '細かいPDCAサイクルで効率的に商談獲得数が増え、営業チームの生産性が向上しました。',
      quoteAuthor: 'A社 マーケティング部長',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80'
    },
    {
      company: 'マーケティングツール商材のB社',
      result: '独自スクリプト導入で決裁者同席商談率が2倍',
      description: '連続受注に成功し、新サービス立ち上げ期の売上拡大に貢献',
      quote: '細かいPDCAサイクルでアポ品質がどんどん良くなっていきました。',
      quoteAuthor: 'B社 営業担当者',
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80'
    }
  ];

  return (
    <section id="cases" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">導入企業の声・成功事例</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            様々な業界のお客様に導入いただき、成果を上げています。
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center mb-16 gap-8">
          {companyLogos.map((logo, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <div className="w-32 h-16 flex items-center justify-center">
                <span className="text-gray-400 font-semibold">{logo.name}</span>
              </div>
              <div className="text-xs text-center text-gray-500 mt-2">{logo.industry}</div>
            </div>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.company} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{study.company}</h3>
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold inline-block mb-3">
                  {study.result}
                </div>
                <p className="text-gray-600 mb-4">{study.description}</p>
                
                {study.quote && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex">
                      <Quote size={20} className="text-blue-600 mr-2 flex-shrink-0" />
                      <p className="text-gray-700 italic">{study.quote}</p>
                    </div>
                    {study.quoteAuthor && (
                      <p className="text-right text-sm text-gray-500 mt-2">— {study.quoteAuthor}</p>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto">
          <img 
            src="https://images.unsplash.com/photo-1560439514-4e9645039924?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
            alt="ビジネスパートナーシップ" 
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;