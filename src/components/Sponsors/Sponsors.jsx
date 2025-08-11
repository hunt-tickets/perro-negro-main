import { motion } from 'framer-motion';

const Sponsors = () => {
  const sponsors = [
    {
      name: "Espacio Patrocinador 1",
      logo: null,
      placeholder: true
    },
    {
      name: "Inside Entertainment", 
      logo: "https://jtfcfsnksywotlbsddqb.supabase.co/storage/v1/object/public/perro-negro//inside_logo.jpg"
    },
    {
      name: "ALS Producciones",
      logo: "https://jtfcfsnksywotlbsddqb.supabase.co/storage/v1/object/public/perro-negro//als_producciones.png"
    },
    {
      name: "Espacio Patrocinador 3",
      logo: null,
      placeholder: true
    },
    {
      name: "Espacio Patrocinador 4", 
      logo: null,
      placeholder: true
    },
    {
      name: "Espacio Patrocinador 5",
      logo: null,
      placeholder: true
    },
    {
      name: "Espacio Patrocinador 6",
      logo: null,
      placeholder: true
    },
    {
      name: "Espacio Patrocinador 7",
      logo: null,
      placeholder: true
    }
  ];

  return (
    <section className="w-full bg-black py-16 lg:py-24 overflow-hidden">
      {/* Infinite Carousel */}
      <div className="relative">
        <motion.div
          className="flex"
          animate={{
            x: [0, -50 + '%']
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 15,
              ease: "linear",
            },
          }}
        >
          {/* Original sponsors */}
          {sponsors.map((sponsor, index) => (
            <div
              key={`original-${index}`}
              className="flex-shrink-0 w-40 h-20 sm:w-64 sm:h-32 flex items-center justify-center p-3 sm:p-6"
            >
              {sponsor.placeholder ? (
                <div className="w-full h-full border-2 border-perro-gray border-dashed flex items-center justify-center">
                  <span className="text-perro-gray text-xs sm:text-sm font-bold text-center px-2 sm:px-4">
                    {sponsor.name}
                  </span>
                </div>
              ) : (
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className={`object-contain opacity-60 filter grayscale ${
                    sponsor.name === "Inside Entertainment" 
                      ? "max-w-[80%] max-h-[80%]" 
                      : "max-w-full max-h-full"
                  }`}
                />
              )}
            </div>
          ))}
          {/* Duplicated sponsors for seamless loop */}
          {sponsors.map((sponsor, index) => (
            <div
              key={`duplicate-${index}`}
              className="flex-shrink-0 w-40 h-20 sm:w-64 sm:h-32 flex items-center justify-center p-3 sm:p-6"
            >
              {sponsor.placeholder ? (
                <div className="w-full h-full border-2 border-perro-gray border-dashed flex items-center justify-center">
                  <span className="text-perro-gray text-xs sm:text-sm font-bold text-center px-2 sm:px-4">
                    {sponsor.name}
                  </span>
                </div>
              ) : (
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className={`object-contain opacity-60 filter grayscale ${
                    sponsor.name === "Inside Entertainment" 
                      ? "max-w-[80%] max-h-[80%]" 
                      : "max-w-full max-h-full"
                  }`}
                />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsors;