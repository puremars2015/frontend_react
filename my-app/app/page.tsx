import Link from 'next/link';

export default function Home() {
  return (
    <div className="login-card w-96 p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">產線監控系統</h2>
        <form id="login-form">
            <div className="mb-4">
                <label htmlFor="username" className="block text-gray-600 text-sm font-medium mb-2">Username</label>
                <input type="text" id="username" name="username" className="border border-gray-300 rounded w-full p-2 focus:ring focus:ring-blue-300" placeholder="Enter your username" required/>
            </div>
            <div className="mb-6">
                <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-2">Password</label>
                <input type="password" id="password" name="password" className="border border-gray-300 rounded w-full p-2 focus:ring focus:ring-blue-300" placeholder="Enter your password" required/>
            </div>
            <Link href="/page1">
              <button type="button" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded">Login</button>
            </Link>
        </form>
        <div className="mt-4 text-center">
            <a href="#" className="text-sm text-blue-500 hover:underline">Forgot your password?</a>
        </div>
    </div>
  );
}
