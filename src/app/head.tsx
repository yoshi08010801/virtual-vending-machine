// app/head.tsx
export default function Head() {
    return (
      <>
        <title>Virtual Japanese Vending Machine</title>
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
  
        {/* ✅ OGP画像ここから追加 */}
        <meta
          property="og:image"
          content="https://virtual-vending-machine.vercel.app/og-image.png"
        />
        <meta
  name="twitter:image"
  content="https://virtual-vending-machine.vercel.app/og-image.png?v=3"
/>

        <meta name="twitter:card" content="summary_large_image" />
        {/* ✅ ここまで */}
  
        <meta
          name="twitter:title"
          content="Virtual Japanese Vending Machine"
        />
        <meta
          name="twitter:description"
          content="Try a realistic Japanese vending machine experience—interactive, fun, and free."
        />
      </>
    );
  }
  
  