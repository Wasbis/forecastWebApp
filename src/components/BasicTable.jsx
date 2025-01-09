import React from "react";

export default function BasicTable({ columns, data, striped = true, bordered = true, hover = true }) {
    return (
        <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse">
                <thead>
                    <tr>
                        {columns.map((col) => (
                            <th
                                key={col.key}
                                className={`px-4 py-2 text-left text-gray-600 uppercase text-sm ${bordered ? "border-b border-gray-300" : ""}`}
                            >
                                {col.label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex} className={`${striped && rowIndex % 2 === 0 ? "bg-gray-100" : ""} ${hover ? "hover:bg-gray-200" : ""}`}>
                            {columns.map((col) => (
                                <td key={col.key} className={`px-4 py-2 ${bordered ? "border-b border-gray-300" : ""}`}>
                                    {row[col.key]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
