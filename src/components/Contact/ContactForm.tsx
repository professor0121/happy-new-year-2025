import { useForm } from 'react-hook-form';
import { ContactForm as ContactFormType } from '../../types';
import { sendEmail } from '../../services/email';
import toast, { Toaster } from 'react-hot-toast';

export const ContactForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormType>();

  const onSubmit = async (data: ContactFormType) => {
    try {
      await sendEmail(data);
      toast.success('Message sent successfully!');
      reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('Email error:', error);
    }
  };

  return (
    <>
      <Toaster position="top-right" />
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
    </>
  );
};