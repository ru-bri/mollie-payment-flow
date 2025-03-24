import MermaidChart from "./components/MermaidCharts";

export default function Home() {
  const chart = `
  sequenceDiagram
      participant User
      participant Storefront
      participant Backend
      participant Mollie

      User->>Storefront: Selects Payment Method
      Storefront->>Mollie: Loads Mollie Components (card holder, card number, expiry date and CVC)
      User->>Storefront: Enters Payment Details
      Storefront->>Mollie: Creates Card Token
      Mollie-->>Storefront: Returns Token
      Storefront->>Backend: Sends Token & Order Details
      Backend->>Mollie: Creates Payment via Orders API
      Mollie-->>Backend: Returns Payment URL
      Backend-->>Storefront: Redirects User to Payment Page
      User->>Mollie: Completes Payment
      Mollie-->>Backend: Sends Webhook (Payment Status)
      Backend->>Storefront: Updates Order Status
      Storefront->>User: Displays Confirmation
  `;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Mollie Payment Flow</h1>
      <MermaidChart chartCode={chart} />
    </div>
  );
}