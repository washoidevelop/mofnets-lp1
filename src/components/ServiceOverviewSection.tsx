import React from 'react';
import { Phone, Send, Target, DollarSign } from 'lucide-react';

const ServiceOverviewSection = () => {
  return (
    <section id="service" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">テレアポ＆フォーム送信代行サービスとは？</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            電話とWebフォームの両方を活用した、ハイブリッド型の営業代行サービスです。
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center mb-16">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <img 
              src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
              alt="ハイブリッド営業アプローチ" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          
          <div className="md:w-1/2 md:pl-8">
            <div className="space-y-8">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="bg-blue-600 p-3 rounded-full">
                    <Phone size={24} className="text-white" />
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">複数のアプローチで接触率を最大化</h3>
                  <p className="text-gray-600">
                    テレアポ：声で直接アプローチし、ヒアリングしながらアポイントを獲得<br />
                    フォーム送信：効率的に幅広くリーチし、興味の高いターゲットから反応を得る
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="bg-blue-600 p-3 rounded-full">
                    <Target size={24} className="text-white" />
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">高確度のリードを創出</h3>
                  <p className="text-gray-600">
                    興味度に応じて柔軟に提案することで、決裁者同席の商談にもつなげやすい
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="bg-blue-600 p-3 rounded-full">
                    <DollarSign size={24} className="text-white" />
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">営業コストの最適化</h3>
                  <p className="text-gray-600">
                    1件あたりの成果報酬型なので、無駄なく費用を使える
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-600 text-white p-8 rounded-lg shadow-lg text-center">
          <p className="text-xl md:text-2xl font-semibold">
            リスト作成からスクリプト作成、商談設定まで一括で請け負い、<br className="hidden md:block" />
            <span className="font-bold">企業の"泥臭い"アウトバンド作業</span>をまるごとサポートいたします。
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceOverviewSection;