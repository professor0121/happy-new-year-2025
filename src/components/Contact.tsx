import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/animations';

export const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Get in Touch</h2>
          
          <div className="max-w-lg mx-auto">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  {...register("name", { required: true })}
                  className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500"
                />
                {errors.name && <span className="text-red-500 text-sm">Name is required</span>}
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  {...register("email", { 
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                  })}
                  className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500"
                />
                {errors.email && <span className="text-red-500 text-sm">Valid email is required</span>}
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  {...register("message", { required: true })}
                  className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500"
                  rows={4}
                />
                {errors.message && <span className="text-red-500 text-sm">Message is required</span>}
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">Subscribe to my technical newsletter</p>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 mb-4"
              />
              <button
                className="w-full bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-900 transition-colors"
              >
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};