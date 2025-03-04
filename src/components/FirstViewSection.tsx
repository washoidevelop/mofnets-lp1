import React, { useState } from 'react';
import { Phone, Send, ArrowRight } from 'lucide-react';

const FirstViewSection = () => {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    inquiry: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to your backend
    alert('お問い合わせありがとうございます。担当者より連絡いたします。');
    setFormData({ company: '', name: '', inquiry: '' });
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight mb-6">
              電話×フォームのハイブリッド営業代行で、
              <span className="text-blue-600 block mt-2">商談獲得数を一気にブースト</span>
              しませんか？
            </h1>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="bg-blue-600 p-1 rounded-full mr-3 mt-1">
                  <Send size={16} className="text-white" />
                </div>
                <p className="text-gray-700">テレアポ＆フォーム送信の両軸でCPA5,000円以下を実現した実績あり</p>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 p-1 rounded-full mr-3 mt-1">
                  <Phone size={16} className="text-white" />
                </div>
                <p className="text-gray-700">受付突破率・決裁者同席率を高める独自スクリプトで成約率2倍</p>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 p-1 rounded-full mr-3 mt-1">
                  <ArrowRight size={16} className="text-white" />
                </div>
                <p className="text-gray-700"><span className="font-bold">費用対効果</span>を徹底追求</p>
              </div>
            </div>
            <div className="mt-8">
              <img 
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="ビジネスハンドシェイク" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
          
          <div className="md:w-1/2 bg-white rounded-lg shadow-xl p-6 md:p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">今すぐ無料相談する</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">会社名</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">担当者名</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="inquiry" className="block text-sm font-medium text-gray-700 mb-1">ご相談内容</label>
                <textarea
                  id="inquiry"
                  name="inquiry"
                  value={formData.inquiry}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-md transition duration-300 flex items-center justify-center"
              >
                今すぐ無料相談する
                <ArrowRight size={18} className="ml-2" />
              </button>
            </form>
            <div className="mt-4 text-center">
              <div className="flex items-center justify-center text-gray-600">
                <Phone size={16} className="mr-2" />
                <span>045-777-9905（平日9:00～18:00）</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstViewSection;