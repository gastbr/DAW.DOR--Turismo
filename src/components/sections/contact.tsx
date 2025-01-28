import { Button } from "@/components/ui/button";

export default function Contact() {
    return (
        <section id="contact" className="sm:px-6 mt-16 text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Get in Touch</h2>
            <p className="text-white max-w-lg mx-auto">
                Reach out for inquiries, bookings, or to learn more about our exclusive offers.
            </p>
            <Button className="bg-yellow-400 hover:bg-yellow-300 text-white px-6 py-2 rounded-lg shadow-md">
                Contact Us
            </Button>
        </section>
    )
}