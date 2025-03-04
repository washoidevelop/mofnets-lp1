import React, { useState } from 'react';
import { ArrowRight, Phone } from 'lucide-react';

const FinalCtaSection = () => {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    contact: '',
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
    setFormData({ company: '', name: '', contact: '', inquiry: '' });
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            新規営業にお悩みなら、まずは無料でご相談ください
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            電話とフォームのハイブリッド営業で、御社の商談獲得を加速させましょう。ぜひ一度ご相談ください。
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 bg-blue-600 p-8 text-white flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">お問い合わせ</h3>
              <p className="mb-6">
                新規営業の効率化、商談獲得数の向上にお悩みでしたら、ぜひお気軽にご相談ください。
              </p>
              <div className="flex items-center mb-4">
                <Phone size={20} className="mr-3" />
                <span>045-777-9905（平日9:00～18:00）</span>
              </div>
              <div className="mt-6">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
                  alt="サポートチーム" 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
            
            <div className="md:w-1/2 p-8">
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
                <div className="mb-4">
                  <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-1">ご連絡先（電話・メール）</label>
                  <input
                    type="text"
                    id="contact"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="inquiry" className="block text-sm font-medium text-gray-700 mb-1">ご相談内容（任意）</label>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;