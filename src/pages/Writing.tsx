import { usePersona } from "@/contexts/PersonaContext";
import { Card } from "@/components/ui/card";
import { FileText, BookOpen, ExternalLink } from "lucide-react";

const Writing = () => {
  const { persona } = usePersona();
  
  const publications = [
    {
      title: "A construction of deformations to general algebras",
      description: (
        <>
          Co-authored with Dora Puljić and Agata Smoktunowicz.{" "}
          <a
            href="https://doi.org/10.1093/imrn/rnae077"
            className="text-inherit no-underline hover:underline hover:opacity-80 transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            DOI
          </a>
          {" "}|{" "}
          <a
            href="https://www.youtube.com/watch?v=7TiXML6meLM"
            className="text-inherit no-underline hover:underline hover:opacity-80 transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            Related talk
          </a>
        </>
      ),
      year: "2023",
      link: "https://arxiv.org/abs/2305.03446"
    }
  ];
  
  const notes = [
    {
      title: "A Story about Schemes",
      description: "Informal notes with the purpose of defining a scheme and showing that the category of Affine schemes equivalent to the opposite of the category of commutative rings",
      link: "pdfs/A_Story_about_Schemes.pdf"
    },
    {
      title: "Stable infinity ∞-Categories and t-structures",
      description: (
        <>
          Notes about Stable infinity ∞-Categories and t-structures for a talk given in a <a
            href="https://www.dropbox.com/scl/fi/z1so1sw5f02po58yvu37r/Higher-algebra.pdf?rlkey=ju0ssl68rpwb4xbde87j51d9l&e=1&dl=0"
            className="text-inherit no-underline hover:underline hover:opacity-80 transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            seminar
          </a> organised by <a
            href="https://sites.google.com/view/jackmdavies/home"
            className="text-inherit no-underline hover:underline hover:opacity-80 transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jack Davies
          </a> and <a
            href="https://www.math.uni-bonn.de/people/schwede/"
            className="text-inherit no-underline hover:underline hover:opacity-80 transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            Stefan Schwede
          </a> based on <a
            href="https://people.math.harvard.edu/~lurie/papers/HA.pdf"
            className="text-inherit no-underline hover:underline hover:opacity-80 transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lurie's Higher Algebra
          </a> for credit towards a Masters degree at Bonn.{" "}

        </>
      ),
      link: "pdfs/Stable_categories_and_t_structures_notes.pdf"
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full max-w-3xl transform transition-all duration-1000 ease-out animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center">
          Writing
        </h1>
      
        <div className="space-y-10">
          {/* Publications Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Publications</h2>
            <div className="space-y-4">
              {publications.map((publication, index) => (
                <Card key={index} className="bg-background/30 backdrop-blur-md border-primary/20 transition-all duration-700 hover:bg-background/40 hover:shadow-lg hover:scale-[1.02]">
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-md bg-primary/10">
                        <FileText className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start flex-wrap">
                          <h3 className="text-xl font-semibold mb-2">
                            <a 
                              href={publication.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-inherit no-underline hover:underline hover:opacity-80 transition-all flex items-center"
                            >
                              {publication.title}
                              <ExternalLink className="h-4 w-4 ml-1" />
                            </a>
                          </h3>
                          <span className="text-sm">{publication.year}</span>
                        </div>
                        <p className="leading-relaxed">{publication.description}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Notes Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Notes</h2>
            <div className="space-y-4">
              {notes.map((note, index) => (
                <Card key={index} className="overflow-hidden border border-primary/20 bg-background/30 backdrop-blur-md transition-all duration-300 hover:shadow-md hover:border-primary/40">
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-md bg-primary/10">
                        <BookOpen className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">
                          <a 
                            href={note.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-inherit no-underline hover:underline hover:opacity-80 transition-all flex items-center"
                          >
                            {note.title}
                            <ExternalLink className="h-4 w-4 ml-1" />
                          </a>
                        </h3>
                        <p className="leading-relaxed mb-3">{note.description}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Writing;