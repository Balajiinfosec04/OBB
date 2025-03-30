import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {  FaShoppingCart, FaHome, FaBusinessTime, FaBook, FaMusic, FaBars, FaTimes } from 'react-icons/fa';
import axios from 'axios';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [codeSent, setCodeSent] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', icon: <FaHome /> },
    { name: 'Business', icon: <FaBusinessTime /> },
    { name: 'Shopping', icon: <FaShoppingCart /> },
    { name: 'Knowledgebase', icon: <FaBook /> },
    { name: 'Musically', icon: <FaMusic /> }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      {/* Logo Section */}
      <div className="flex items-center gap-2 text-xl font-bold">
        <motion.div
          whileHover={{ rotateY: 180 }}
          transition={{ duration: 0.5 }}
          className="text-green-500"
        >
          OB
        </motion.div>
        <span>OnlineBusinessBase</span>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-xl" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Navigation Items */}
      <ul className={`md:flex gap-6 hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        {navItems.map((item) => (
          <motion.li
            key={item.name}
            className={`cursor-pointer flex items-center gap-2 ${activeTab === item.name ? 'text-green-400' : ''}`}
            whileHover={{ scale: 1.1 }}
            onClick={() => setActiveTab(item.name)}
          >
            {item.icon} {item.name}
          </motion.li>
        ))}
      </ul>

      {/* Login Button */}
      <motion.button
        className="bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowLogin(true)}
      >
        Login
      </motion.button>
    </motion.nav>
  );
};

export default App;
