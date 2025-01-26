import { useLocation } from 'wouter-preact';

export default function NotFound() {
  const [, navigate] = useLocation();

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-[#F7F7F1]">
      <div className="text-center mb-4">
        <h1 className="text-6xl font-bold text-[#3A4157]">404</h1>
        <h5 className="text-2xl font-medium text-gray-600">страница не найдена</h5>
      </div>
      <button
        onClick={() => navigate('/')}
        className="bg-[#88e788] border-4 border-black rounded-full py-2 px-6 hover:bg-[#76d776] transition-all"
      >
        <span className="text-lg font-semibold text-[#3A4157]">на главную</span>
      </button>
    </div>
  );
}
