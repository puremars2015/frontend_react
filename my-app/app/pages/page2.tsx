export default function Page2() {
    return (
        <div>
            <div className="w-1/5 bg-gray-200 p-5">
                <ul className="space-y-3">
                    <a href="/page1.html"><li className="text-gray-700 sidebar-item p-5">Dashboard</li></a>
                    <a href="/page2.html"><li className="text-gray-700 sidebar-item p-5">報表</li></a>
                    <a href="/page3.html"><li className="text-gray-700 sidebar-item p-5">感測設定</li></a>
                </ul>
            </div>
            <div className="w-4/5 p-5 flex flex-col h-screen">
                <div className="mb-5 flex items-center space-x-3">
                    <label htmlFor="start-time" className="text-xl font-semibold">起始時間:</label>
                    <input id="start-time" type="date" className="border border-gray-300 rounded p-2" />
                    <label htmlFor="end-time" className="text-xl font-semibold">結束時間:</label>
                    <input id="end-time" type="date" className="border border-gray-300 rounded p-2" />
                    <button id="filter-button" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">查詢</button>
                </div>

                <div className="w-full flex-1 bg-gray-300 rounded overflow-auto p-5">
                    <table className="table-auto w-full border-collapse border border-gray-400">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border border-gray-400 px-4 py-2">#</th>
                                <th className="border border-gray-400 px-4 py-2">Time</th>
                                <th className="border border-gray-400 px-4 py-2">Temperature (°C)</th>
                                <th className="border border-gray-400 px-4 py-2">Humidity (%)</th>
                            </tr>
                        </thead>
                        <tbody id="data-table-body">
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
