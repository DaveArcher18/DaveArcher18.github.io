import { usePersona } from "@/contexts/PersonaContext";
import { Card } from "@/components/ui/card";
import { Users, Calendar, BookOpen } from "lucide-react";

const Organization = () => {
  const { persona } = usePersona();
  
  const events = [
    {
      title: "Sommersemester 2025: Shimura Varieties and their Canonical Models",
      description: (
        <>
          Together with <a 
            href="#" 
            className="text-inherit no-underline hover:underline hover:opacity-80 transition-all"
          >
            Fabian Schnelle
          </a> I am organising an introductory seminar about Shimura varieties and their canonical models. Here is the <a 
            href="pdfs/shimura_varieties_syllabus.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-inherit no-underline hover:underline hover:opacity-80 transition-all"
          >
            syllabus
          </a>. 
          <br></br>
          We meet on Mondays from 10:15-12:00 in the seminar room in the <a 
            href="https://www.mpim-bonn.mpg.de/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-inherit no-underline hover:underline hover:opacity-80 transition-all"
          >
            Max Planck Institute for Mathematics
          </a>.
        </>
      ),
      year: "2025",
      additionalInfo: (
        <>
          I would also like to advertise a seminar run by <a 
            href="https://alejandroovalleduque.github.io/index.html" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-inherit no-underline hover:underline hover:opacity-80 transition-all"
          >
            Alejandro Ovalle
          </a> and Samir Geiger: <a 
            href="https://alejandroovalleduque.github.io/derivedeq.html" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-inherit no-underline hover:underline hover:opacity-80 transition-all"
          >
            Seminar on Derived equivalences, Derived Torelli and Moduli
          </a>.
        </>
      )
    },
    {
      title: "Kleine AG March 2025 - Canonical models of Shimura Varieties",
      description: (
        <>
          Together with <a 
            href="https://www.uni-paderborn.de/person/104051" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-inherit no-underline hover:underline hover:opacity-80 transition-all"
          >
            Abhijit Aryampilly Jayanthan
          </a> I organised a meeting of Kleine AG on the 29th of March 2025. For more details please click <a 
            href="https://math.uni-paderborn.de/ag/arbeitsgruppe-algebra-und-zahlentheorie/kleine-ag" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-inherit no-underline hover:underline hover:opacity-80 transition-all"
          >
            here
          </a>. The report is available <a 
            href="pdfs/KleineAGMarch2025Report.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-inherit no-underline hover:underline hover:opacity-80 transition-all"
          >
            here
          </a>.
        </>
      ),
      year: "2025"
    },
    {
      title: "Wintersemester 2024/2025: K(n)-local and T(n)-local Ambidexterity",
      description: (
        <>
          Together with <a 
            href="https://guests.mpim-bonn.mpg.de/mor/Research.html" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-inherit no-underline hover:underline hover:opacity-80 transition-all"
          >
            Itamar Mor
          </a> I organised a seminar on Ambidexterity in Chromatic Homotopy Theory. The aim was to prove K(n)- and T(n)-local ambidexterity following Carmeli-Schlank-Yanovski, and then go through some applications in the new year. Here is the <a 
            href="pdfs/ambidexterity_syllabus_to_christmas.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-inherit no-underline hover:underline hover:opacity-80 transition-all"
          >
            syllabus
          </a> until the Christmas break.
        </>
      ),
      year: "2024-2025"
    }
  ];
  
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full max-w-3xl transform transition-all duration-1000 ease-out animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center">
          Organization
        </h1>
        
        <div className="space-y-6">
          {events.map((event, index) => (
            <Card key={index} className="overflow-hidden border border-primary/20 bg-background/30 backdrop-blur-md transition-all duration-300 hover:shadow-md hover:border-primary/40">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-md bg-primary/10">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start flex-wrap">
                      <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                      <span className="text-sm">{event.year}</span>
                    </div>
                    <div className="space-y-4">
                      <p className="leading-relaxed">{event.description}</p>
                      {event.additionalInfo && (
                        <p className="leading-relaxed mt-2">{event.additionalInfo}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Organization;
