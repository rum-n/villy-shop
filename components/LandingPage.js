import RenderSections from "./RenderSections";

function LandingPage({ page = {} }) {
  const { content = [] } = page;
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
      <RenderSections sections={content} />
    </div>
  );
}

export default LandingPage;
