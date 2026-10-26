"use client";

import { useState } from "react";
import { motion } from "motion/react";

type SqlQuery = {
  id: string;
  name: string;
  description: string;
  sql: string;
  duration: string;
  rowsScanned: string;
  columns: string[];
  rows: (string | number)[][];
  insight: string;
};

const QUERIES: SqlQuery[] = [
  {
    id: "revenue-category",
    name: "01 · Top Revenue by Product Category",
    description: "Multi-table JOIN across orders, items, and products to aggregate gross merchandise value.",
    sql: `SELECT 
  p.product_category_name AS category,
  COUNT(DISTINCT o.order_id) AS total_orders,
  ROUND(SUM(oi.price), 2) AS total_revenue_brl,
  ROUND(AVG(oi.price), 2) AS avg_item_value
FROM olist_orders o
JOIN olist_order_items oi 
  ON o.order_id = oi.order_id
JOIN olist_products p 
  ON oi.product_id = p.product_id
WHERE o.order_status = 'delivered'
GROUP BY 1
ORDER BY total_revenue_brl DESC
LIMIT 5;`,
    duration: "44 ms",
    rowsScanned: "112,650 rows",
    columns: ["Category", "Total Orders", "Total Revenue (BRL)", "Avg Item Value"],
    rows: [
      ["beleza_saude (Health & Beauty)", 8836, "R$ 1,258,681.34", "R$ 130.16"],
      ["relogios_presentes (Watches & Gifts)", 5624, "R$ 1,205,005.68", "R$ 201.00"],
      ["cama_mesa_banho (Bed & Bath)", 9417, "R$ 1,036,988.70", "R$ 93.30"],
      ["esporte_lazer (Sports & Leisure)", 7720, "R$ 988,048.97", "R$ 114.34"],
      ["informatica_acessorios (Computers)", 6689, "R$ 911,954.32", "R$ 116.51"],
    ],
    insight: "Health & Beauty and Watches generate the highest total GMV, driven by higher average order values.",
  },
  {
    id: "delivery-reviews",
    name: "02 · Delivery Delay vs Review Score",
    description: "Evaluating the direct correlation between delayed shipments and 1-star customer ratings.",
    sql: `SELECT 
  CASE 
    WHEN o.order_delivered_customer_date <= o.order_estimated_delivery_date THEN 'On-Time / Early'
    ELSE 'Delayed Delivery'
  END AS delivery_performance,
  COUNT(o.order_id) AS order_count,
  ROUND(AVG(r.review_score), 2) AS avg_rating,
  ROUND(SUM(CASE WHEN r.review_score = 1 THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 1) AS pct_one_star
FROM olist_orders o
JOIN olist_order_reviews r 
  ON o.order_id = r.order_id
WHERE o.order_status = 'delivered'
  AND o.order_delivered_customer_date IS NOT NULL
GROUP BY 1;`,
    duration: "68 ms",
    rowsScanned: "98,240 rows",
    columns: ["Delivery Status", "Order Count", "Average Rating", "1-Star Rating %"],
    rows: [
      ["On-Time / Early", 88649, "4.29 / 5.0", "7.8%"],
      ["Delayed Delivery", 7827, "1.67 / 5.0", "58.4%"],
    ],
    insight: "Delays cause a severe drop in customer satisfaction: 58.4% of delayed customers award a 1-star rating.",
  },
  {
    id: "payments",
    name: "03 · Payment Method Distribution",
    description: "Aggregating payment preferences, transaction values, and average installment counts.",
    sql: `SELECT 
  payment_type,
  COUNT(order_id) AS payment_transactions,
  ROUND(SUM(payment_value), 2) AS total_amount_brl,
  ROUND(AVG(payment_value), 2) AS avg_ticket,
  ROUND(AVG(payment_installments), 1) AS avg_installments
FROM olist_order_payments
GROUP BY payment_type
ORDER BY total_amount_brl DESC;`,
    duration: "32 ms",
    rowsScanned: "103,886 rows",
    columns: ["Payment Method", "Transactions", "Total Value (BRL)", "Avg Ticket", "Avg Installments"],
    rows: [
      ["credit_card", 76795, "R$ 12,542,084.19", "R$ 163.32", "3.5"],
      ["boleto", 19784, "R$ 2,869,362.43", "R$ 145.03", "1.0"],
      ["voucher", 5775, "R$ 379,436.87", "R$ 65.70", "1.0"],
      ["debit_card", 1529, "R$ 217,989.79", "R$ 142.57", "1.0"],
    ],
    insight: "Credit cards dominate 78% of gross revenue, averaging 3.5 installments per transaction.",
  },
  {
    id: "state-distribution",
    name: "04 · Customer Density by Brazilian State",
    description: "Geographic aggregation of customer accounts and freight cost ratios across top states.",
    sql: `SELECT 
  c.customer_state,
  COUNT(DISTINCT c.customer_unique_id) AS unique_customers,
  COUNT(o.order_id) AS total_orders,
  ROUND(AVG(oi.freight_value), 2) AS avg_freight_brl
FROM olist_customers c
JOIN olist_orders o ON c.customer_id = o.customer_id
JOIN olist_order_items oi ON o.order_id = oi.order_id
GROUP BY c.customer_state
ORDER BY total_orders DESC
LIMIT 5;`,
    duration: "52 ms",
    rowsScanned: "99,441 rows",
    columns: ["State", "Unique Customers", "Total Orders", "Avg Freight (BRL)"],
    rows: [
      ["SP (São Paulo)", 40302, 47449, "R$ 15.15"],
      ["RJ (Rio de Janeiro)", 12384, 14538, "R$ 20.98"],
      ["MG (Minas Gerais)", 11259, 13129, "R$ 20.63"],
      ["RS (Rio Grande do Sul)", 5277, 6235, "R$ 21.74"],
      ["PR (Paraná)", 4882, 5740, "R$ 20.53"],
    ],
    insight: "São Paulo accounts for over 41% of total orders with the lowest average freight cost due to dense logistics hubs.",
  },
];

