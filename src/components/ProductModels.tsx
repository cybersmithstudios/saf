import { useMemo } from "react";
import CloudinaryVideo from "./CloudinaryVideo";

type Step = {
  src: string;
  caption: string;
  fallbackSrc?: string;
};

type SetupGroup = {
  title: string;
  steps: Step[];
};

const buildTwoSeaterSteps = (): Step[] => {
  return Array.from({ length: 9 }).map((_, idx) => {
    const stepNumber = idx + 1;
    return {
      src: `/2seater-scematics/${stepNumber}.jpg`,
      caption: ``,
    } as Step;
  });
};

const buildLuganoTableSteps = (): Step[] => {
  // Folder: /Lugano Table Setup, files: 1.jpg - 4.jpg
  return [1, 2, 3, 4].map((n) => ({
    src: `/Lugano Table Setup/${n}.jpg`,
    caption: `Step ${n}`,
  }));
};

const buildLuganoSingleSteps = (): Step[] => {
  return Array.from({ length: 7 }).map((_, idx) => {
    const stepNumber = idx + 1;
    return {
      src: `/Lugano Single Setup/${stepNumber}.png`,
      fallbackSrc: `/Lugano Single Setup/${stepNumber}.jpg`,
      caption: ``,
    } as Step;
  });
};

const buildSantoriniArmchairSteps = (): Step[] => {
  return Array.from({ length: 8 }).map((_, idx) => {
    const stepNumber = idx + 1;
    return {
      src: `/Santorini Armchair Setup/${stepNumber}.jpg`,
      fallbackSrc: `/Santorini Armchair Setup/${stepNumber}.png`,
      caption: `Step ${stepNumber}`,
    } as Step;
  });
};

const ProductModels = () => {
  const groups: SetupGroup[] = useMemo(
    () => [
      {
        title: "Lugano Single Setup",
        steps: buildLuganoSingleSteps(),
      },
      {
        title: "2seater Lugano setup",
        steps: buildTwoSeaterSteps(),
      },
      {
        title: "Lugano table setup",
        steps: buildLuganoTableSteps(),
      },
      {
        title: "Santorini Armchair Setup",
        steps: buildSantoriniArmchairSteps(),
      },
    ],
    []
  );

  const videoPublicIds: Record<string, string | undefined> = {
    "Lugano Single Setup": "v1757424927/Lugano_Single_Seater_tbbizc",
    "2seater Lugano setup": "v1757424957/Lugano_Double_Seater_bazuo1",
    "Lugano table setup": "v1757424907/Lugano_Table_ea5gwq",
    "Santorini Armchair Setup": "v1757424946/Santorini_Armchair_k6awcq",
  };

  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-extrabold">Product Models</h2>
          <p className="text-sm md:text-base mt-2 md:mt-3 text-muted-foreground">
            Step-by-step arrangement manuals
          </p>
        </div>

        <div className="space-y-12 md:space-y-16">
          {groups.map((group) => (
            <section key={group.title}>
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
                {group.title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {group.steps.map((step, idx) => (
                  <figure
                    key={`${group.title}-${idx}`}
                    className="rounded-xl overflow-hidden border bg-white"
                  >
                    <div className="aspect-[4/3] w-full overflow-hidden">
                      <img
                        src={step.src}
                        alt={`${group.title}`}
                        loading="lazy"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const img = e.currentTarget as HTMLImageElement;
                          if (step.fallbackSrc && img.src !== window.location.origin + step.fallbackSrc) {
                            img.src = step.fallbackSrc;
                          }
                        }}
                      />
                    </div>
                  </figure>
                ))}
              </div>
              {videoPublicIds[group.title] && (
                <div className="mt-6 rounded-xl overflow-hidden border bg-white">
                  <h4 className="text-lg font-semibold mb-2">Assembly Video</h4>
                  <CloudinaryVideo
                    publicId={videoPublicIds[group.title]!}
                    className="w-full aspect-video"
                    controls
                  />
                </div>
              )}
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductModels;


