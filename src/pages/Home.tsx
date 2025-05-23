import { usePersona } from "@/contexts/PersonaContext";
import { Card } from "@/components/ui/card";

// ✅ Move reusable JSX out of the component body
const MathDescription = () => (
  <>
    I am currently a Master's student in my second year at the{" "}
    <a
      href="https://www.uni-bonn.de/en"
      className="text-inherit no-underline hover:underline hover:opacity-80 transition-all"
      target="_blank"
      rel="noopener noreferrer"
    >
      University of Bonn
    </a>. Broadly, I enjoy Stable Homotopy Theory and Algebraic Geometry as well as their interactions.
    At the moment, I am trying to learn about Chromatic Homotopy Theory.
  </>
);

const CorporateDescription = () => (
  <>
    I work part-time at <strong>an agent AI startup</strong>{" "}
    <a
      href="https://omvi.ai"
      className="text-inherit no-underline hover:underline hover:opacity-80 transition-all"
      target="_blank"
      rel="noopener noreferrer"
    >
      omvi.ai
    </a>, focusing on automation and AI agents. I am interested in building user-focused tools for
    mathematics and general automations using modern AI technology.
  </>
);

const Home = () => {
  const { persona } = usePersona();

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full max-w-3xl transform transition-all duration-1000 ease-out animate-fade-in">
        <Card
          className={`bg-background/30 backdrop-blur-md border-primary/20 transition-all duration-700 
            ${persona === 'math'
              ? 'hover:bg-background/40 hover:shadow-lg hover:scale-[1.02]'
              : 'hover:bg-background/40 hover:shadow-2xl hover:scale-[1.02]'}`}
        >
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4 transform transition-all duration-700">
              David Bowman
            </h2>
            <div className="space-y-4">
              <p className="leading-relaxed transform transition-all duration-700">
                {persona === 'math' ? <MathDescription /> : <CorporateDescription />}
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Home;
