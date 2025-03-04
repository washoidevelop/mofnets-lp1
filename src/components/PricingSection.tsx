import React from 'react';
import { Check, Info } from 'lucide-react';

const PricingSection = () => {
  const pricingPlans = [
    {
      title: 'フォーム送信',
      price: '60円',
      unit: '1件',
      features: [
        'リスト作成',
        'フォーム送信代行',
        'レポーティング'
      ]
    },
    {
      title: 'テレアポ',
      price: '250円',
      unit: '1件',
      features: [
        'リスト作成',
        'スクリプト作成',
        'テレアポ代行',
        'レポーティング'
      ]
    },
    {
      title: 'フォーム送信＋テレアポ',
      price: '300円',
      unit: '1件',
      features: [
        'リスト作成',
        'スクリプト作成',
        'フォーム送信代行',
        'テレアポ代行',
        'レポーティング',
        'PDCAサイクル支援'
      ],
      highlighted: true
    }
  ];

  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">料金プラン</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-lg shadow-lg overflow-hidden ${plan.highlighted ? 'border-2 border-blue-500 relative' : ''} flex flex-col`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 text-sm font-semibold">
                  おすすめ
                </div>
              )}
              <div className={`pt-10 px-6 pb-6 ${plan.highlighted ? 'bg-blue-50' : 'bg-white'} flex-grow`}>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{plan.title}</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-blue-600">{plan.price}</span>
                  <span className="text-gray-600"> / {plan.unit}</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check size={18} className="text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`p-6 ${plan.highlighted ? 'bg-blue-50' : 'bg-white'}`}>
                <button 
                  className={`w-full py-2 px-4 rounded-md font-semibold transition-colors duration-300 ${
                    plan.highlighted 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                  }`}
                >
                  詳細を見る
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-gray-50 p-6 rounded-lg max-w-3xl mx-auto mb-12">
          <div className="flex items-start">
            <Info size={24} className="text-blue-600 mr-4 flex-shrink-0" />
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">ご注意</h4>
              <ul className="space-y-2 text-gray-600">
                <li>ボリュームディスカウントあり。</li>
                <li>商材・サービスにより最低契約件数が異なります（例：IT人材紹介サービス 1000件〜）</li>
                <li>商談獲得難易度や対象リストの属性により料金が変動する場合がございます。まずはご相談ください。</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <img 
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
            alt="コスト効率" 
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default PricingSection;