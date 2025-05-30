export default function Head() {
    return (
      <>
        <title>Virtual Japanese Vending Machine</title>
  
        {/* ✅ Twitterカード最上部に配置（順番が重要） */}
        <meta name="twitter:card" content="summary_large_image" key="twcard" />
        <meta name="twitter:title" content="Virtual Japanese Vending Machine" />
        <meta
          name="twitter:description"
          content="Try a realistic Japanese vending machine experience—interactive, fun, and free."
        />
        <meta
  name="twitter:image"
  content="https://virtual-vending-machine.vercel.app/og-image-new.jpg"
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
        <meta property="og:type" content="website" /> {/* Dummy comment to trigger redeploy */}

        <meta
          property="og:url"
          content="https://virtual-vending-machine.vercel.app"
        />
        <meta
  property="og:image"
  content="https://virtual-vending-machine.vercel.app/og-image-new.jpg"
/>
      </>
    );
  }
  
  
  