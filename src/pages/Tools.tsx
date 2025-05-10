
import { usePersona } from "@/contexts/PersonaContext";
import { Card } from "@/components/ui/card";
import { Wrench } from "lucide-react";

const Tools = () => {
  const { persona } = usePersona();
  
  const tools = [
    {
      title: "LecToNotes",
      description: ( 
        <>
        LecToNotes is a software package for extracting text resources from technical 
        research mathematics lecture videos. It processes both the spoken audio and 
        blackboard content, converting them into structured JSON data that can be viewed 
        through a web-based dashboard. 
        The Github repo is available <a
  href="https://github.com/DaveArcher18/LecToNotes"
  className="text-inherit no-underline hover:underline hover:opacity-80 transition-all"
  target="_blank"
  rel="noopener noreferrer"
>
  here
</a>.
More coming soon! 
        </>
      )
      ,
      status: "Alpha Testing"
    }
  ];
  
  return (
    <div className="w-full max-w-4xl mx-auto animate-fade-in">
      <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center">
        Tools Under Development
      </h1>
      
      <div className="space-y-6">
        {tools.map((tool, index) => (
          <Card key={index} className="overflow-hidden border border-primary/20 bg-background/30 backdrop-blur-md transition-all duration-300 hover:shadow-md hover:border-primary/40">
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-md bg-primary/10">
                  <Wrench className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold mb-2">{tool.title}</h3>
                    <span className="text-sm text-muted-foreground">{tool.status}</span>
                  </div>
                  <p className="text-muted-foreground">{tool.description}</p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Tools;
