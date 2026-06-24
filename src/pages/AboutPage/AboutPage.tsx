import { PageHero } from "../../components/common/PageHero/PageHero";

export function AboutPage() {
  return (
    <main>
      <PageHero
        title="About CCP"
        description="We are a creative agency that believes content should do more than look good."
      />
      <div className="container" style={{ padding: "100px 0", textAlign: "center" }}>
        <h2>Coming Soon</h2>
        <p>About page and team profiles under construction.</p>
      </div>
    </main>
  );
}
