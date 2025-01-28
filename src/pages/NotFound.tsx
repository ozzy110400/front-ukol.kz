import { useEffect } from 'preact/hooks';
import { useLocation } from 'wouter-preact';

export default function NotFound() {
  const [, navigate] = useLocation();

  useEffect(() => {
    navigate('/404', { replace: true });
  }, []);

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-[#F7F7F1]">
      <div className="text-center mb-4">
        <h1 className="text-6xl font-bold text-black">404</h1>
        <h5 className="text-2xl font-medium text-gray-700">страница не найдена</h5>
      </div>
      <button
        onClick={() => navigate('/')}
        className="bg-my-green py-2 px-6 rounded-lg"
      >
        <span className="text-lg text-black  font-semibold text-text-black">на главную</span>
      </button>
    </div>
  );
}
