"use client";
import { useEffect, useRef } from "react";
import mermaid from "mermaid";

const MermaidCharts = ({ chartCode }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        if (chartRef.current) {
            mermaid.initialize({ startOnLoad: true });
            mermaid.contentLoaded();
        }
    }, []);

    return (
        <div className="mermaid">
            {chartCode}
        </div>
    );
};

export default MermaidCharts;