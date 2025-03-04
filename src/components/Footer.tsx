import React from 'react';
import { Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">株式会社モフネッツ</h3>
            <p className="text-gray-400 mb-4">
              電話×フォームのハイブリッド営業代行で、商談獲得数を一気にブーストします。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">サービス</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">テレアポ代行</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">フォーム送信代行</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">ハイブリッド営業代行</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">スクリプト作成</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">会社情報</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">会社概要</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">導入事例</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">採用情報</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">プライバシーポリシー</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">お問い合わせ</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone size={18} className="text-gray-400 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-400">045-777-9905</span>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="text-gray-400 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-400">9:00～18:00（土日祝休み）</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="text-gray-400 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-400">info@mofnets.co.jp</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} 株式会社モフネッツ. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;