import { motion } from 'framer-motion';

const Tickets = () => {
  const ticketTiers = [
    {
      name: "GENERAL",
      price: "50.000",
      currency: "COP",
      status: "DISPONIBLE",
      features: [
        "Acceso general al evento",
        "Entrada digital"
      ],
      available: true,
      popular: true,
      accent: "perro-red"
    },
    {
      name: "VIP",
      price: "85.000",
      currency: "COP",
      status: "LIMITADO",
      features: [
        "Todo lo incluido en General",
        "Área exclusiva VIP"
      ],
      available: true,
      accent: "yellow-400"
    },
    {
      name: "MESA VIP",
      price: "2.300.000",
      currency: "COP",
      status: "EXCLUSIVO",
      features: [
        "Todo lo incluido en VIP",
        "Mesa privada para 10 personas"
      ],
      available: true,
      accent: "yellow-400"
    }
  ];

  return (
    <section className="w-full bg-black">
      {/* Full Width Grid - No margins or padding */}
      <div className="grid grid-cols-1 lg:grid-cols-3 w-full">
        {ticketTiers.map((ticket, index) => (
          <motion.div
            key={ticket.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.2
            }}
            viewport={{ once: true }}
            className={`
              relative bg-black min-h-[40vh] sm:min-h-[50vh] h-auto sm:h-[50vh] flex flex-col justify-end p-6 sm:p-8 lg:p-12 xl:p-16
              border-t border-b border-perro-gray sm:border-r
            `}
          >
            
            
            {/* Status Badge */}
            <div className="absolute top-8 right-8">
              <div className={`px-3 py-1 text-xs font-bold uppercase tracking-wider ${
                ticket.available 
                  ? 'bg-perro-gray-light/20 text-perro-gray-light border border-perro-gray-light/30' 
                  : 'bg-perro-gray/20 text-perro-gray border border-perro-gray/30'
              }`}>
                {ticket.status}
              </div>
            </div>

            {/* Content Container */}
            <div className="relative z-10">
              
              {/* Ticket Name */}
              <div className="mb-8">
                <h3 className="text-gray-100 text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black font-title">
                  {ticket.name}
                </h3>
              </div>

              {/* Price Display */}
              <div className="mb-10">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-gray-400 text-lg sm:text-xl">$</span>
                  <span className={`text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-none ${
                    ticket.popular ? 'text-perro-red' : 'text-perro-red'
                  }`}>
                    {ticket.price}
                  </span>
                </div>
                <div className="text-gray-400 text-base sm:text-lg font-medium">{ticket.currency} <span className="text-sm sm:text-base">+ tarifa de servicio</span></div>
              </div>

              {/* Features List */}
              <div className="mb-10">
                <div className="space-y-4">
                  {ticket.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-3 flex-shrink-0 ${
                        ticket.popular ? 'bg-perro-red' : 'bg-perro-red'
                      }`} />
                      <span className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Buy Button */}
              <button
                className={`
                  w-full py-4 px-6 sm:px-8 font-semibold text-sm sm:text-lg lg:text-xl transition-all duration-300 uppercase tracking-wider min-h-[44px]
                  ${ticket.popular 
                    ? 'bg-perro-red text-gray-100 hover:bg-transparent hover:text-perro-red border-2 border-perro-red'
                    : 'bg-perro-red text-gray-100 hover:bg-transparent hover:text-perro-red border-2 border-perro-red'
                  }
                `}
              >
                COMPRAR AHORA
              </button>
              
            </div>
            
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Tickets;