
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3500);
    } else {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 2000);
    }
  }

  return (
    <footer id="contact" className="py-24 bg-black/50 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-gray-400 tracking-widest">Let's get Started</p>
          <h2 className="text-5xl font-bold text-white mt-2">LET'S COLLABORATE</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-gray-400">
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4">Samin.</h3>
            <p className="mb-4 text-sm leading-relaxed">
              My approach is rooted in research, where I dig deep into user behaviours and feedback to inform.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3 bg-[#111]/70 p-4 rounded-lg">
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="bg-gray-800 border-gray-700"
                required
              />
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                className="bg-gray-800 border-gray-700"
                required
              />
              <Textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                className="bg-gray-800 border-gray-700 min-h-[70px]"
                required
              />
              <Button type="submit" className="bg-brand-purple hover:bg-brand-purple/90 w-full">
                Send Message
              </Button>
              {status === "success" && (
                <div className="text-green-500 text-xs mt-2">Message sent successfully!</div>
              )}
              {status === "error" && (
                <div className="text-red-500 text-xs mt-2">Please fill out all fields!</div>
              )}
            </form>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Pages</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#work" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Inner Pages</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Project Single</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Service Single</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog Single</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">404</a></li>
            </ul>
          </div>
          <div>
             <h4 className="text-white font-bold mb-4">Utility Pages</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Style Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Licenses</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Password Protected</a></li>
            </ul>
            <h4 className="text-white font-bold mb-4 mt-8">Social</h4>
            <ul className="space-y-2 text-sm">
                <li><a href="#" className="flex items-center hover:text-white transition-colors"><Instagram className="mr-2 h-4 w-4" /> Instagram</a></li>
                <li><a href="#" className="flex items-center hover:text-white transition-colors"><Linkedin className="mr-2 h-4 w-4" /> LinkedIn</a></li>
                <li><a href="#" className="flex items-center hover:text-white transition-colors"><span className="font-bold mr-2 text-sm inline-block w-4 h-4 text-center">Bē</span> Behance</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500 text-sm">
          <p>© Copyright 2025 | Design By Samin | Powered By Dribbble</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
