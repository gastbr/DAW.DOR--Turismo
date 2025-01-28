import { motion } from "framer-motion"

export default function Facilities() {
    return (
        <section id="facilities" className="mt-16 space-y-8 sm:px-6 flex flex-col items-center justify-center">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-white">Our Facilities</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {["Infinity Pool", "Spa & Wellness", "Fine Dining"].map((facility, index) => (
                    <motion.div
                        key={index}
                        className="bg-white shadow-lg rounded-lg p-6 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                        <h3 className="text-lg md:text-xl font-semibold mb-4">{facility}</h3>
                        <p className="text-gray-600">
                            Experience unmatched luxury with our {facility.toLowerCase()}.
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}