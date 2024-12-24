import Link from 'next/link';

export default function page1() {
    return (
        <div>
            <div className="w-1/5 bg-gray-200 p-5">
                <ul className="space-y-3">
                    <a href="/page1.html">
                        <li className="text-gray-700 sidebar-item p-5">Dashboard</li>
                    </a>
                    <a href="/page2.html">
                        <li className="text-gray-700 sidebar-item p-5">報表</li>
                    </a>
                    <a href="/page3.html">
                        <li className="text-gray-700 sidebar-item p-5">感測設定</li>
                    </a>
                </ul>
            </div>
            <div className="w-4/5 p-5 flex flex-col h-screen overflow-auto">
                <div className="mb-5">
                    <h3 className="text-xl font-semibold mb-3">當前系統運行狀況: <span id="display-label" className="text-green-600">正常</span>
                    </h3>
                    <div className="flex space-x-3">
                        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded"
                        >綠燈</button>
                        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded"
                        >黃燈</button>
                        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded"
                        >紅燈</button>
                        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded"
                        >感應</button>
                    </div>
                </div>

                <div className="mb-5">
                    <h3 className="text-xl font-semibold mb-3">最近系統上線時間比例:</h3>
                    <div className="w-full h-52 bg-gray-300 rounded" id="chart3"></div>
                </div>

                <div className="mb-5">
                    <h3 className="text-xl font-semibold mb-3">最近的溫度與濕度變化:</h3>
                    <div className="w-full h-52 bg-gray-300 rounded" id="chart4">

                    </div>
                </div>
            </div>
        </div>

    );
}
