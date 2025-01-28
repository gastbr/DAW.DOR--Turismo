import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function Rooms() {
    return (
        <section id="rooms" className="mt-12 sm:px-6 h-screen flex flex-col items-center justify-center gap-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-white">Our Rooms</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {["Deluxe Suite", "Ocean View Room", "Family Suite"].map((room, index) => (
                    <Card key={index} className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col  items-center h-fit p-8">
                        <motion.img
                            src={`https://vspahotel.ee/wp-content/uploads/2023/11/IMGM2428_websize_fotograaf.lauri_.laan_-680x380.jpg`}
                            alt={room}
                            className="h-48 motion-img"
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        />
                        <CardContent className="p-4">
                            <h3 className="text-lg md:text-xl font-semibold">{room}</h3>
                            <p className="text-gray-600">Starting from €150/night</p>
                            <button className="mt-4 bg-yellow-400 hover:bg-yellow-300 text-white px-6 py-2 rounded-lg shadow-md">
                                Book Now
                            </button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}