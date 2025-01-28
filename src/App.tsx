import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Rooms from "./components/sections/rooms";
import Header from "./components/header";
import Footer from "./components/footer";
import Facilities from "./components/sections/facilities";
import Contact from "./components/sections/contact";
import "./App.css";

function App() {

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-blue-100 via-blue-300 to-blue-500 text-gray-900">
      <Header />

      <main className="container mx-auto py-12">
        <section className="section-hero text-center space-y-6 p-0 flex flex-col items-center justify-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold text-white"
          >
            Welcome to Paradise
          </motion.h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Discover the perfect getaway with our stunning ocean views, luxurious
            rooms, and world-class facilities.
          </p>
          <Button className="bg-yellow-400 hover:bg-yellow-300 text-white px-6 py-2 rounded-lg shadow-md">
            Book Now
          </Button>
        </section>

        <Rooms />
        <Facilities />
        <Contact />

      </main>

      <Footer />
    </div>
  )
}

export default App
