import ContactForm from '@/components/contact-form'

export default function Contact() {
  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <h2 className='text-4xl font-bold tracking-tight'>Contact me</h2>
        <p className='mt-2 text-lg leading-8 text-zinc-400 dark:text-zinc-500'>
          Feel free to send me a message, I will get back to you as soon as
          possible.
        </p>
        <ContactForm />
      </div>
    </section>
  )
}
