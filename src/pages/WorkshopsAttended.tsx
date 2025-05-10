import { usePersona } from "@/contexts/PersonaContext";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";

const WorkshopsAttended = () => {
  const { persona } = usePersona();
  
  const pastWorkshops = [
    {
      title: "Real algebraic K-theory and trace methods",
      link: "https://www.math.univ-paris13.fr/~harpaz/realk/",
      location: "Paris",
      month: "May",
      year: "2024"
    },
    {
      title: "Betti numbers in commutative algebra and equivariant homotopy theory",
      link: "https://www.math.uni-bielefeld.de/birep/meetings/betti2024/",
      location: "Bielefeld",
      month: "September",
      year: "2024"
    },
    {
      title: "Unstable Homotopy Theory",
      link: "https://www.mpim-bonn.mpg.de/UHT",
      location: "Bonn",
      month: "November",
      year: "2024"
    },
    {
      title: "Arithmetic, Geometry, Space and Time",
      link: "https://www.icms.org.uk/ArithmeticGeometrySpaceandTime",
      location: "Edinburgh",
      month: "November",
      year: "2024"
    },
    {
      title: "Equivariant homotopy theory in context",
      link: "https://www.newton.ac.uk/event/eht/",
      location: "Cambridge",
      month: "January",
      year: "2025"
    },
    {
      title: "Workshop: Lurie's Elliptic Cohomology",
      link: "https://sites.google.com/view/workshop-ec2025",
      location: "Wuppertal",
      month: "April",
      year: "2025"
    }
  ];
  
  const upcomingWorkshops = [
    
  ];
  
  const WorkshopSection = ({ title, workshops }) => (
    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 border-b pb-2">{title}</h2>
      {workshops.length > 0 ? (
        <Card className="overflow-hidden border border-primary/20 bg-background/30 backdrop-blur-md">
          <div className="p-6">
            <ul className="space-y-3">
              {workshops.map((workshop, index) => (
                <li key={index} className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-2 items-baseline">
                  <span>
                    <a
                      href={workshop.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-inherit no-underline hover:underline hover:opacity-80 transition-all"
                    >
                      {workshop.title}
                    </a>
                  </span>
                  <span className="text-sm text-muted-foreground flex items-center justify-end whitespace-nowrap">
                    <MapPin className="h-3 w-3 min-w-3 mr-1" />
                    {workshop.location}
                    <span className="mx-1">·</span>
                    {workshop.month} {workshop.year}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Card>
      ) : (
        <p className="italic text-muted-foreground">No {title.toLowerCase()} workshops at the moment.</p>
      )}
    </section>
  );
  
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl transform transition-all duration-1000 ease-out animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center">
          Workshops Attended
        </h1>
        
        <div className="space-y-6">
          <WorkshopSection title="Upcoming Workshops" workshops={upcomingWorkshops} />
          <WorkshopSection title="Past Workshops" workshops={pastWorkshops} />
        </div>
      </div>
    </div>
  );
};

export default WorkshopsAttended;
