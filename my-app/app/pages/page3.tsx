export default function Page3() {
    return (
        <div>
            <div className="w-1/5 bg-gray-200 p-5">
                <ul className="space-y-3">
                    <a href="/page1.html"><li className="text-gray-700 sidebar-item p-5">Dashboard</li></a>
                    <a href="/page2.html"><li className="text-gray-700 sidebar-item p-5">報表</li></a>
                    <a href="/page3.html"><li className="text-gray-700 sidebar-item p-5">感測設定</li></a>
                </ul>
            </div>
            <div className="w-4/5 p-5">
                <div className="mb-10 space-y-5">
                    <div className="flex items-center space-x-3">
                        <label htmlFor="warning-temp" className="text-lg font-medium">警戒溫度設定:</label>
                        <input id="warning-temp" type="text" className="border border-gray-300 rounded p-2 flex-1" />
                    </div>
                    <div className="flex items-center space-x-3">
                        <label htmlFor="danger-temp" className="text-lg font-medium">危險溫度設定:</label>
                        <input id="danger-temp" type="text" className="border border-gray-300 rounded p-2 flex-1" />
                    </div>
                    <div className="flex items-center space-x-3">
                        <label htmlFor="warning-humidity" className="text-lg font-medium">警戒濕度設定:</label>
                        <input id="warning-humidity" type="text" className="border border-gray-300 rounded p-2 flex-1" />
                    </div>
                    <div className="flex items-center space-x-3">
                        <label htmlFor="danger-humidity" className="text-lg font-medium">危險濕度設定:</label>
                        <input id="danger-humidity" type="text" className="border border-gray-300 rounded p-2 flex-1" />
                    </div>
                </div>

                <div className="mt-10 flex justify-between">
                    <button className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded">恢復預設值</button>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">確認變更</button>
                </div>
            </div>
        </div>

    );
}

