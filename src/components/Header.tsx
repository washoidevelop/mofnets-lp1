import React from 'react';
import { Phone } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-blue-600 font-bold text-xl">株式会社モフネッツ</div>
        </div>
        <div className="flex items-center">
          <a href="#contact" className="text-gray-600 hover:text-blue-600 mr-6 hidden md:block">
            サービス紹介
          </a>
          <a href="#pricing" className="text-gray-600 hover:text-blue-600 mr-6 hidden md:block">
            料金プラン
          </a>
          <a href="#cases" className="text-gray-600 hover:text-blue-600 mr-6 hidden md:block">
            導入事例
          </a>
          <div className="flex items-center text-blue-600">
            <Phone size={18} className="mr-2" />
            <span className="font-semibold">045-777-9905</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;