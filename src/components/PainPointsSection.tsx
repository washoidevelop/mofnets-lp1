import React from 'react';
import { HelpCircle, AlertCircle } from 'lucide-react';

const PainPointsSection = () => {
  const painPoints = [
    '新規営業を始めたいが、何から手をつければいいかわからない',
    'アウトバンド営業を自社で行うと、社員のモチベーションが下がってしまう',
    '商談対応などのコア業務に集中したいが、人材リソースが足りない',
    '採用コストや教育コストを抑えたいが、成果を出す営業体制が構築できていない'
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <HelpCircle size={48} className="mx-auto text-blue-600 mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">こんなお悩み、ありませんか？</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {painPoints.map((point, index) => (
            <div 
              key={index} 
              className="bg-blue-50 rounded-lg p-6 shadow-md border-l-4 border-blue-600 flex items-start"
            >
              <AlertCircle size={24} className="text-blue-600 mr-4 flex-shrink-0 mt-1" />
              <p className="text-gray-700">{point}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            これらの課題に心当たりのある方こそ、私たちのサービスがサポートいたします。
          </p>
          <div className="max-w-2xl mx-auto">
            <img 
              src="https://images.unsplash.com/photo-1484981138541-3d074aa97716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="悩むビジネスパーソン" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;