export function BrazilianEcommerceDemo() {
  const [selectedId, setSelectedId] = useState(QUERIES[0].id);
  const [isExecuting, setIsExecuting] = useState(false);
  const current = QUERIES.find((q) => q.id === selectedId)!;

  const handleRun = () => {
    setIsExecuting(true);
    setTimeout(() => setIsExecuting(false), 350);
  };

  return (
    <div className="relative overflow-hidden rounded-[20px] border border-white/10 bg-[#0A0E13] p-5 text-[#F1F5F9] md:p-8">
      {/* Glow elements */}
      <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 size-80 rounded-full bg-[#00F5D4]/15 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-20 -left-10 size-80 rounded-full bg-[#FBBF24]/10 blur-3xl" />

      {/* Top Query Selector Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
        <div className="flex items-center gap-2 font-mono text-xs text-[#00F5D4]">
          <span className="size-2 rounded-full bg-[#00F5D4] animate-pulse" />
          <span>SQL WORKBENCH // OLIST_ECOMMERCE_DB</span>
        </div>

        <button
          type="button"
          onClick={handleRun}
          disabled={isExecuting}
          className="inline-flex items-center gap-2 rounded-full bg-[#00F5D4] px-4 py-1.5 text-xs font-semibold text-[#080B0E] transition hover:bg-emerald-300 disabled:opacity-50"
        >
          <span>▶</span> {isExecuting ? "Executing..." : "Run Query"}
        </button>
      </div>

      {/* Query Tabs */}
      <div className="mt-4 flex flex-wrap gap-2" role="tablist">
        {QUERIES.map((q) => (
          <button
            key={q.id}
            role="tab"
            aria-selected={q.id === selectedId}
            onClick={() => setSelectedId(q.id)}
            className={`rounded-lg px-3.5 py-1.5 text-xs font-mono transition ${
              q.id === selectedId
                ? "bg-white/15 text-white font-semibold border border-white/20"
                : "text-white/60 hover:bg-white/5 hover:text-white"
            }`}
          >
            {q.name}
          </button>
        ))}
      </div>

      {/* Main Workbench Body */}
      <div className="mt-6 grid gap-6 lg:grid-cols-12">
        {/* Left: SQL Editor */}
        <div className="rounded-xl border border-white/10 bg-black/60 p-4 font-mono text-xs lg:col-span-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[0.7rem] text-white/50">
            <span>SQL QUERY EDITOR</span>
            <span>DIALECT: ANSI SQL / MYSQL</span>
          </div>

          <pre className="mt-3 overflow-x-auto text-[0.8rem] leading-relaxed text-[#A7F3D0]">
            <code>{current.sql}</code>
          </pre>

          <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-[0.7rem] text-white/50">
            <span>Execution Time: <span className="text-[#00F5D4]">{current.duration}</span></span>
            <span>Scanned: <span className="text-white/80">{current.rowsScanned}</span></span>
          </div>
        </div>

        {/* Right: Results Table */}
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 lg:col-span-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[0.7rem] text-white/50 font-mono">
              <span>QUERY RESULTS (RECORDSET)</span>
              <span className="text-[#00F5D4]">{current.rows.length} rows returned</span>
            </div>

            <div className="mt-3 overflow-x-auto">
              <table className="w-full text-left font-mono text-xs">
                <thead>
                  <tr className="border-b border-white/10 text-white/45">
                    {current.columns.map((c) => (
                      <th key={c} className="pb-2 font-normal pr-3">{c}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {current.rows.map((r, i) => (
                    <motion.tr
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.04 }}
                      className="hover:bg-white/[0.04]"
                    >
                      {r.map((val, cellIdx) => (
                        <td key={cellIdx} className="py-2 pr-3 text-white/90">
                          {val}
                        </td>
                      ))}
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Strategic Insight Box */}
          <div className="mt-5 rounded-lg border border-[#00F5D4]/20 bg-[#00F5D4]/5 p-3 text-xs">
            <span className="font-semibold text-[#00F5D4]">Analytical Takeaway:</span>{" "}
            <span className="text-white/80">{current.insight}</span>
          </div>
        </div>
      </div>

      <div className="mt-4 text-right">
        <span className="text-[0.7rem] text-white/40 font-mono">
          * Analytical queries developed for Brazilian e-commerce dataset (Olist) exploring orders, payments, logistics, and review ratings.
        </span>
      </div>
    </div>
  );
}
