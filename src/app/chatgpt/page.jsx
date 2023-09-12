'use client'
import { useState } from 'react';
import Image from 'next/image';
import logo from '@/assets/logo.png';
import Link from 'next/link';

export default function Chat() {
  const [inputText, setInputText] = useState("");
  const [conversation, setConversation] = useState([]);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSendMessage = async () => {
    if (inputText.trim() === '') return;

    // Adicione a mensagem do usuário à conversa
    const userMessage = { text: inputText, user: true };
    setConversation([...conversation, userMessage]);
    setInputText('');

    try {
      const response = await fetch('https://api.openai.com/v1/engines/davinci/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer SUA_CHAVE_API',
        },
        body: JSON.stringify({
          prompt: inputText,
          max_tokens: 150,
          temperature: 0.8
        }),
      });

      if (!response.ok) {
        throw new Error('Erro ao enviar mensagem');
      }

      const data = await response.json();

      const botResponse = { text: data.choices[0].text, user: false };
      setConversation([...conversation, botResponse]);
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
    }
  }
  return (
    <div className="flex h-screen">
      
      <aside className="flex flex-col bg-[#023020] w-1/4 items-center justify-end">
        <button className="h-14 w-64 mb-2 bg-slate-200 text-black rounded-2xl text-2xl font-semibold p-1 hover:bg-slate-100 hover:text-slate-500">
          <Link href="/clima">CLIMA</Link>
        </button>
      </aside>

      <main className="flex flex-col items-center bg-[#011e14] flex-grow">
        <div className="w-5/6 flex justify-between items-center">
          <p className="text-2xl text-[#00ff6c] font-semibold">CHAT</p>
          <Image src={logo} className="w-1/6" alt='LOGO' />
        </div>

        <div className="flex flex-col mt-4 w-5/6 flex-grow overflow-y-auto gap-2">
          {conversation.map((message, index) => (
            <div
              key={index}
              className={`p-2 rounded-xl ${
                message.user
                  ? 'bg-[#6E716E] text-white self-end max-w-[50%]'
                  : 'bg-slate-200 text-black'
              }`}
            >
              {message.text}
            </div>
          ))}
        </div>

        <div className="w-5/6 flex justify-between items-center mt-4">
          <input
            type="text"
            className="w-3/4 h-12 rounded-2xl bg-[#6E716E] text-white pl-4"
            placeholder="Faça sua pergunta"
            value={inputText}
            onChange={handleInputChange}
          />
          <button
            className="w-20 h-12 bg-[#6E716E] text-white font-semibold"
            onClick={handleSendMessage}
          >
            ENVIAR
          </button>
        </div>
      </main>
    </div>
  );
}
