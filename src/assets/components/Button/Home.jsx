import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Link to='/'>
      <div className="w-12 h-12 bg-blue-500 rounded-full fixed bottom-5 right-5 flex justify-center items-center text-white">▲</div>
    </Link>
  );
}
