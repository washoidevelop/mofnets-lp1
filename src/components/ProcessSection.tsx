import React from 'react';

const ProcessSection = () => {
  const steps = [
    {
      number: 1,
      title: 'お問い合わせ',
      description: 'サイト内フォームまたはお電話でお問い合わせください'
    },
    {
      number: 2,
      title: 'ヒアリング・要件整理',
      description: '商材やターゲット、希望件数など具体的な情報を確認'
    },
    {
      number: 3,
      title: 'ご提案・お見積もり',
      description: '最適なプラン・スクリプト構成をまとめてご提示'
    },
    {
      number: 4,
      title: 'ご契約',
      description: '契約締結後、すぐにキックオフミーティングを実施'
    },
    {
      number: 5,
      title: 'ターゲットリスト＆スクリプト作成',
      description: 'リスト選定と独自スクリプトを作成し、テレアポ・フォーム送信体制を準備'
    },
    {
      number: 6,
      title: 'アプローチ開始＆レポート',
      description: 'アポ獲得状況をレポーティングしながら、PDCAを回して成果を最大化'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">ご利用の流れ</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            お問い合わせから運用開始まで、スムーズにサポートいたします。
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {steps.map((step, index) => (
                <div key={index} className={`relative ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <div className="bg-white rounded-lg shadow-md p-6 h-full">
                    <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl shadow-lg">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3 mt-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-block bg-blue-100 px-6 py-3 rounded-full mb-8">
            <p className="text-blue-800 font-semibold">
              最短5営業日で運用開始が可能です。
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <img 
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="ビジネスプロセス" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;