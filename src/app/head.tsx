// app/head.tsx
export default function Head() {
    return (
      <>
        <title>Virtual Japanese Vending Machine</title>
  
        {/* ✅ Twitterカード最上部に配置（順番が重要） */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Virtual Japanese Vending Machine" />
        <meta
          name="twitter:description"
          content="Try a realistic Japanese vending machine experience—interactive, fun, and free."
        />
        <meta
          name="twitter:image"
          content="https://virtual-vending-machine.vercel.app/og-image.png?v=4"
        />
  
        {/* ✅ OGPタグ群 */}
        <meta
          name="description"
          content="Try a realistic Japanese vending machine experience—interactive, fun, and free."
        />
        <meta property="og:title" content="Virtual Japanese Vending Machine" />
        <meta
          property="og:description"
          content="Explore Japan’s unique vending culture through this virtual interactive machine."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://virtual-vending-machine.vercel.app"
        />
        <meta
          property="og:image"
          content="https://virtual-vending-machine.vercel.app/og-image.png?v=4"
        />
      </>
    );
  }
  
  
  