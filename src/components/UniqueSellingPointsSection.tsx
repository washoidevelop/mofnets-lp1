import React from 'react';
import { PhoneCall, FileText, Award, TrendingUp } from 'lucide-react';

const UniqueSellingPointsSection = () => {
  const sellingPoints = [
    {
      icon: <PhoneCall size={32} className="text-blue-600" />,
      title: 'テレアポ＆フォーム送信の両輪で商談獲得率を向上',
      description: '片方だけではカバーしきれない層にも効率的にアプローチ。CPA5,000円以下の実績（営業支援ツール商材）。'
    },
    {
      icon: <FileText size={32} className="text-blue-600" />,
      title: '独自スクリプト開発で受付突破率＆成約率UP',
      description: '決裁者同席商談を狙う特別スクリプトで、成約率が2倍になった事例あり（マーケティングツール商材）。綿密なヒアリングを行い、自社に合わせたシナリオを作成。'
    },
    {
      icon: <Award size={32} className="text-blue-600" />,
      title: '徹底したアポインター研修＆モチベーション管理',
      description: '業界トップアポインターを招いた研修を定期実施。安定した品質でアポ獲得を継続。'
    },
    {
      icon: <TrendingUp size={32} className="text-blue-600" />,
      title: '柔軟な料金体系＆スピード導入',
      description: '1件あたりの単価も業界水準に比べリーズナブル。契約後すぐに運用開始が可能で、効果検証も迅速。'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">私たちが選ばれる4つの理由</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            他社にはない、私たちのハイブリッド営業代行サービスの強みをご紹介します。
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {sellingPoints.map((point, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-full shadow-md mr-4">
                  {point.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{point.title}</h3>
                  <p className="text-gray-600">{point.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block bg-blue-50 px-6 py-3 rounded-full mb-8">
            <p className="text-blue-600 font-semibold">
              電話とフォームの組み合わせで、新規商談獲得を加速させます
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="チームワーク" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniqueSellingPointsSection;