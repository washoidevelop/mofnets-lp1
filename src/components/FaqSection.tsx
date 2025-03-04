import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FaqSection = () => {
  const faqs = [
    {
      question: '最低何件から依頼できますか？',
      answer: '商材によって異なりますが、IT人材紹介サービスであれば1000件～など、まずはご相談ください。'
    },
    {
      question: 'フォーム送信営業は迷惑になりませんか？',
      answer: '営業お断り先は対象外とし、クレーム対策を徹底。合法の範囲で送信しますのでご安心ください。'
    },
    {
      question: '決裁者同席の商談にはどうやってつなげるの？',
      answer: '受付突破率を高めるスクリプトと独自の誘導トークを用意。マーケティングツール商材で成約率が2倍になった事例もあります。'
    },
    {
      question: '料金はどのように決まりますか？',
      answer: '基本料金に加えて、商材の難易度や対象リストの属性により調整させていただきます。詳細はお問い合わせください。'
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">よくあるご質問</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            お客様からよくいただくご質問にお答えします。
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4 mb-12">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full flex justify-between items-center p-5 bg-gray-50 hover:bg-gray-100 transition-colors duration-300 text-left"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-semibold text-gray-800">Q. {faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp size={20} className="text-blue-600" />
                  ) : (
                    <ChevronDown size={20} className="text-blue-600" />
                  )}
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-40' : 'max-h-0'
                  }`}
                >
                  <div className="p-5 bg-white">
                    <p className="text-gray-600">A. {faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="max-w-3xl mx-auto">
            <img 
              src="https://images.unsplash.com/photo-1560264280-88b68371db39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="サポート" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;